// data-relaties.js
// De klanten en leveranciers waaruit de leerling kiest in het relatieveld.
// Dat veld verschijnt bij elke lijn op 400000, 407000 en 409000 (klanten)
// en 440000 (leveranciers), en is daar verplicht — net zoals in Exact.
//
// Het is een keuzelijst en geen vrij tekstveld: zo schrijft iedereen een
// relatie op dezelfde manier en klopt het overzicht Klanten & leveranciers.
// Ontbreekt er een naam, zet ze er dan gewoon bij.

const RELATIES = {
  klanten: [
    "Particulieren",
    "Brilart",
    "Onghena Opticiens",
    "Optiek Geyskens",
    "Brillier",
    "Vue des Remparts",
    "Lauder and Rees",
    // Uit de facturen van Thema 2 - level 8 (VK+01 tot VK+08).
    "Stef Content",
    "Mulders Optiek",
    "Maison Lunettes",
    "Optiek Goormachtigh",
    "Roxx Oogzorg",
    // Enkel op de beginbalans.
    "Yalora Optiek",
    "Optiek Dobbelaere",
    "Dejavu",
  ],
  leveranciers: [
    "Uitgeverij Lannoo NV",
    "Hoya Lens Belgium NV",
    "Binoche Belgian Eyewear bv",
    "Silhouette Benelux nv",
    "Luminus NV",
    "Lab9 Stores nv",
    "Aldo",
    "Pixartprinting SpA",
    "HGM Glasses Manufacturer Co. Ltd.",
    "MS Amlin",
    "Securex",
    // Enkel op de beginbalans.
    "Tokai Optecs nv",
  ],
};
