# Koppeling met Google Sheets — installatie en gebruik

Deze app gebruikt **één Google Sheet met één script** voor de drie
vestigingen (LEU, SKW en TW). Dat is anders dan bij de app van Kern 8, waar
elke vestiging een eigen Sheet had. Een wijziging aan het script doe je hier
dus maar één keer.

De leerling kiest bovenaan de app eerst de school en daarna de naam. Elk
verzoek van de app stuurt de code van die vestiging mee, en het script
schrijft en leest dan in de tabbladen van die vestiging.

## De tabbladen

| tabblad | kolommen | voor |
|---|---|---|
| **Klas** | vestiging · naam · code · opmerking | alle leerlingen van de drie vestigingen |
| **Taken** | vestiging · categorie · link naar de taak in Classroom · opmerking | de Classroom-taak per categorie en vestiging |
| **Sleutel** | ref · rekening of veld · D/C · bedrag of rubrieken · opmerking · relatie | de oplossingssleutel, samen voor de drie vestigingen |
| **Instellingen LEU** (SKW, TW) | instelling · waarde · toelichting | expertcode, welkomsttekst, mededeling, links |
| **Inzendingen LEU** (SKW, TW) | tijdstip · leerling · … · automatische controle | hier kijk je na |
| **Detail LEU** (SKW, TW) | één rij per boekingslijn | om uit te pluizen wat er precies geboekt is |

De kolommen *opmerking* en *relatie* van de Sleutel zijn enkel voor jou: de
automatische controle vergelijkt per verrichting het saldo per rekening en
kijkt niet naar de relatie.

## Deel 1 — Eenmalig installeren

### 1. Maak de Google Sheet

Maak een nieuwe Google Sheet, bv. *Boekhoudapp Kern 6 — nakijken*. Heb je al
een Sheet volgens het voorstel (de ODS met Klas, Instellingen LEU, Taken,
Sleutel, Inzendingen LEU …), dan mag je die gewoon gebruiken: de installatie
laat bestaande gegevens staan.

### 2. Plak het script

Open de Sheet en ga naar **Uitbreidingen → Apps Script**. Wis wat daar staat,
plak de volledige inhoud van `apps-script/Code.gs` en bewaar.

Kijk bovenaan drie dingen na:

```js
var SLEUTEL = "DEMETK6";            // hetzelfde woord als SLEUTELWOORD in js/config-koppeling.js
var VESTIGINGEN = ["LEU", "SKW", "TW"];
var MAP_ID_GEDEELD = "";            // het ID van de map met de werkbestanden
```

**Gebruik voor `MAP_ID_GEDEELD` níét de map van de Kern 8-app.** De
werkbestanden heten in beide apps `werk_LEU_<naam>.json` en zouden elkaar
overschrijven. Maak een nieuwe map (bv. op de gedeelde Drive) en plak het
stuk van de URL na `/folders/`. Laat je het leeg, dan maakt het script zelf
een map *Boekhoudapp Kern 6 werkbestanden* in de Drive van dit account.

### 3. Maak de tabbladen aan

Herlaad de Sheet (F5). Er verschijnt een menu **Boekhoudapp**. Kies
**Boekhoudapp → Eerste installatie** en geef de eerste keer toestemming
(*Geavanceerd → Ga naar … (onveilig)* — het is je eigen script).

Alle tabbladen hierboven worden aangemaakt of aangevuld. Bestaande gegevens
blijven staan, dus je mag dit gerust opnieuw doen.

### 4. Vul de klaslijst in

In **Klas**: kolom A de vestiging (`LEU`, `SKW` of `TW`), kolom B de naam.
Daarna **Boekhoudapp → Codes genereren voor lege vakjes**: elke leerling
krijgt een unieke viercijferige code in kolom C.

### 5. Zet de expertcode

**Boekhoudapp → Expertcode instellen…** vraagt eerst de vestiging en dan de
code. Met die code openen de vakexperten van díé vestiging het tabblad Beheer
in de app. Je kan ook rechtstreeks cel B2 van *Instellingen LEU* (SKW, TW)
invullen.

### 6. Publiceer het script als web-app

In de code-editor: **Implementeren → Nieuwe implementatie**, type
**Web-app**, uitvoeren als **Ik**, toegang **Iedereen**. Kopieer de URL (die
eindigt op `/exec`).

> "Iedereen" betekent: iedereen mag het script aanspreken. Wat het
> teruggeeft, hangt af van de naam en de code die meegestuurd worden.

Wijzig je later iets aan het script: **Implementeren → Implementaties
beheren → potloodje → Versie: Nieuwe versie**. Dan blijft de URL dezelfde.

### 7. Zet de URL in de app

In `js/config-koppeling.js`:

```js
const WEB_APP_URL = "https://script.google.com/macros/s/AKfy…/exec";
const SLEUTELWOORD = "DEMETK6";
```

Eén URL voor de drie vestigingen. Zet daarna alles op GitHub. Klaar.

> Zolang `WEB_APP_URL` leeg is, werkt de app enkel met de opslag in de
> browser: niets op de Drive, niets indienen. Handig om te testen.

## Deel 2 — Nakijken

- Kijk na in **Inzendingen LEU** (of SKW, TW). Filter op *is laatste* = JA.
- Elke nieuwe inzending wordt meteen naast de **Sleutel** gelegd. Klopt het
  saldo per rekening, dan staat de beoordeling al op *In orde*; zo niet, dan
  op *Te remediëren*, met in de kolom *automatische controle* welke
  rekeningen afwijken. Het vinkje *klaar* blijft altijd uit.
- Feedback schrijf je in kolom H. Vrijgeven: vink *klaar* aan, of zet je
  cursor op een rij van de leerling en kies **Boekhoudapp → Feedback
  vrijgeven voor deze leerling**.
- **Boekhoudapp → Open inzendingen automatisch nakijken** doet de
  automatische controle opnieuw voor de drie vestigingen, voor alle nieuwste
  rijen zonder beoordeling (handig na een aanpassing aan de Sleutel: maak dan
  eerst die beoordelingen leeg).
- **Boekhoudapp → Sleutel overnemen uit een inzending…** neemt de recentste
  inzendingen van een leerling (standaard *test*) over als sleutel, uit de
  drie Detail-tabbladen samen. Wat er in de Sleutel stond, wordt vervangen.

Wat *In orde* is, gaat in de app op slot en wordt niet opnieuw ingediend.

### De automatisch geboekte facturen (VK+01 tot VK+08)

Die zitten in de app zelf (`js/data-automatisch.js`) en worden nooit
ingediend. Ze horen dus niet in de Sleutel (mag wel, maar er wordt niets mee
gedaan). Zodra een leerling alle verkopen geboekt heeft, gaan de verkopen op
slot. Geef je feedback die niet *In orde* is op een verkoop, dan kan de
leerling die ene verkoop weer openen om te remediëren.

## Deel 3 — Praktisch

- **Werk terugzetten**: **Boekhoudapp → Werk terugzetten uit een versie…**
  vraagt de vestiging en de naam, en zet de nieuwste bewaarde versie terug.
- **Code kwijt**: kijk in kolom C van *Klas*.
- **Leerling erbij**: nieuwe rij in *Klas* (vestiging + naam), daarna *Codes
  genereren*. Of via het tabblad Beheer in de app.
- **Waar staan de werkbestanden?** **Boekhoudapp → Waar staan de
  werkbestanden?** toont de map en het aantal bestanden per vestiging.
- **Automatische test**: zie `test/LEESMIJ.md`.
