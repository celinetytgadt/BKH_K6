# Automatische test

`test-k6.js` draait de echte app in een nagebootste browser (jsdom) tegen de
echte `Code.gs`, met een nagemaakte Google-omgeving ertussen: één Sheet met
tabbladen per vestiging. Gecontroleerd worden onder meer:

- de installatie (Klas, Taken, Sleutel en per vestiging Instellingen,
  Inzendingen, Detail);
- aanmelden per vestiging (enkel de eigen leerlingen, codes per vestiging);
- de grijze lijn (bovenaan bij facturen, onderaan bij de bank), de
  creditnota die vanzelf omdraait en de verplichte relatie;
- indienen in de tabbladen van de juiste vestiging, met automatisch nakijken
  tegen een (verzonnen) sleutel;
- de automatisch geboekte facturen en het slot op de verkopen, en het weer
  openen na feedback;
- het tabblad Beheer: klaslijst en taken van één vestiging bewaren zonder
  die van de andere te raken.

## Draaien

Node.js en eenmalig `npm install jsdom`. Daarna, vanuit deze map:

    node test-k6.js

Het harnas maakt een testkopie van de app in `/tmp/t-k6`. Alles goed? Dan
eindigt het met "Alles in orde."
