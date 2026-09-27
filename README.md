# Boekhoudapp Kern 6 — Odette Lunettes.edu (De MET)

Statische webapp (HTML/CSS/JS, geen build-stap) waarmee leerlingen van Kern 6
nadenken over de boekingen van **Odette Lunettes.edu (boekjaar 2004)** vóór
ze die in Exact invoeren. De documenten staan in het handboek; de app toont
bij elke boeking op welke pagina.

Gebouwd op de app van Kern 8 (repo `boekhouding_DeMet`), met deze verschillen:

- **Geen documentafbeeldingen**: enkel een verwijzing naar het handboek
  (pagina, doc, relatie).
- **Eén tabblad per categorie**: alle redeneerschema's van een categorie
  staan onder elkaar, elk in een inklapbaar blok met een eigen knop Boeken.
  Per categorie blijft er een tabblad Controle.
- **Zoals een boekhoudpakket**: bij aan- en verkoopfacturen staat de lijn op
  440000/400000 al klaar als grijze eerste lijn. De leerling kiest enkel de
  leverancier of klant; bedrag en debet/credit rekent de app uit als saldo
  van de andere lijnen (een creditnota draait vanzelf om). Bij bank en kas
  staat de grijze lijn op 550000/570000 onderaan.
- **Relatie verplicht** op 400000, 407000, 409000 en 440000, gekozen uit een
  vaste lijst (`js/data-relaties.js`).
- **Automatisch geboekte facturen VK+01 tot VK+08** (Thema 2 - level 8): ze
  worden zichtbaar (tabblad *Automatisch geboekt* onder Verkopen, enkel
  relatie en bedrag) en tellen mee in de T-rekeningen zodra de leerling alle
  verkopen geboekt heeft. Vanaf dan gaan de verkopen op slot, tenzij de
  vakexpert feedback gaf die niet *In orde* is. Ze worden niet ingediend.
- **Rekeningenstelsel van Exact** (`js/mar.js`), aangevuld met de
  schoolnummers 411100, 411200, 451100, 451200 en 704000.
- **Eén Google Sheet en één script voor de drie vestigingen**, met tabbladen
  per vestiging. Zie `HANDLEIDING-koppeling.md`.

## Indeling

| categorie | opdrachten |
|---|---|
| Beginbalans | BB |
| Aankopen | AK01 – AK11 |
| Verkopen | VK01 – VK07, ONTV01, VK08, VK09 (+ tabblad Automatisch geboekt: VK+01 – VK+08) |
| Loonverwerking | LOON01, LOON02, AK12, AK13 |
| Financiële verrichtingen | BANK01 – BANK09, KAS01, BANK10 (+ Klanten & leveranciers) |
| BTW-verwerking | BTW |
| Eindejaarsverrichtingen | AFSCHR, DUB01, DUB02, VR, LENING |
| Resultaatverwerking | RES01 (belasting), RES02 (toewijzing) — zelfde pagina als in Kern 8 |

## Structuur

```
index.html               app-schil (header, voortgangsbalk, navigatie, hoofdvenster, T-panel)
css/style.css             opmaak — kleuren staan bovenaan als variabelen
js/mar.js                 het rekeningenstelsel (uit Exact + schoolnummers)
js/data-mar-indeling.js   klassen en rubrieken — voedt de filters
js/data-opdrachten.js     de opdrachten: ref, categorie, titel, verwijzing naar het handboek, grijze lijn
js/data-relaties.js       de klanten en leveranciers in de keuzelijst
js/data-automatisch.js    de automatisch geboekte facturen VK+01 – VK+08
js/data-controles.js      de controlevragen per categorie
js/data-balans.js         de vakken van de eindbalans en de resultatenrekening
js/data-info.js           de teksten achter de i-icoontjes
js/config-koppeling.js    de web-app-URL, het sleutelwoord en de vestigingen
js/data-klas.js           noodlijst met namen; normaal leeg — de klaslijst staat in de Sheet
js/app.js                 alle logica
js/koppeling.js           alles wat met de Google Sheet praat
js/beheer.js              het tabblad Beheer voor de vakexperten (achter de expertcode)
apps-script/Code.gs       de serverkant, hoort in de Apps Script-editor van de Sheet
test/                     automatische test (Node + jsdom)
```

## Waar pas je wat aan?

- **Een verwijzing naar het handboek** → veld `handboek` in `js/data-opdrachten.js`.
- **Een klant of leverancier ontbreekt in de keuzelijst** → `js/data-relaties.js`.
- **Een automatisch geboekte factuur** → `js/data-automatisch.js`.
- **Een controlevraag** → `js/data-controles.js` (veld `categorie` bepaalt
  op welke controlepagina ze komt; `handboek` toont een verwijzing).
- **Welkomsttekst, mededeling, links, klaslijst, Classroom-taken** → in de
  Google Sheet (of via het tabblad Beheer in de app), per vestiging.
- **De oplossingssleutel** → tabblad *Sleutel* in de Google Sheet. Zet ze
  nooit in deze repo: alles wat via GitHub Pages gepubliceerd wordt, is voor
  iedereen leesbaar.

## Publiceren op GitHub Pages

**Settings → Pages**, kies de branch en de root-map. Na een paar minuten
staat de app op `https://celinetytgadt.github.io/BKH_K6/`.

> GitHub Pages van een privérepo vraagt een betalend GitHub-abonnement. De
> gepubliceerde site is hoe dan ook publiek, ook als de repo privé is.
