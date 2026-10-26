/* Testharnas voor Boekhoudapp Kern 6 (Odette Lunettes.edu).
 *
 * Draait de echte app in jsdom en de echte Code.gs in Node, met een
 * nagemaakte Google-omgeving ertussen: één Sheet met tabbladen per
 * vestiging. Getest wordt het volledige pad: installeren -> aanmelden per
 * vestiging -> indienen -> automatisch nakijken met de sleutel -> feedback
 * vrijgeven -> terug in de app, plus de grijze lijn, de verplichte relatie en
 * het vrijgeven van de automatisch geboekte facturen.
 *
 * Draaien:  npm i jsdom   (ergens waar node het vindt)
 *           node test/test-k6.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
let JSDOM;
try { ({ JSDOM } = require("jsdom")); } catch (e) { ({ JSDOM } = require("/tmp/node_modules/jsdom")); }

const BRON = path.join(__dirname, "..");
const APP = "/tmp/t-k6";
// Een verzonnen sleutel: de echte oplossing hoort niet in deze repo (alles
// wat via GitHub Pages gepubliceerd wordt, is voor iedereen leesbaar).
const VK_REFS = ["VK01", "VK02", "VK03", "VK04", "VK05", "VK06", "VK07", "ONTV01", "VK08", "VK09"];
const SLEUTEL_RIJEN = [
  { ref: "AK01", nr: "604000", dc: "D", b: 1000 },
  { ref: "AK01", nr: "411100", dc: "D", b: 210 },
  { ref: "AK01", nr: "440000", dc: "C", b: 1210, rel: "Uitgeverij Lannoo NV" },
  { ref: "AK02", nr: "604000", dc: "D", b: 500 },
  { ref: "AK02", nr: "604020", dc: "C", b: 100 },
  { ref: "AK02", nr: "411100", dc: "D", b: 84 },
  { ref: "AK02", nr: "440000", dc: "C", b: 484, rel: "Hoya Lens Belgium NV" },
  { ref: "AK03", nr: "604000", dc: "D", b: 2000 },
  { ref: "AK03", nr: "440000", dc: "C", b: 2000, rel: "Binoche Belgian Eyewear bv" },
].concat(...VK_REFS.map((ref) => [
  { ref, nr: "704000", dc: "C", b: 100 },
  { ref, nr: "451100", dc: "C", b: 21 },
  { ref, nr: "400000", dc: "D", b: 121, rel: "Brilart" },
]));

function kopieerApp(doel, bestanden) {
  fs.rmSync(doel, { recursive: true, force: true });
  ["", "css", "js", "apps-script"].forEach((m) => fs.mkdirSync(path.join(doel, m), { recursive: true }));
  ["index.html", "css/style.css", "apps-script/Code.gs"].forEach((b) => {
    fs.copyFileSync(path.join(BRON, b), path.join(doel, b));
  });
  fs.readdirSync(path.join(BRON, "js")).forEach((b) => {
    fs.copyFileSync(path.join(BRON, "js", b), path.join(doel, "js", b));
  });
  Object.keys(bestanden).forEach((b) => fs.writeFileSync(path.join(doel, b), bestanden[b]));
}

const CODE_GS = fs.readFileSync(path.join(BRON, "apps-script/Code.gs"), "utf8")
  .replace(/var SLEUTEL = "[^"]*";/, 'var SLEUTEL = "TEST";')
  .replace(/var MAP_ID_GEDEELD = "[^"]*";/, 'var MAP_ID_GEDEELD = "map-gedeeld";');

// Drie vestigingen, één en dezelfde web-app.
const URL_ = "https://fake/exec";
kopieerApp(APP, {
  "js/config-koppeling.js":
    "const VESTIGINGEN = " + JSON.stringify(["LEU", "SKW", "TW"].map((c) => ({ code: c, naam: c, webAppUrl: URL_, sleutel: "TEST" }))) + ";\n" +
    "const KOPPELING = { bewaarIntervalMinuten: 2, feedbackBijOpstart: true };\n",
});

let fouten = 0;
function check(naam, voorwaarde, extra) {
  console.log((voorwaarde ? "  ok   " : "  FOUT ") + naam + (voorwaarde || extra === undefined ? "" : "  -> " + JSON.stringify(extra)));
  if (!voorwaarde) fouten++;
}
let actiefBlad = "Inzendingen LEU";
const wacht = (ms) => new Promise((r) => setTimeout(r, ms));

/* ===================== nagemaakte Google-omgeving ===================== */

class Range {
  constructor(sheet, r, c, nr, nc) { Object.assign(this, { sheet, r, c, nr, nc }); }
  getValues() {
    const uit = [];
    for (let i = 0; i < this.nr; i++) {
      const rij = [];
      for (let j = 0; j < this.nc; j++) rij.push(this.sheet.cel(this.r + i, this.c + j));
      uit.push(rij);
    }
    return uit;
  }
  setValues(v) {
    v.forEach((rij, i) => rij.forEach((w, j) => this.sheet.zet(this.r + i, this.c + j, w)));
    return this;
  }
  getValue() { return this.sheet.cel(this.r, this.c); }
  setValue(v) { this.sheet.zet(this.r, this.c, v); return this; }
  insertCheckboxes() { return this; }
  setDataValidation() { return this; }
  setNumberFormat() { return this; }
  setWrap() { return this; }
  setVerticalAlignment() { return this; }
  setFontWeight() { return this; }
  setBackground() { return this; }
  createFilter() { return this; }
  getRow() { return this.r; }
}

class Sheet {
  constructor(naam) { this.naam = naam; this.rijen = []; }
  cel(r, c) { return (this.rijen[r - 1] || [])[c - 1] ?? ""; }
  zet(r, c, v) {
    while (this.rijen.length < r) this.rijen.push([]);
    const rij = this.rijen[r - 1];
    while (rij.length < c) rij.push("");
    rij[c - 1] = v;
  }
  getName() { return this.naam; }
  getLastRow() { return this.rijen.length; }
  getMaxRows() { return Math.max(this.rijen.length + 100, 200); }
  getRange(a, b, c, d) {
    if (typeof a === "string") return new Range(this, 1, 1, this.getMaxRows(), 20);
    return new Range(this, a, b, c ?? 1, d ?? 1);
  }
  setColumnWidth() { return this; }
  setFrozenRows() { return this; }
  setConditionalFormatRules() { return this; }
  getFilter() { return this.filter || null; }
  getActiveCell() { return new Range(this, this.actieveRij || 2, 1, 1, 1); }
}

const sheets = {};
const ss = {
  getSheetByName: (n) => sheets[n] || null,
  insertSheet: (n) => (sheets[n] = new Sheet(n)),
};

class Bestand {
  constructor(naam, inhoud) { this.naam = naam; this.inhoud = inhoud; this.gemaakt = new Date(); }
  getName() { return this.naam; }
  setContent(i) { this.inhoud = i; return this; }
  getBlob() { return { getDataAsString: () => this.inhoud }; }
  getDateCreated() { return this.gemaakt; }
  setTrashed() { this.verwijderd = true; return this; }
}
class Map_ {
  constructor(naam) { this.naam = naam; this.bestanden = []; this.mappen = []; this.id = "map-" + naam; }
  getId() { return this.id; }
  getName() { return this.naam; }
  getUrl() { return "https://drive.google.com/drive/folders/" + this.id; }
  isTrashed() { return false; }
  createFile(n, i) { const b = new Bestand(n, i); this.bestanden.push(b); return b; }
  getFilesByName(n) { return iter(this.bestanden.filter((b) => b.naam === n && !b.verwijderd)); }
  getFiles() { return iter(this.bestanden.filter((b) => !b.verwijderd)); }
  getFoldersByName(n) { return iter(this.mappen.filter((m) => m.naam === n)); }
  getFolders() { return iter(this.mappen); }
  createFolder(n) { const m = new Map_(n); this.mappen.push(m); return m; }
}
function iter(lijst) { let i = 0; return { hasNext: () => i < lijst.length, next: () => lijst[i++] }; }
const root = new Map_("root");
// De map op de "gedeelde Drive": ze hangt niet onder root, precies zoals in
// het echt. Het script moet ze via haar ID vinden.
const gedeeld = new Map_("Boekhoudapp Kern 6 werkbestanden");
gedeeld.id = "map-gedeeld";
// Met een hoofdletter, zoals iemand die map met de hand zou aanmaken: het
// script moet ze herkennen en er geen tweede naast zetten.
gedeeld.createFolder("Versies");
const alleMappen = { "map-root": root, "map-gedeeld": gedeeld };
function registreer(m) { alleMappen[m.id] = m; m.mappen.forEach(registreer); }

const props = {};
let laatsteAlert = "";
let antwoordPrompt = "";   // wat de "leerkracht" in een prompt tikt
let antwoordKnop = "YES";  // welke knop ze in een ja/nee-venster kiest

const omgeving = {
  console,
  JSON, Date, Math, String, Number, Object, Array, Error, isNaN, parseInt, parseFloat,
  SpreadsheetApp: {
    getActiveSpreadsheet: () => ss,
    getActiveSheet: () => sheets[actiefBlad],
    flush: () => {},
    getUi: () => ({
      // Eén argument = gewone melding; drie = een ja/nee-venster.
      alert: (t, b, c) => { laatsteAlert = c === undefined ? t : t + "\n" + b; return antwoordKnop; },
      prompt: () => ({ getSelectedButton: () => "OK", getResponseText: () => antwoordPrompt }),
      Button: { OK: "OK", YES: "YES", NO: "NO" },
      ButtonSet: { OK_CANCEL: "ok_cancel", YES_NO: "yes_no" },
      createMenu: () => ({ addItem() { return this; }, addSeparator() { return this; }, addToUi() {} }),
    }),
    newDataValidation: () => ({ requireValueInList() { return this; }, setAllowInvalid() { return this; }, build: () => ({}) }),
    newConditionalFormatRule: () => ({ whenTextEqualTo() { return this; }, setBackground() { return this; }, setRanges() { return this; }, build: () => ({}) }),
  },
  ContentService: {
    MimeType: { JSON: "json" },
    createTextOutput: (t) => ({ tekst: t, setMimeType() { return this; } }),
  },
  LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock() {} }) },
  PropertiesService: {
    getScriptProperties: () => ({ getProperty: (k) => props[k] || null, setProperty: (k, v) => { props[k] = v; } }),
  },
  DriveApp: { getRootFolder: () => root, getFolderById: (id) => { registreer(root); if (!alleMappen[id]) throw new Error("weg"); return alleMappen[id]; } },
  MimeType: { PLAIN_TEXT: "text/plain" },
  Session: { getScriptTimeZone: () => "Europe/Brussels" },
  Utilities: {
    formatDate: (d, tz, pat) => {
      const p = (n) => String(n).padStart(2, "0");
      return pat.replace("yyyy", d.getFullYear()).replace("MMdd", p(d.getMonth() + 1) + p(d.getDate()))
        .replace("MM", p(d.getMonth() + 1)).replace("dd", p(d.getDate()))
        .replace("HHmmss", p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds()))
        .replace("HHmm", p(d.getHours()) + p(d.getMinutes())).replace("d", d.getDate());
    },
  },
};
vm.createContext(omgeving);
vm.runInContext(CODE_GS, omgeving);

/* ===================== nagemaakte server ===================== */

const verzoeken = [];
let serverVertraging = 0;   // ms: een trage opstart van het script nabootsen
function server(url, opts) {
  const u = new URL(url);
  let r;
  if (!opts || opts.method === "GET") {
    const parameter = {};
    u.searchParams.forEach((v, k) => (parameter[k] = v));
    verzoeken.push(parameter);
    r = omgeving.doGet({ parameter });
  } else {
    verzoeken.push(JSON.parse(opts.body));
    r = omgeving.doPost({ postData: { contents: opts.body } });
  }
  const antw = { json: () => Promise.resolve(JSON.parse(r.tekst)) };
  return serverVertraging ? wacht(serverVertraging).then(() => antw) : Promise.resolve(antw);
}

/* ===================== de app in jsdom ===================== */

async function start(map, voorKoppeling) {
  map = map || APP;
  const html = fs.readFileSync(path.join(map, "index.html"), "utf8");
  const bronnen = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
  const dom = new JSDOM(html.replace(/<script src="[^"]+"><\/script>/g, ""), {
    runScripts: "dangerously",
    url: "https://test.local/",
    pretendToBeVisual: true,
  });
  dom.window.fetch = server;
  dom.window.navigator.sendBeacon = () => true;
  dom.window.scrollTo = () => {};

  // Als <script>-element invoegen en niet met eval: enkel zo komen de
  // const-declaraties (MAR_INDELING, OPDRACHTEN, KLASLIJST …) echt in de
  // globale ruimte terecht, net zoals in een echte browser.
  const laad = (b) => {
    const s = dom.window.document.createElement("script");
    // Zonder het versienummer (?v=…) dat achter elk script staat.
    s.textContent = fs.readFileSync(path.join(map, b.split("?")[0]), "utf8");
    dom.window.document.head.appendChild(s);
  };
  bronnen.filter((b) => !/koppeling\.js$/.test(b)).forEach(laad);

  // Staat het document nog te laden, dan vuurt jsdom DOMContentLoaded zelf.
  // Dan óók zelf dispatchen zou init() twee keer laten lopen, waardoor elke
  // klik dubbel geteld wordt — een val die niets met de app te maken heeft.
  if (dom.window.document.readyState === "loading") {
    await new Promise((res) => dom.window.document.addEventListener("DOMContentLoaded", res, { once: true }));
  } else {
    dom.window.document.dispatchEvent(new dom.window.Event("DOMContentLoaded"));
  }
  if (voorKoppeling) voorKoppeling(dom);
  bronnen.filter((b) => /koppeling\.js$/.test(b)).forEach(laad);

  await new Promise((r) => setTimeout(r, 60));
  return dom;
}


/* ===================== de test ===================== */

const vul = (sheet, rijNr, waarden) => waarden.forEach((w, i) => sheet.zet(rijNr, i + 1, w));

(async () => {
  console.log("\n1. Installatie: één Sheet, tabbladen per vestiging");
  omgeving.installeer();
  ["Klas", "Taken", "Sleutel", "Instellingen LEU", "Instellingen SKW", "Instellingen TW",
    "Inzendingen LEU", "Inzendingen SKW", "Inzendingen TW", "Detail LEU", "Detail SKW", "Detail TW"].forEach((n) => {
    check("tabblad " + n, !!sheets[n]);
  });
  check("geen tabblad zonder vestiging", !sheets.Inzendingen && !sheets.Instellingen && !sheets.Detail);
  check("Klas-koppen", sheets.Klas.rijen[0].join("|") === "vestiging|naam|code|opmerking", sheets.Klas.rijen[0]);
  check("Taken: 8 categorieën per vestiging", sheets.Taken.getLastRow() - 1 === 24, sheets.Taken.getLastRow());
  check("Sleutel heeft een kolom relatie", sheets.Sleutel.rijen[0][5] === "relatie", sheets.Sleutel.rijen[0]);
  omgeving.installeer();
  check("tweede installatie voegt geen taken dubbel toe", sheets.Taken.getLastRow() - 1 === 24, sheets.Taken.getLastRow());

  vul(sheets.Klas, 2, ["LEU", "Lotte V.", "", ""]);
  vul(sheets.Klas, 3, ["SKW", "Mila", "", ""]);
  vul(sheets.Klas, 4, ["TW", "Amal T.", "", ""]);
  omgeving.genereerCodes();
  const codeMila = String(sheets.Klas.cel(3, 3));
  check("codes in kolom C", /^\d{4}$/.test(codeMila) && /^\d{4}$/.test(String(sheets.Klas.cel(2, 3))), sheets.Klas.rijen);

  SLEUTEL_RIJEN.forEach((r, i) => vul(sheets.Sleutel, i + 2, [r.ref, r.nr, r.dc, String(r.b).replace(".", ","), "", r.rel || ""]));
  vul(sheets["Instellingen SKW"], 2, ["expertcode", "codeSKW", ""]);
  sheets["Instellingen SKW"].zet(4, 2, "Welkom in Katelijne");

  console.log("\n2. Vestiging kiezen en aanmelden");
  const dom = await start(APP);
  const w = dom.window, d = w.document;
  const vest = d.getElementById("vestiging-select");
  check("keuzelijst met drie vestigingen", !vest.hidden && vest.options.length === 4, vest.options.length);
  vest.value = "SKW";
  vest.dispatchEvent(new w.Event("change"));
  await wacht(60);
  const namen = [...d.getElementById("leerling-select").options].map((o) => o.value).filter(Boolean);
  check("enkel de leerlingen van SKW", namen.join("|") === "Mila", namen);
  check("namen van alle scholen in één verzoek bij het openen", verzoeken.some((v) => v.actie === "namen" && !v.vestiging));
  check("verzoek vermeldt de vestiging", verzoeken.some((v) => v.actie === "instellingen" && v.vestiging === "SKW"), verzoeken.slice(-1));
  check("de mededeling/welkomsttekst van SKW komt mee", w.INSTELLINGEN && /Katelijne/.test(w.INSTELLINGEN.mededeling || w.INSTELLINGEN.welkomsttekst || ""), w.INSTELLINGEN);

  d.getElementById("leerling-select").value = "Mila";
  d.getElementById("leerling-code").value = String(sheets.Klas.cel(2, 3));   // code van Lotte
  d.getElementById("btn-aanmelden").click();
  await wacht(80);
  check("code van een andere vestiging werkt niet", w.APP.getState().student !== "Mila");
  d.getElementById("leerling-code").value = codeMila;
  d.getElementById("btn-aanmelden").click();
  await wacht(100);
  check("aangemeld als Mila", w.APP.getState().student === "Mila", w.APP.getState().student);

  console.log("\n3. De grijze lijn en de verplichte relatie");
  d.querySelector('[data-page-type="categorie"][data-page-cat="Aankopen"]').click();
  const zet = (ref, rij, veld, waarde) => {
    const el = d.querySelector(`[data-focus-id="${ref}__r${rij}__${veld}"]`);
    if (!el) throw new Error("veld niet gevonden: " + ref + " " + rij + " " + veld);
    el.value = waarde;
    el.dispatchEvent(new w.Event(el.tagName === "SELECT" ? "change" : "input", { bubbles: true }));
  };
  check("AK01 begint met een grijze lijn op 440000", !!d.querySelector("#blok-AK01 tr.rij-auto") &&
    w.APP.getState().boekingen.AK01.rows[0].rekening === "440000");
  zet("AK01", 1, "rekening", "604000"); zet("AK01", 1, "bedrag", "1000"); zet("AK01", 1, "dc", "D");
  d.querySelector('[data-role="rij-toevoegen"][data-scope="AK01"]').click();
  zet("AK01", 2, "rekening", "411100"); zet("AK01", 2, "bedrag", "210"); zet("AK01", 2, "dc", "D");
  let auto = w.APP.getState().boekingen.AK01.rows[0];
  check("grijze lijn = saldo, aan de andere kant", auto.bedrag === "1.210" && auto.dc === "C", auto);
  check("zonder leverancier kan je niet boeken", d.querySelector('[data-role="boeken"][data-scope="AK01"]').disabled);
  check("de reden staat erbij", /leverancier gekozen/.test(d.querySelector("#blok-AK01 .boeken-waarom").textContent));
  const opties = [...d.querySelector('[data-focus-id="AK01__r0__relatie"]').options].map((o) => o.value);
  check("de relatie is een keuzelijst met de leveranciers", opties.includes("Uitgeverij Lannoo NV") && !opties.includes("Brilart"), opties);
  check("de grijze lijn heeft geen prullenbak", !d.querySelector('[data-role="verwijder-rij"][data-scope="AK01"][data-row="0"]'));
  zet("AK01", 0, "relatie", "Uitgeverij Lannoo NV");
  d.querySelector('[data-role="boeken"][data-scope="AK01"]').click();
  check("AK01 geboekt", w.APP.getState().boekingen.AK01.geboekt === true);

  // Bank: de grijze lijn staat onderaan en blijft daar na een extra lijn.
  d.querySelector('[data-page-type="categorie"][data-page-cat="Financiële verrichtingen"]').click();
  zet("BANK01", 0, "rekening", "400000"); zet("BANK01", 0, "bedrag", "121"); zet("BANK01", 0, "dc", "C");
  d.querySelector('[data-role="rij-toevoegen"][data-scope="BANK01"]').click();
  const bank = w.APP.getState().boekingen.BANK01.rows;
  check("bank: grijze lijn onderaan op 550000, debet", bank.length === 3 && bank[2].auto && bank[2].rekening === "550000" && bank[2].dc === "D" && bank[2].bedrag === "121", bank);
  check("bank: relatie verplicht op 400000", /klant gekozen/.test(d.querySelector("#blok-BANK01 .boeken-waarom").textContent));

  // Creditnota: de grijze lijn draait vanzelf om.
  d.querySelector('[data-page-type="categorie"][data-page-cat="Aankopen"]').click();
  zet("AK07", 1, "rekening", "604010"); zet("AK07", 1, "bedrag", "120"); zet("AK07", 1, "dc", "C");
  auto = w.APP.getState().boekingen.AK07.rows[0];
  check("creditnota: grijze lijn debet", auto.dc === "D" && auto.bedrag === "120", auto);

  // Oud werk met 440000 als gewone lijn wordt omgezet naar de grijze lijn.
  const st = w.APP.getState();
  st.boekingen.AK02 = { geboekt: true, rows: [
    { bedrag: "500", rekening: "604000", dc: "D", relatie: "", redenering: "", apko: "", stijgtDaalt: "" },
    { bedrag: "100", rekening: "604020", dc: "C", relatie: "", redenering: "", apko: "", stijgtDaalt: "" },
    { bedrag: "84", rekening: "411100", dc: "D", relatie: "", redenering: "", apko: "", stijgtDaalt: "" },
    { bedrag: "9.999", rekening: "440000", dc: "C", relatie: "Hoya Lens Belgium NV", redenering: "", apko: "", stijgtDaalt: "" },
  ] };
  w.APP.setState(JSON.parse(JSON.stringify(st)), "Mila");
  const ak02 = w.APP.getState().boekingen.AK02.rows;
  check("oude 440000-lijn wordt de grijze lijn, relatie behouden",
    ak02[0].auto && ak02[0].relatie === "Hoya Lens Belgium NV" && ak02.length === 4 && ak02[0].bedrag === "484", ak02[0]);
  // AK03 met een fout bedrag, voor de automatische controle.
  w.APP.getState().boekingen.AK03 = { geboekt: true, rows: [
    { auto: true, bedrag: "", rekening: "440000", dc: "", relatie: "Binoche Belgian Eyewear bv", redenering: "", apko: "", stijgtDaalt: "" },
    { bedrag: "6.000", rekening: "604000", dc: "D", relatie: "", redenering: "", apko: "", stijgtDaalt: "" },
  ] };
  w.APP.setState(JSON.parse(JSON.stringify(w.APP.getState())), "Mila");
  w.APP.saveState();

  console.log("\n4. Indienen komt in de tabbladen van SKW terecht");
  d.getElementById("btn-indienen").click();
  await wacht(40);
  let venster = d.querySelector(".koppeling-overlay");
  const vink = (naam) => {
    const v = [...venster.querySelectorAll("[data-cat]")].find((x) => x.dataset.cat === naam);
    v.checked = true; v.dispatchEvent(new w.Event("change"));
  };
  vink("Aankopen");
  venster.querySelector("#btn-indienen-bevestig").click();
  await wacht(40);
  venster.querySelector('[data-role="bevestig-ja"]').click();
  await wacht(150);
  const inz = sheets["Inzendingen SKW"];
  check("enkel de 3 geboekte aankopen in Inzendingen SKW", inz.getLastRow() - 1 === 3, inz.getLastRow());
  check("niets in Inzendingen LEU", sheets["Inzendingen LEU"].getLastRow() === 1);
  const rij = (ref) => inz.rijen.find((r) => r[3] === ref);
  check("AK01 automatisch In orde (grijze lijn telt mee)", rij("AK01")[6] === "In orde", [rij("AK01")[4], rij("AK01")[11]]);
  check("AK02 (omgezet oud werk) In orde", rij("AK02")[6] === "In orde", rij("AK02")[11]);
  check("AK03 Te remediëren", rij("AK03")[6] === "Te remediëren", rij("AK03")[11]);
  check("440000-lijn met relatie in de boeking", /440000\s+1\.210\s+C\s+\[Uitgeverij Lannoo NV\]/.test(rij("AK01")[4]), rij("AK01")[4]);
  check("AK04 (niet begonnen) gaat niet mee", !rij("AK04"), inz.rijen.map((r) => r[3]));
  check("Detail SKW gevuld", sheets["Detail SKW"].getLastRow() > 1 && sheets["Detail LEU"].getLastRow() === 1);
  check("werkbestand met SKW in de naam", gedeeld.bestanden.some((b) => b.naam === "werk_SKW_mila.json"), gedeeld.bestanden.map((b) => b.naam));
  venster.querySelector('[data-role="modal-sluit"]') && venster.querySelector('[data-role="modal-sluit"]').click();

  console.log("\n5. Verkopen: automatische facturen en slot");
  const perRef = {};
  SLEUTEL_RIJEN.forEach((r) => { (perRef[r.ref] = perRef[r.ref] || []).push(r); });
  const s2 = w.APP.getState();
  w.eval("OPDRACHTEN").filter((o) => o.categorie === "Verkopen").forEach((o) => {
    s2.boekingen[o.ref] = { geboekt: false, rows: [{ auto: true, rekening: "400000", relatie: "Brilart", bedrag: "", dc: "" }]
      .concat(perRef[o.ref].filter((l) => l.nr !== "400000").map((l) => ({ bedrag: String(l.b).replace(".", ","), rekening: l.nr, dc: l.dc, relatie: "", redenering: "", apko: "", stijgtDaalt: "" }))) };
  });
  w.APP.setState(JSON.parse(JSON.stringify(s2)), "Mila");
  w.APP.renderAlles();
  d.querySelector('[data-page-type="categorie"][data-page-cat="Verkopen"]').click();
  const refsVk = w.eval("OPDRACHTEN").filter((o) => o.categorie === "Verkopen").map((o) => o.ref);
  refsVk.slice(0, -1).forEach((ref) => d.querySelector(`[data-role="boeken"][data-scope="${ref}"]`).click());
  check("nog niet vrij vóór de laatste verkoop", w.APP.getState().automatischVrij === false);
  d.querySelector('[data-page-type="automatisch"]').click();
  check("tabblad toont een slotje-uitleg", /zodra je al je verkopen geboekt hebt/.test(d.getElementById("pagina-inhoud").textContent));
  check("VK+ nog niet in de T-rekeningen", !/VK\+01/.test(d.getElementById("tpanel-lijst").textContent));
  d.querySelector('[data-page-type="categorie"][data-page-cat="Verkopen"]').click();
  d.querySelector(`[data-role="boeken"][data-scope="${refsVk[refsVk.length - 1]}"]`).click();
  check("vrij na de laatste verkoop", w.APP.getState().automatischVrij === true);
  check("geen heropenen meer bij de verkopen", !d.querySelector('[data-role="heropenen"][data-scope="VK01"]'));
  check("VK+ in de T-rekeningen", /VK\+01/.test(d.getElementById("tpanel-lijst").textContent));
  d.querySelector('[data-page-type="automatisch"]').click();
  const tekst = d.getElementById("pagina-inhoud").textContent;
  check("lijst met relatie en bedrag", /Thema 2 - level 8/.test(tekst) && /Maison Lunettes/.test(tekst) && /11\.856,50/.test(tekst), tekst.slice(0, 200));
  check("geen rekeningnummers op dat tabblad", !/704000|451100/.test(tekst));

  // Indienen: VK+ gaat niet mee.
  d.getElementById("btn-indienen").click();
  await wacht(40);
  venster = [...d.querySelectorAll(".koppeling-overlay")].pop();
  vink("Verkopen");
  venster.querySelector("#btn-indienen-bevestig").click();
  await wacht(40);
  venster.querySelector('[data-role="bevestig-ja"]').click();
  await wacht(150);
  check("verkopen ingediend zonder VK+", inz.rijen.some((r) => r[3] === "VK01") && !inz.rijen.some((r) => String(r[3]).indexOf("VK+") === 0));
  const vk03 = inz.rijen.map((r, i) => [r, i + 1]).find(([r]) => r[3] === "VK03");

  console.log("\n6. Feedback vrijgeven opent een verkoop weer");
  inz.zet(vk03[1], 7, "Te remediëren");
  inz.zet(vk03[1], 8, "Kijk de korting nog eens na.");
  actiefBlad = "Inzendingen SKW";
  inz.actieveRij = vk03[1];
  omgeving.geefVrijVoorLeerling();
  check("vinkjes klaar gezet in SKW", inz.rijen.filter((r) => r[8] === true).length >= 1);
  d.getElementById("btn-feedback").click();
  await wacht(120);
  d.querySelector('[data-page-type="categorie"][data-page-cat="Verkopen"]').click();
  check("VK03 kan weer heropend worden", !!d.querySelector('[data-role="heropenen"][data-scope="VK03"]'));
  check("VK01 (In orde) blijft op slot", !d.querySelector('[data-role="heropenen"][data-scope="VK01"]'));
  const fbLeu = JSON.parse(omgeving.doGet({ parameter: { sleutel: "TEST", vestiging: "LEU", actie: "feedback", naam: "Mila", code: codeMila } }).tekst);
  check("Mila bestaat niet in LEU", fbLeu.ok === false, fbLeu);

  console.log("\n7. Beheer per vestiging");
  const beheer = JSON.parse(omgeving.doGet({ parameter: { sleutel: "TEST", vestiging: "SKW", actie: "beheer", expertcode: "codeSKW" } }).tekst);
  check("beheer SKW met de expertcode van SKW", beheer.ok && beheer.klas.length === 1 && beheer.klas[0].naam === "Mila", beheer);
  const beheerLeu = JSON.parse(omgeving.doGet({ parameter: { sleutel: "TEST", vestiging: "LEU", actie: "beheer", expertcode: "codeSKW" } }).tekst);
  check("die code opent LEU niet", beheerLeu.ok === false, beheerLeu);
  const opslaan = JSON.parse(omgeving.doPost({ postData: { contents: JSON.stringify({
    sleutel: "TEST", vestiging: "SKW", actie: "beheerBewaren", expertcode: "codeSKW",
    klas: [{ naam: "Mila" }, { naam: "Nora" }],
    taken: [{ categorie: "Aankopen", link: "https://classroom/skw-ak" }],
  }) } }).tekst);
  check("bewaren gelukt", opslaan.ok, opslaan);
  const klasRijen = sheets.Klas.rijen.slice(1).filter((r) => r[1]);
  check("LEU en TW blijven staan", klasRijen.some((r) => r[0] === "LEU" && r[1] === "Lotte V.") && klasRijen.some((r) => r[0] === "TW" && r[1] === "Amal T."), klasRijen);
  check("Mila houdt haar code, Nora krijgt er een",
    klasRijen.some((r) => r[0] === "SKW" && r[1] === "Mila" && String(r[2]) === codeMila) &&
    klasRijen.some((r) => r[0] === "SKW" && r[1] === "Nora" && /^\d{4}$/.test(String(r[2]))), klasRijen);
  const takenRijen = sheets.Taken.rijen.slice(1).filter((r) => r[1]);
  check("taken van LEU blijven (8), SKW heeft er nu 1", takenRijen.filter((r) => r[0] === "LEU").length === 8 &&
    takenRijen.filter((r) => r[0] === "SKW").length === 1, takenRijen.length);

  // Beheer ontgrendelen in SKW en dan van vestiging wisselen: weer op slot.
  const vs = d.getElementById("vestiging-select");
  vs.value = "SKW"; vs.dispatchEvent(new w.Event("change"));
  await wacht(40);
  d.querySelector('[data-page-type="beheer"]').click();
  d.querySelector('[data-role="expertcode"]').value = "codeSKW";
  d.querySelector('[data-role="ontgrendel"]').click();
  await wacht(80);
  check("beheer SKW open in de app", /Bewaren/.test(w.BEHEER.html()), w.BEHEER.html().slice(0, 200));
  vs.value = "TW"; vs.dispatchEvent(new w.Event("change"));
  await wacht(40);
  check("na een andere vestiging staat beheer weer op slot", /expertcode/i.test(w.BEHEER.html()) && !/Bewaren/.test(w.BEHEER.html()));

  console.log("\n8. Menu's in de Sheet");
  laatsteAlert = "";
  omgeving.nakijkenOpenInzendingen();
  check("nakijken over alle vestigingen loopt", /Klaar:/.test(laatsteAlert), laatsteAlert);
  antwoordPrompt = "TW";
  omgeving.zetExpertcode();
  check("expertcode gevraagd per vestiging", /TW/.test(laatsteAlert), laatsteAlert);
  const onbekend = JSON.parse(omgeving.doGet({ parameter: { sleutel: "TEST", vestiging: "XYZ", actie: "instellingen" } }).tekst);
  check("onbekende vestiging geweigerd", onbekend.ok === false && onbekend.fout === "vestiging onbekend", onbekend);

  console.log("\n9. De namenlijst staat snel klaar");
  const alleNamen = JSON.parse(omgeving.doGet({ parameter: { sleutel: "TEST", actie: "namen" } }).tekst);
  check("server geeft de namen per vestiging, zonder codes",
    alleNamen.ok && alleNamen.klas.LEU.join("|") === "Lotte V." && alleNamen.klas.TW.join("|") === "Amal T." &&
    !/\d{4}/.test(JSON.stringify(alleNamen)), alleNamen);
  check("namen enkel met het sleutelwoord",
    JSON.parse(omgeving.doGet({ parameter: { sleutel: "fout", actie: "namen" } }).tekst).ok === false);

  serverVertraging = 300;
  const dom2 = await start(APP);
  const d2 = dom2.window.document;
  const vest2 = d2.getElementById("vestiging-select");
  vest2.value = "TW";
  vest2.dispatchEvent(new dom2.window.Event("change"));
  const sel2 = d2.getElementById("leerling-select");
  check("tijdens het laden: 'Namen laden…' en geen vrij naamveld",
    !sel2.hidden && sel2.disabled && /Namen laden/.test(sel2.textContent) && d2.getElementById("leerling-naam-input").hidden,
    sel2.outerHTML);
  await wacht(450);
  check("daarna de namen van TW", !sel2.disabled && [...sel2.options].map((o) => o.value).filter(Boolean).join("|") === "Amal T.",
    sel2.outerHTML);
  const bewaard = JSON.parse(dom2.window.localStorage.getItem("bkhk6_namen") || "{}");
  check("de browser onthoudt de namen (zonder codes)", (bewaard.SKW || []).join("|") === "Mila|Nora" && !/\d{4}/.test(JSON.stringify(bewaard)), bewaard);

  serverVertraging = 2000;
  const dom3 = await start(APP, (dom) => dom.window.localStorage.setItem("bkhk6_namen", JSON.stringify(bewaard)));
  const d3 = dom3.window.document;
  const vest3 = d3.getElementById("vestiging-select");
  vest3.value = "SKW";
  vest3.dispatchEvent(new dom3.window.Event("change"));
  const sel3 = d3.getElementById("leerling-select");
  check("tweede bezoek: namen meteen uit het geheugen", !sel3.disabled && [...sel3.options].map((o) => o.value).includes("Mila"), sel3.outerHTML);
  sel3.value = "Mila";
  d3.getElementById("leerling-code").value = "1234";
  await wacht(2300);
  check("verse lijst wist de gekozen naam en code niet", sel3.value === "Mila" && d3.getElementById("leerling-code").value === "1234",
    [sel3.value, d3.getElementById("leerling-code").value]);
  serverVertraging = 0;

  console.log("\n10. Eigen opslag, los van de app van Kern 8");
  // Wat de app van Kern 8 (MetWear) in dezelfde browser achterliet: dezelfde
  // leerling, dezelfde school, maar ander werk.
  const k8werk = JSON.stringify({ student: "Mila", boekingen: { AK01: { geboekt: false, rows: [{ bedrag: "1.234", rekening: "604000", dc: "" }] } } });
  const dom4 = await start(APP, (dom) => {
    dom.window.localStorage.setItem("boekhoudapp_aanmelding", JSON.stringify({ vestiging: "SKW", naam: "Mila", code: codeMila }));
    dom.window.localStorage.setItem("boekhoudapp_vestiging", "skw");
    dom.window.localStorage.setItem("boekhoudapp_laatste_leerling", "Mila");
    dom.window.localStorage.setItem("boekhoudapp_data_skw_mila", k8werk);
  });
  await wacht(150);
  const w4 = dom4.window, d4 = w4.document;
  check("de aanmelding van Kern 8 wordt niet overgenomen", w4.APP.getState().student !== "Mila", w4.APP.getState().student);
  d4.getElementById("vestiging-select").value = "SKW";
  d4.getElementById("vestiging-select").dispatchEvent(new w4.Event("change"));
  await wacht(60);
  d4.getElementById("leerling-select").value = "Mila";
  d4.getElementById("leerling-code").value = codeMila;
  d4.getElementById("btn-aanmelden").click();
  await wacht(150);
  const ak01 = (w4.APP.getState().boekingen.AK01 || { rows: [] }).rows;
  check("het werk van Kern 8 komt niet in Kern 6", !ak01.some((r) => r.bedrag === "1.234"), ak01);
  check("Kern 6 bewaart onder bkhk6_…",
    !!w4.localStorage.getItem("bkhk6_aanmelding") && !!w4.localStorage.getItem("bkhk6_data_skw_mila"), Object.keys(w4.localStorage));
  check("de gegevens van Kern 8 blijven onaangeroerd",
    w4.localStorage.getItem("boekhoudapp_data_skw_mila") === k8werk && !!w4.localStorage.getItem("boekhoudapp_aanmelding"));

  console.log("\n11. Afmelden");
  const knopAf = d4.getElementById("btn-afmelden");
  check("knop heet Afmelden en is zichtbaar", !!knopAf && knopAf.textContent === "Afmelden" && !knopAf.hidden);
  knopAf.click();
  await wacht(20);
  d4.querySelector('[data-role="afmeld-ja"]').click();
  await wacht(150);
  check("afgemeld en gewist uit de browser",
    !w4.localStorage.getItem("bkhk6_aanmelding") && !w4.localStorage.getItem("bkhk6_data_skw_mila") && knopAf.hidden,
    Object.keys(w4.localStorage));
  check("Kern 8 blijft aangemeld", !!w4.localStorage.getItem("boekhoudapp_aanmelding"));

  console.log("\n12. Typen terwijl het werk nog geladen wordt");
  serverVertraging = 150;
  const dom5 = await start(APP, (dom) => {
    dom.window.localStorage.setItem("bkhk6_aanmelding", JSON.stringify({ vestiging: "SKW", naam: "Mila", code: codeMila }));
  });
  const werkVoor = (gedeeld.bestanden.find((b) => b.naam === "werk_SKW_mila.json") || {}).inhoud;
  await wacht(30);   // het werk is nog onderweg
  dom5.window.APP.getState().boekingen.AK09 = { geboekt: false, rows: [{ bedrag: "9", rekening: "", dc: "" }] };
  dom5.window.APP.saveState();
  await wacht(600);
  serverVertraging = 0;
  check("het werk van de server wint (de browser was leeg bij het aanmelden)",
    Object.keys(dom5.window.APP.getState().boekingen).length > 1, Object.keys(dom5.window.APP.getState().boekingen));
  check("het werk op de server is niet overschreven",
    (gedeeld.bestanden.find((b) => b.naam === "werk_SKW_mila.json") || {}).inhoud === werkVoor);

  console.log("\n13. Vergeten op Boeken te drukken");
  // Mila (w) is nog aangemeld. AK04 begonnen maar niet geboekt; de rest van
  // de aankopen ofwel geboekt ofwel leeg.
  const stK = w.APP.getState();
  stK.boekingen.AK04 = { geboekt: false, rows: [{ auto: true, rekening: "440000", relatie: "", bedrag: "", dc: "" },
    { bedrag: "50", rekening: "604000", dc: "D", relatie: "", redenering: "", apko: "", stijgtDaalt: "" }] };
  w.APP.setState(JSON.parse(JSON.stringify(stK)), "Mila");
  w.APP.saveState();
  w.APP.renderAlles();
  const catBol = (cat) => d.querySelector('[data-page-type="categorie"][data-page-cat="' + cat + '"] .status-bolletje').className;
  check("menu: open oranje ringetje bij Aankopen", /begonnen/.test(catBol("Aankopen")), catBol("Aankopen"));
  d.querySelector('[data-page-type="categorie"][data-page-cat="Aankopen"]').click();
  await wacht(30);
  const statusAK04 = d.querySelector("#blok-AK04 .opdracht-status").textContent;
  check("label bij het schema: nog niet geboekt", statusAK04 === "nog niet geboekt", statusAK04);
  check("niet klaar: geen herinnering bij AK04", !d.querySelector("#blok-AK04 .boeken-herinnering"));
  d.querySelectorAll(".koppeling-overlay").forEach((o) => o.remove());
  d.getElementById("btn-indienen").click();
  await wacht(30);
  let vK = d.querySelector(".koppeling-overlay");
  const vinkK = (naam) => { const v = vK.querySelector('[data-cat="' + naam + '"]'); v.checked = true; v.dispatchEvent(new w.Event("change")); };
  vinkK("Aankopen");
  vK.querySelector("#btn-indienen-bevestig").click();
  await wacht(30);
  check("Aankopen indienen: melding met AK04", !!vK.querySelector('[data-role="naar-stuk"][data-ref="AK04"]'), vK.textContent.slice(0, 200));
  vK.querySelector('[data-role="naar-stuk"][data-ref="AK04"]').click();
  await wacht(30);
  check("klik: venster dicht, Aankopen open en AK04 opengeklapt",
    !d.querySelector(".koppeling-overlay") && d.getElementById("blok-AK04") && d.getElementById("blok-AK04").open);

  console.log("\n" + (fouten ? fouten + " FOUT(EN)" : "Alles in orde."));
  process.exit(fouten ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
