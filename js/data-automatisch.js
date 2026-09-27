// data-automatisch.js
// De verkoopfacturen uit Thema 2 - level 8 (VK+01 tot VK+08). De leerlingen
// maken ze in Exact zelf aan en de boeking gebeurt daar automatisch. Hier
// hoeven ze dus geen redeneerschema in te vullen, maar de facturen zijn wel
// nodig voor de financiële verrichtingen die volgen (bv. BANK01, BANK04).
//
// Zolang niet alle verkopen geboekt zijn, blijven ze onzichtbaar: anders
// zou de boeking in de T-rekeningen verklappen hoe een verkoopfactuur
// geboekt wordt. Zodra alle verkopen geboekt zijn, verschijnen ze op het
// tabblad "Automatisch geboekt" onder Verkopen (enkel relatie en bedrag) en
// tellen ze mee in de T-rekeningen. De verkopen gaan dan op slot.
//
// Ze tellen niet mee bij het indienen.
//
// Per factuur: ref, relatie (moet in data-relaties.js staan), omschrijving
// en de boekingslijnen met de schoolnummers.

const AUTOMATISCH_TEKST = "Dit zijn de facturen uit Thema 2 - level 8. Deze werden automatisch geboekt.";

const AUTOMATISCH_GEBOEKT = [
  { ref: "VK+01", relatie: "Stef Content", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 289.19 },
    { rekening: "700000", dc: "C", bedrag: 239.00 },
    { rekening: "451100", dc: "C", bedrag: 50.19 },
  ] },
  { ref: "VK+02", relatie: "Mulders Optiek", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 4218.97 },
    { rekening: "704000", dc: "C", bedrag: 4649.00 },
    { rekening: "704020", dc: "D", bedrag: 1162.25 },
    { rekening: "451100", dc: "C", bedrag: 732.22 },
  ] },
  { ref: "VK+03", relatie: "Maison Lunettes", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 11856.50 },
    { rekening: "704000", dc: "C", bedrag: 13045.00 },
    { rekening: "704020", dc: "D", bedrag: 3261.25 },
    { rekening: "451100", dc: "C", bedrag: 2057.75 },
    { rekening: "746000", dc: "C", bedrag: 15.00 },
  ] },
  { ref: "VK+04", relatie: "Onghena Opticiens", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 58711.05 },
    { rekening: "704000", dc: "C", bedrag: 48505.00 },
    { rekening: "488000", dc: "C", bedrag: 20.00 },
    { rekening: "451100", dc: "C", bedrag: 10186.05 },
  ] },
  { ref: "VK+05", relatie: "Optiek Goormachtigh", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 10639.99 },
    { rekening: "704000", dc: "C", bedrag: 8809.00 },
    { rekening: "746000", dc: "C", bedrag: 15.00 },
    { rekening: "451100", dc: "C", bedrag: 1815.99 },
  ] },
  { ref: "VK+06", relatie: "Onghena Opticiens", soort: "creditnota", lijnen: [
    { rekening: "400000", dc: "C", bedrag: 960.17 },
    { rekening: "704000", dc: "D", bedrag: 777.00 },
    { rekening: "488000", dc: "D", bedrag: 20.00 },
    { rekening: "411200", dc: "D", bedrag: 163.17 },
  ] },
  { ref: "VK+07", relatie: "Roxx Oogzorg", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 6175.00 },
    { rekening: "704000", dc: "C", bedrag: 6175.00 },
  ] },
  { ref: "VK+08", relatie: "Lauder and Rees", soort: "factuur", lijnen: [
    { rekening: "400000", dc: "D", bedrag: 19575.00 },
    { rekening: "704000", dc: "C", bedrag: 19575.00 },
  ] },
];

// Wanneer worden ze zichtbaar? Zodra alle opdrachten van deze categorie
// geboekt zijn.
const AUTOMATISCH_NA_CATEGORIE = "Verkopen";
