// data-opdrachten.js
// Lijst van alle opdrachten met hun referentie, categorie (voor het menu) en
// titel. Dit is de enige plaats die aangepast moet worden als er een
// opdracht bijkomt, wegvalt of van naam verandert. De app zelf (app.js)
// hoeft daarvoor niet aangeraakt te worden.
//
// BUNDEL: Odette Lunettes.edu — boekjaar 2004. De documenten staan in het
// handboek; de app toont er enkel een verwijzing naar.
//
// Velden per opdracht:
//   ref         de referentie; staat bij elke boeking in de T-rekeningen,
//               dus best kort. Moet overeenkomen met kolom A van het
//               tabblad Sleutel in de Google Sheet.
//   categorie   onder welk tabblad in het menu de opdracht staat
//   titel       de titel boven het redeneerschema
//   kop         wat er in de kop van het blok naast de ref staat: de klant of
//               leverancier bij een factuur, anders de soort document
//   handboek    pagina en document in het handboek, kort: "p. 226-A" is
//               pagina 226, doc A
//   auto        een rekening die de app zelf boekt, zoals een boekhoud-
//               pakket dat doet. Eén lijn van het redeneerschema staat dan
//               grijs op die rekening, met als bedrag en kant het saldo van
//               de andere lijnen. Bij facturen staat ze bovenaan, bij bank
//               en kas onderaan:
//                 "440000"  aankoopfactuur  — de leerling kiest enkel de leverancier
//                 "400000"  verkoopfactuur  — de leerling kiest enkel de klant
//                 "550000"  bankafschrift   — de bankrekening past zich aan
//                 "570000"  kasblad         — de kasrekening past zich aan
//   instructie  uitleg in een kader boven het redeneerschema
//   tip         korte tip net boven het redeneerschema
//   verborgenInNav  niet op het tabblad van de categorie (RES01 en RES02
//               staan samen op de pagina Resultaatverwerking)

const OPDRACHTEN = [
  { ref: "BB", categorie: "Beginbalans", titel: "Beginbalans (BB)", kop: "Beginbalans", handboek: "p. 76-77" },

  { ref: "AK01", categorie: "Aankopen", titel: "Aankoopfactuur AK01", kop: "Uitgeverij Lannoo NV", handboek: "p. 226-A", auto: "440000" },
  { ref: "AK02", categorie: "Aankopen", titel: "Aankoopfactuur AK02", kop: "Hoya Lens Belgium NV", handboek: "p. 227-B", auto: "440000" },
  { ref: "AK03", categorie: "Aankopen", titel: "Aankoopfactuur AK03", kop: "Binoche Belgian Eyewear bv", handboek: "p. 228-C", auto: "440000" },
  { ref: "AK04", categorie: "Aankopen", titel: "Aankoopfactuur AK04", kop: "Silhouette Benelux nv", handboek: "p. 229-D", auto: "440000" },
  { ref: "AK05", categorie: "Aankopen", titel: "Aankoopfactuur AK05", kop: "Luminus NV", handboek: "p. 230-E", auto: "440000" },
  { ref: "AK06", categorie: "Aankopen", titel: "Aankoopfactuur AK06", kop: "Lab9 Stores nv", handboek: "p. 231-F", auto: "440000" },
  { ref: "AK07", categorie: "Aankopen", titel: "Aankoopfactuur AK07", kop: "Hoya Lens Belgium NV", handboek: "p. 232-G", auto: "440000" },
  { ref: "AK08", categorie: "Aankopen", titel: "Aankoopfactuur AK08", kop: "Aldo", handboek: "p. 233-H", auto: "440000" },
  { ref: "AK09", categorie: "Aankopen", titel: "Aankoopfactuur AK09", kop: "Pixartprinting SpA", handboek: "p. 234-I", auto: "440000" },
  { ref: "AK10", categorie: "Aankopen", titel: "Aankoopfactuur AK10", kop: "HGM Glasses Manufacturer Co. Ltd.", handboek: "p. 235-J", auto: "440000" },
  { ref: "AK11", categorie: "Aankopen", titel: "Aankoopfactuur AK11", kop: "MS Amlin", handboek: "p. 236-K", auto: "440000" },

  { ref: "VK01", categorie: "Verkopen", titel: "Verkoopfactuur VK01", kop: "Particulieren", handboek: "p. 237-A", auto: "400000" },
  { ref: "VK02", categorie: "Verkopen", titel: "Verkoopfactuur VK02", kop: "Brilart", handboek: "p. 238-B", auto: "400000" },
  { ref: "VK03", categorie: "Verkopen", titel: "Verkoopfactuur VK03", kop: "Onghena Opticiens", handboek: "p. 239-C", auto: "400000" },
  { ref: "VK04", categorie: "Verkopen", titel: "Verkoopfactuur VK04", kop: "Particulieren", handboek: "p. 240-D", auto: "400000" },
  { ref: "VK05", categorie: "Verkopen", titel: "Verkoopfactuur VK05", kop: "Optiek Geyskens", handboek: "p. 241-E", auto: "400000" },
  { ref: "VK06", categorie: "Verkopen", titel: "Verkoopfactuur VK06", kop: "Brilart", handboek: "p. 242-F", auto: "400000" },
  { ref: "VK07", categorie: "Verkopen", titel: "Verkoopfactuur VK07", kop: "Brillier", handboek: "p. 243-G", auto: "400000" },
  // De dagontvangsten horen didactisch bij de verkopen: het is dezelfde
  // beweging, alleen aan particulieren in de winkel.
  { ref: "ONTV01", categorie: "Verkopen", titel: "Dagontvangsten ONTV01", kop: "Particulieren", handboek: "p. 244-H", auto: "400000" },
  { ref: "VK08", categorie: "Verkopen", titel: "Verkoopfactuur VK08", kop: "Vue des Remparts", handboek: "p. 244-I", auto: "400000" },
  { ref: "VK09", categorie: "Verkopen", titel: "Verkoopfactuur VK09", kop: "Lauder and Rees", handboek: "p. 245-J", auto: "400000" },

  { ref: "LOON01", categorie: "Loonverwerking", titel: "Loonstaat LOON01", kop: "Loonstaat", handboek: "p. 246-A" },
  { ref: "LOON02", categorie: "Loonverwerking", titel: "Loonstaat LOON02", kop: "Loonstaat", handboek: "p. 247-B" },
  // AK12 en AK13 zijn aankoopfacturen van het sociaal secretariaat. Ze staan
  // bij de loonverwerking: ze zijn pas te boeken nadat de loonstaat gezien is.
  { ref: "AK12", categorie: "Loonverwerking", titel: "Aankoopfactuur AK12", kop: "Securex", handboek: "p. 248-C", auto: "440000" },
  { ref: "AK13", categorie: "Loonverwerking", titel: "Aankoopfactuur AK13", kop: "Securex", handboek: "p. 249-D", auto: "440000" },

  { ref: "BANK01", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK01", kop: "Bankafschrift", handboek: "p. 250-A", auto: "550000" },
  { ref: "BANK02", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK02", kop: "Bankafschrift", handboek: "p. 250-B", auto: "550000" },
  { ref: "BANK03", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK03", kop: "Bankafschrift", handboek: "p. 251-C", auto: "550000" },
  { ref: "BANK04", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK04", kop: "Bankafschrift", handboek: "p. 252-D", auto: "550000" },
  { ref: "BANK05", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK05", kop: "Bankafschrift", handboek: "p. 253-E", auto: "550000" },
  { ref: "BANK06", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK06", kop: "Bankafschrift", handboek: "p. 253-F", auto: "550000" },
  { ref: "BANK07", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK07", kop: "Bankafschrift", handboek: "p. 254-G", auto: "550000" },
  { ref: "BANK08", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK08", kop: "Bankafschrift", handboek: "p. 254-H · aflossingstabel p. 255-I", auto: "550000" },
  { ref: "BANK09", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK09", kop: "Bankafschrift", handboek: "p. 256-J", auto: "550000" },
  { ref: "KAS01", categorie: "Financiële verrichtingen", titel: "Kasblad KAS01", kop: "Kasblad", handboek: "p. 256-L", auto: "570000" },
  { ref: "BANK10", categorie: "Financiële verrichtingen", titel: "Bankafschrift BANK10", kop: "Bankafschrift", handboek: "p. 256-K", auto: "550000" },

  {
    ref: "BTW", categorie: "BTW-verwerking", titel: "Btw-verwerking BTW", kop: "Btw-verwerking", handboek: "btw-aangifte p. 183",
    instructie: "Kijk in de T-rekeningen rechts naar het saldo van de tussentijdse btw-rekeningen (dat zijn de 411- en 451-rekeningen die niet op 000 eindigen). Na het invullen van de btw-aangifte van het kwartaal moet de btw van deze tijdelijke rekeningen gecentraliseerd worden op 411000 Terug te vorderen btw-saldo of 451000 Te betalen btw-saldo.",
  },

  { ref: "AFSCHR", categorie: "Eindejaarsverrichtingen", titel: "Afschrijvingen AFSCHR", kop: "Afschrijvingen", handboek: "p. 200" },
  { ref: "DUB01", categorie: "Eindejaarsverrichtingen", titel: "Dubieuze debiteur DUB01", kop: "Dubieuze debiteur", handboek: "p. 206" },
  { ref: "DUB02", categorie: "Eindejaarsverrichtingen", titel: "Waardevermindering DUB02", kop: "Waardevermindering dubieuze debiteur", handboek: "p. 206" },
  { ref: "VR", categorie: "Eindejaarsverrichtingen", titel: "Voorraadwijziging VR", kop: "Voorraadwijziging", handboek: "p. 208" },
  { ref: "LENING", categorie: "Eindejaarsverrichtingen", titel: "Lening LENING", kop: "Lening", handboek: "aflossingstabel p. 255-I" },

  // RES01 en RES02 staan niet op een categorietabblad maar samen op de
  // pagina Resultaatverwerking. Ze moeten wel in deze lijst staan: zo tellen
  // ze mee in de T-rekeningen.
  { ref: "RES01", categorie: "Resultaatverwerking", titel: "Vennootschapsbelasting RES01", verborgenInNav: true },
  { ref: "RES02", categorie: "Resultaatverwerking", titel: "Resultaatverwerking RES02", verborgenInNav: true,
    instructie: "Controleer of de reserves voldoende hoog zijn. Indien dit niet het geval is, wijs dan eerst het nodige deel aan de reserves toe. De rest is over te dragen naar volgend jaar." },
];

// Volgorde van de categorieën in het menu. Elke categorie is één tabblad met
// al haar redeneerschema's onder elkaar.
const CATEGORIE_VOLGORDE = [
  "Beginbalans",
  "Aankopen",
  "Verkopen",
  "Loonverwerking",
  "Financiële verrichtingen",
  "BTW-verwerking",
  "Eindejaarsverrichtingen",
];

// Onder welke categorie staat de pagina "Klanten & leveranciers" in het
// menu? Ze hoort na de betaalstukken: pas dan valt er af te punten, en de
// controles erover staan in dezelfde categorie.
const CATEGORIE_RELATIES = "Financiële verrichtingen";

// Welke categorieën bevatten BETALINGEN? Op het tabblad Klanten &
// leveranciers bepaalt dit of een verrichting op 400000/440000 rechts komt
// (een betaling) of links (een factuur of creditnota).
const CATEGORIE_BETALINGEN = [
  "Financiële verrichtingen",
];

// Een korte tip die net boven het redeneerschema verschijnt (geen popup, ze
// moeten ze zien staan).
//
// Het saldo klopt enkel als de stukken in volgorde geboekt worden: gaat een
// leerling later terug om een ouder afschrift te verbeteren, dan zitten de
// latere boekingen al mee in het saldo van de T-rekening.
const TIP_VOLGORDE =
  " Let op: dit klopt enkel als je in volgorde boekt. Ga je later terug om een vorig stuk te verbeteren, " +
  "dan zitten de boekingen van daarna al in het saldo van de T-rekening.";

const TIP_BANK =
  "De grijze lijn onderaan op 550000 past zich zelf aan, zoals in een boekhoudpakket: jij boekt enkel de tegenrekeningen. " +
  "Klopt je saldo op de T-rekening van de bank daarna met het nieuwe saldo op het bankafschrift?" +
  TIP_VOLGORDE;

const TIP_KAS =
  "De grijze lijn onderaan op 570000 past zich zelf aan, zoals in een boekhoudpakket: jij boekt enkel de tegenrekeningen. " +
  "Klopt je saldo op de T-rekening van de kas daarna met het kasblad?" +
  TIP_VOLGORDE;

const TIP_AANKOOP =
  "Zoals in een boekhoudpakket: kies in de grijze lijn de leverancier en boek daaronder enkel de lijnen van de factuur. " +
  "Het totaal op 440000 rekent de app zelf uit.";

const TIP_VERKOOP =
  "Zoals in een boekhoudpakket: kies in de grijze lijn de klant en boek daaronder enkel de lijnen van de factuur. " +
  "Het totaal op 400000 rekent de app zelf uit.";

OPDRACHTEN.forEach(function (o) {
  if (o.tip) return;
  if (o.auto === "550000") o.tip = TIP_BANK;
  else if (o.auto === "570000") o.tip = TIP_KAS;
  else if (o.auto === "440000") o.tip = TIP_AANKOOP;
  else if (o.auto === "400000") o.tip = TIP_VERKOOP;
});
