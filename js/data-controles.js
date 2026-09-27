// data-controles.js
// Alles wat bij de controles hoort.
// Wijzigt dit per jaar/bundel? Pas het hier aan, niet in app.js.
//
// ---------------------------------------------------------------------------
// CONTROLES STAAN BIJ HUN CATEGORIE
//
// Leerlingen dienen stapsgewijs in, per categorie. Eén grote controlelijst op
// het einde komt dan veel te laat. Daarom krijgt elke controle een veld
// "categorie": de app zet ze dan automatisch op een eigen controlepagina
// onderaan die categorie in het menu.
//
// Een controle hoort bij de categorie waar ze voor het eerst beantwoord kan
// worden — dus bij de láátste stap waarvan ze afhangt. "Zijn de lonen
// uitbetaald?" staat daarom bij de financiële verrichtingen en niet bij de
// loonverwerking: de betaling gebeurt pas op een bankafschrift.
//
// Controles zonder categorie (of met een categorie die niet bestaat) komen
// op de eindcontrole terecht.
// ---------------------------------------------------------------------------

// Rekeningen waarvan de verwachte saldokant afwijkt van de gewone regel
// (actief en kost = debet, passief en opbrengst = credit).
//
// Het gaat om contrarekeningen: rekeningen die in het MAR bij de kosten of de
// opbrengsten staan, maar die er net van afgetrokken worden. Een retour op
// een aankoop is een kostenrekening, maar houdt een creditsaldo over.
//
// Rekeningen die op 9 eindigen (geboekte afschrijvingen, bv. 230009) worden
// al automatisch als contrarekening herkend en hoeven hier niet in te staan.
const SALDO_UITZONDERINGEN = {
  "604010": "C",  // Retours op aankopen (-)
  "604020": "C",  // Handelskorting op aankopen (-)
  "609400": "C",  // Voorraadwijzigingen handelsgoederen — bij een stijgende voorraad
  "704010": "D",  // Retours op verkopen (-)
  "704020": "D",  // Handelskorting op verkopen (-)
};

// Rekeningen die de app helemaal niet op saldokant controleert, omdat meer
// dan één kant een geldig resultaat is.
const SALDO_GEEN_CONTROLE = [
  "580000",  // Interne overboekingen — moet net op 0 komen, apart nagekeken
];

// Extra's per categorie op de controlepagina: een inleidende zin en, bij de
// beginbalans, de invulbalans.
//
// invulbalansVoorRef  toont de sleepoefening met de balans, maar dan enkel
//                     met de rubrieken uit díé ene boeking. Bij "BB" krijgt
//                     de leerling dus exact de openingsbalans te zien, ook
//                     nog in mei — de latere boekingen tellen niet mee.
//                     De plaatsingen zijn dezelfde als op het tabblad
//                     Eindbalans: wat hier gelegd wordt, ligt daar al goed.
const CATEGORIE_CONTROLES = {
  "Beginbalans": {
    inleiding: "Zet de rubrieken van je openingsboeking op hun plaats in de balans. Zo zie je in één oogopslag of je beginbalans klopt met het document. Je toewijzing wordt trouwens bewaard, zo bespaar je alvast wat werk voor de eindbalans.",
    invulbalansVoorRef: "BB",
  },
  "Aankopen": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet. ",
  },
  "Verkopen": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet.",
  },
  "Loonverwerking": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet.",
  },
  "Financiële verrichtingen": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet. Dit is de grootste controle van de bundel: hier komen kas, bank, de lonen en je klanten en leveranciers samen. Neem er de tijd voor vóór je indient.",
  },
  "BTW-verwerking": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet.",
  },
  "Eindejaarsverrichtingen": {
    inleiding: "Hieronder vind je één of meerdere controles die je zelf kunt overlopen voor je indient. Bekijk elke controle en check of je er aan voldoet.",
  },
};

// Handmatige controles: de leerling vinkt zelf "in orde" aan, met het
// T-panel ernaast.
//
// Verplichte velden: id, categorie, vraag.
//
// Optionele velden bij elke controle:
//   toelichting  één of enkele zinnen extra uitleg onder de vraag
//   handboek     waar het document in het handboek staat (vrije tekst)
//   uitleg       sleutel uit data-info.js — zet een i-icoontje bij de vraag
//   filterTip    welke filter er in het T-paneel gezet kan worden om dit na
//                te kijken
//   relatieSoort "klanten" of "leveranciers" — toont onder de vraag een
//                tabelletje met per relatie het bedrag dat nog openstaat
//                (uit het tabblad Klanten & leveranciers), zodat de leerling
//                dat naast het saldo van 400000/440000 in het T-paneel kan
//                leggen zonder van scherm te wisselen
//
// De app toont bewust GEEN saldi bij een controle: dan valt er niets meer na
// te kijken. De leerling zoekt zelf in het T-paneel met de filtertip.
const HANDMATIGE_CONTROLES = [

  /* ---------------- Beginbalans ---------------- */
  {
    id: "beginbalans-klopt",
    categorie: "Beginbalans",
    vraag: "Komt de balans die je hierboven gelegd hebt overeen met de beginbalans in je handboek?",
    toelichting: "Vergelijk vak per vak met de beginbalans. Staat er een rubriek op een plaats waar ze niet hoort, of ontbreekt er een bedrag, ga dan terug naar je boeking van BB.",
  },
  {
    id: "beginbalans-relaties",
    categorie: "Beginbalans",
    vraag: "Heb je bij elke klant en elke leverancier op de beginbalans de juiste relatie gekozen?",
    toelichting: "Elke openstaande factuur van vorig jaar hoort bij een klant of leverancier. Boek ze elk op een eigen lijn, anders kan je ze later niet afpunten met de betaling.",
    filterTip: "Filter in het T-paneel op 400000 en daarna op 440000.",
  },

  /* ---------------- Aankopen ---------------- */
  {
    id: "aankopen-op-leveranciers",
    categorie: "Aankopen",
    vraag: "Vind je op 440000 elke aankoopfactuur terug?",
    toelichting: "Open de T-rekening van de leveranciers. Je hoort er de beginbalans en al je aankopen te zien staan: BB, AK01 tot en met AK11. Een creditnota staat aan de andere kant.",
    filterTip: "Filter in het T-paneel op 440000.",
  },
  {
    id: "aankopen-btw",
    categorie: "Aankopen",
    vraag: "Staat de btw van elke factuur op de juiste btw-rekening?",
    toelichting: "Aftrekbare btw op een factuur, btw op een ontvangen creditnota, btw bij een intracommunautaire verwerving of bij werken in onroerende staat: elk heeft een eigen rekening. Kijk per factuur na welke btw-regeling op het document staat.",
    filterTip: "Filter in het T-paneel op btw.",
  },

  /* ---------------- Verkopen ---------------- */
  {
    id: "verkopen-op-klanten",
    categorie: "Verkopen",
    vraag: "Vind je op 400000 elke verkoopfactuur terug?",
    toelichting: "Open de T-rekening van de klanten. Je hoort er de beginbalans en al je verkopen te zien staan: BB, VK01 tot en met VK09 en ONTV01. Een creditnota staat aan de andere kant. Zodra alles geboekt is, komen daar ook de facturen VK+01 tot VK+08 bij.",
    filterTip: "Filter in het T-paneel op 400000.",
  },

  /* ---------------- Loonverwerking ---------------- */
  {
    id: "loonkost-totaal",
    categorie: "Loonverwerking",
    handboek: "loonstaten: p. 246 · doc A en p. 247 · doc B",
    vraag: "Komt het totaal van je 62-rekeningen overeen met de totale loonkost op de loonstaten?",
    toelichting: "Tel de brutolonen, de patronale RSZ en de overige personeelskosten samen. Dat is wat de werkgever écht betaalt, en dat moet gelijk zijn aan de totale loonkost op de twee loonstaten samen.",
    filterTip: "Filter in het T-paneel op rubriek 62.",
  },
  // Twee aparte controles: de nettolonen blijven een schuld aan de
  // werknemers tot de bank ze betaalt, maar de bedrijfsvoorheffing en de RSZ
  // zijn met AK12 al overgenomen door het sociaal secretariaat. Die
  // rekeningen horen hier dus al op 0 te staan.
  {
    id: "loonschulden-open",
    categorie: "Loonverwerking",
    handboek: "loonstaten: p. 246 · doc A en p. 247 · doc B",
    vraag: "Klopt de schuld aan je arbeiders en bedienden met de loonstaten?",
    toelichting: "De nettolonen worden pas bij de bankafschriften uitbetaald. Op dit moment hoort op deze rekeningen dus nog een creditsaldo te staan, gelijk aan de nettolonen op de loonstaten.",
    filterTip: "Filter in het T-paneel op 455.",
  },
  {
    id: "loonschulden-bv-rsz-weg",
    categorie: "Loonverwerking",
    vraag: "Zijn de schulden voor bedrijfsvoorheffing en RSZ weggeboekt?",
    toelichting: "Met AK12 betaalt Securex de bedrijfsvoorheffing en de RSZ voor jou. In de plaats komt een schuld aan Securex, dus deze twee rekeningen horen nu op 0 te staan.",
    filterTip: "Filter in het T-paneel op 453 en daarna op 454.",
  },

  /* ---------------- Financiële verrichtingen ---------------- */
  {
    id: "banksaldo-klopt",
    categorie: "Financiële verrichtingen",
    handboek: "laatste bankafschrift BANK10: p. 256 · doc K",
    vraag: "Is het nieuwe saldo op het laatste bankafschrift gelijk aan het saldo op 550000?",
    filterTip: "Filter in het T-paneel op 550000.",
  },
  {
    id: "kassaldo-klopt",
    categorie: "Financiële verrichtingen",
    handboek: "kasblad KAS01: p. 256 · doc L",
    vraag: "Is het kassaldo op het kasblad gelijk aan het saldo op 570000?",
    filterTip: "Filter in het T-paneel op 570000.",
  },
  {
    id: "interne-overboekingen-nul",
    categorie: "Financiële verrichtingen",
    vraag: "Staat 580000 (interne overboekingen) terug op 0?",
    toelichting: "Elke overboeking tussen bank en kas passeert hier, één keer debet en één keer credit. Blijft er iets staan, dan ontbreekt de tegenboeking.",
    filterTip: "Filter in het T-paneel op 580000.",
  },
  {
    id: "lonen-uitbetaald",
    categorie: "Financiële verrichtingen",
    vraag: "Staan de loonschulden terug op 0, nu ze betaald zijn?",
    toelichting: "Bij de loonstaten kwamen de nettolonen credit op deze rekeningen. Bij de uitbetaling via de bank gaan ze er debet weer af. (De bedrijfsvoorheffing en de RSZ waren al weggeboekt met AK12.)",
    filterTip: "Filter in het T-paneel op 455.",
  },
  {
    id: "klanten-openstaand-klopt",
    categorie: "Financiële verrichtingen",
    relatieSoort: "klanten",
    vraag: "Is het totaal nog open bij je klanten gelijk aan het saldo op 400000?",
    toelichting: "Het overzicht hieronder komt uit je eigen boekingen op de pagina Klanten & leveranciers. Punt daar ook alles af: elke betaling en creditnota hoort bij een factuur.",
    filterTip: "Filter in het T-paneel op 400000.",
  },
  {
    id: "leveranciers-openstaand-klopt",
    categorie: "Financiële verrichtingen",
    relatieSoort: "leveranciers",
    vraag: "Is het totaal nog open bij je leveranciers gelijk aan het saldo op 440000?",
    toelichting: "Het overzicht hieronder komt uit je eigen boekingen op de pagina Klanten & leveranciers. Punt daar ook alles af: elke betaling en creditnota hoort bij een factuur.",
    filterTip: "Filter in het T-paneel op 440000.",
  },

  /* ---------------- BTW-verwerking ---------------- */
  {
    id: "btw-tussentijds-leeg",
    categorie: "BTW-verwerking",
    vraag: "Zijn alle tussentijdse btw-rekeningen leeg?",
    toelichting: "Na de btw-aangifte hoort alle btw samen te staan op 411000 of 451000. De tussentijdse rekeningen (alle 411- en 451-rekeningen die niet op 000 eindigen) moeten dan op nul komen.",
    filterTip: "Filter in het T-paneel op btw.",
  },
  {
    id: "btw-aangifte-klopt",
    categorie: "BTW-verwerking",
    handboek: "volledige btw-aangifte: p. 183",
    vraag: "Is het saldo van de btw-aangifte in je handboek gelijk aan wat je op 451000 geboekt hebt?",
    toelichting: "Onderaan de btw-aangifte staat hoeveel er aan de staat betaald moet worden (of teruggevorderd kan worden). Dat bedrag moet precies overeenkomen met je boeking op 451000 in BTW. Klopt het niet, zoek dan welke tussentijdse btw-rekening een ander bedrag heeft dan het vak op de aangifte.",
    filterTip: "Filter in het T-paneel op 451000.",
  },

  /* ---------------- Eindejaarsverrichtingen ---------------- */
  {
    id: "vaste-activa-nummers",
    categorie: "Eindejaarsverrichtingen",
    vraag: "Hoort bij elke aanschafwaarde de afschrijving met hetzelfde nummer?",
    toelichting: "Elk soort vast actief heeft twee rekeningen die bij elkaar horen: de aanschafwaarde (bv. 240200) en de geboekte afschrijvingen met hetzelfde basisnummer, eindigend op 9 (240209). Boek je de aankoop van computers op 240200, dan hoort de afschrijving erop op 240209 — niet op 240009 of 241009. Klopt dat niet, dan lijkt het alsof er iets afgeschreven wordt dat nooit gekocht is.",
    filterTip: "Filter in het T-paneel op klasse 2 (Vaste activa).",
  },
  {
    id: "dubieuze-debiteur",
    categorie: "Eindejaarsverrichtingen",
    vraag: "Staat de dubieuze klant niet meer bij de gewone klanten?",
    toelichting: "Een klant die dubieus wordt, gaat met zijn volledige openstaande bedrag van 400000 naar 407000. Kijk op de pagina Klanten & leveranciers of die klant op 400000 nu op 0 staat.",
    filterTip: "Filter in het T-paneel op 40.",
  },
  {
    id: "voorraad-klopt",
    categorie: "Eindejaarsverrichtingen",
    vraag: "Klopt de voorraad met de inventaris?",
    toelichting: "Het saldo van de actiefrekening \"Voorraad handelsgoederen\" moet gelijk zijn aan de waarde van de voorraad op het einde van het boekjaar.",
    filterTip: "Filter in het T-paneel op voorraad.",
  },
  {
    id: "lening-lang-kort",
    categorie: "Eindejaarsverrichtingen",
    handboek: "aflossingstabel: p. 255 · doc I",
    vraag: "Staat het deel van de lening dat volgend jaar afgelost wordt bij de schulden op ten hoogste één jaar?",
    toelichting: "Kijk in de aflossingstabel hoeveel je volgend jaar moet aflossen. Dat deel hoort op 420000, de rest blijft bij de schulden op meer dan één jaar.",
    filterTip: "Filter in het T-paneel op 17 en daarna op 42.",
  },
];
