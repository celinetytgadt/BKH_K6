// config-koppeling.js
// De koppeling met de Google Sheet. Enkel dit bestand moet je aanpassen
// nadat het script gepubliceerd is — zie HANDLEIDING-koppeling.md.
//
// ÉÉN APP, ÉÉN SHEET, DRIE VESTIGINGEN
// Er is één Google Sheet met één Apps Script en dus één web-app-URL. De
// leerling kiest bovenaan de app eerst de vestiging en daarna de naam; elk
// verzoek stuurt de code van de vestiging mee, zodat het script de juiste
// tabbladen gebruikt (Instellingen LEU, Inzendingen LEU, Detail LEU …) en
// enkel de leerlingen van die vestiging uit het tabblad Klas toont.
//
// Eén vestiging? Laat er dan gewoon één in de lijst staan. De keuzelijst
// verdwijnt dan vanzelf uit de app.

// De URL die Google geeft na "Implementeren → Nieuwe implementatie →
// Web-app". Ze eindigt op /exec. Blijft ze leeg, dan werkt de app enkel
// met de opslag in de browser (niets bewaren op de Drive, niets indienen).
const WEB_APP_URL = "";

// Moet exact hetzelfde woord zijn als SLEUTEL bovenaan Code.gs.
// Let op: dit staat in publiek leesbare code. Het is een drempel tegen
// toevallige rommel, geen wachtwoord — de echte afscherming is dat enkel
// de vakexpert bij de Sheet en bij de Drive-map kan.
const SLEUTELWOORD = "DEMETK6";

const VESTIGINGEN = [
  // code: komt in de naam van de tabbladen (Inzendingen LEU), in de kolom
  //       vestiging van Klas en Taken, en in de naam van het werkbestand
  //       (werk_LEU_….json). Moet overeenkomen met VESTIGINGEN in Code.gs.
  // naam: wat de leerling in de keuzelijst ziet.
  { code: "LEU", naam: "Leuven", webAppUrl: WEB_APP_URL, sleutel: SLEUTELWOORD },
  { code: "SKW", naam: "Katelijne", webAppUrl: WEB_APP_URL, sleutel: SLEUTELWOORD },
  { code: "TW", naam: "Tielt-Winge", webAppUrl: WEB_APP_URL, sleutel: SLEUTELWOORD },
];

const KOPPELING = {
  // Om de hoeveel minuten het werk stilletjes naar de Drive gaat.
  bewaarIntervalMinuten: 2,

  // Feedback automatisch ophalen bij het openen van de app.
  feedbackBijOpstart: true,
};
