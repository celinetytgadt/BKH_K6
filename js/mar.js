// MAR — rekeningenstelsel van de app.
//
// Overgenomen uit het rekeningenstelsel van Exact (export FinGLAccounts,
// administratie "Odette Lunettes.edu"), aangevuld met de schoolnummers die in
// de klas gebruikt worden maar niet in Exact bestaan: 411100, 411200, 451100,
// 451200 en 704000. De omschrijvingen komen uit Exact.
//
// apko: A (actief), P (passief), K (kost), O (opbrengst) — voor de filters en
// de controle op de saldokant. klasse/rubriek: de eerste één/twee cijfers.

const MAR = [
 {
  "nr": 100000,
  "naam": "Geplaatst kapitaal",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "10",
  "rubriek_oms": "Kapitaal"
 },
 {
  "nr": 101000,
  "naam": "Niet opgevraagd kapitaal (-)",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "10",
  "rubriek_oms": "Kapitaal"
 },
 {
  "nr": 110000,
  "naam": "Uitgiftepremies",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "11",
  "rubriek_oms": "Uitgiftepremies"
 },
 {
  "nr": 120000,
  "naam": "Herwaardering meerwaarde immateriële vaste activa",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "12",
  "rubriek_oms": "Herwaarderingsmeerwaarden"
 },
 {
  "nr": 121000,
  "naam": "Herwaardering meerwaarde materiële vaste activa",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "12",
  "rubriek_oms": "Herwaarderingsmeerwaarden"
 },
 {
  "nr": 122000,
  "naam": "Herwaardering meerwaarde financiële vaste activa",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "12",
  "rubriek_oms": "Herwaarderingsmeerwaarden"
 },
 {
  "nr": 123000,
  "naam": "Herwaardering meerwaarde voorraden",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "12",
  "rubriek_oms": "Herwaarderingsmeerwaarden"
 },
 {
  "nr": 124000,
  "naam": "Minderwaarde geldbelegging: Terugname",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "12",
  "rubriek_oms": "Herwaarderingsmeerwaarden"
 },
 {
  "nr": 130000,
  "naam": "Wettelijke reserve",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "13",
  "rubriek_oms": "Reserves"
 },
 {
  "nr": 131000,
  "naam": "Onbeschikbare reserve eigen aandelen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "13",
  "rubriek_oms": "Reserves"
 },
 {
  "nr": 131100,
  "naam": "Overige onbeschikbare reserves",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "13",
  "rubriek_oms": "Reserves"
 },
 {
  "nr": 132000,
  "naam": "Belastingvrije reserves",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "13",
  "rubriek_oms": "Reserves"
 },
 {
  "nr": 133000,
  "naam": "Beschikbare reserves",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "13",
  "rubriek_oms": "Reserves"
 },
 {
  "nr": 140000,
  "naam": "Overgedragen winst",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "14",
  "rubriek_oms": "Overgedragen resultaat"
 },
 {
  "nr": 141000,
  "naam": "Overgedragen verlies (-)",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "14",
  "rubriek_oms": "Overgedragen resultaat"
 },
 {
  "nr": 150000,
  "naam": "Kapitaalsubsidies",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "15",
  "rubriek_oms": "Kapitaalsubsidies"
 },
 {
  "nr": 160000,
  "naam": "Voorzieningen: pensioenen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 161000,
  "naam": "Voorzieningen: belastingen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 162000,
  "naam": "Voorzieningen: grote herstellingen en onderhoud",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 163000,
  "naam": "Voorzieningen: overige risico's & kosten",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 168000,
  "naam": "Uitgestelde belastingen op kapitaal",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 168100,
  "naam": "Uitgestelde belastingen: Meerwaarde mat vaste activa",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 168200,
  "naam": "Uitgestelde belastingen: Meerwaarde imm vaste activa",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 168700,
  "naam": "Uitgestelde belastingen: Meerwaarde eff b os",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 168800,
  "naam": "Buitenlandse uitgestelde belastingen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "16",
  "rubriek_oms": "Voorzieningen en uitgestelde belastingen"
 },
 {
  "nr": 170000,
  "naam": "Convert achtergestelde leningen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 170100,
  "naam": "Niet-convert achtergestelde leningen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 171000,
  "naam": "Convert niet-achtergestelde obligatie",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 171100,
  "naam": "Niet convert niet-achtergestelde obligatie",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 172000,
  "naam": "Leasingschulden",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 173000,
  "naam": "Schulden aan kredietinstellingen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 173100,
  "naam": "Promessen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 173200,
  "naam": "Acceptkredieten",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 174000,
  "naam": "Overige leningen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 175000,
  "naam": "Leveranciers : handelsschulden",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 175100,
  "naam": "Te betalen wissels",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 176000,
  "naam": "Ontvangen voorafbetalingen bestellingen",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 178000,
  "naam": "Borgtochten ontvangen in contanten",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 179000,
  "naam": "Overige schulden",
  "apko": "P",
  "klasse": "1",
  "klasse_oms": "Eigen vermogen",
  "rubriek": "17",
  "rubriek_oms": "Schulden op meer dan 1 jaar"
 },
 {
  "nr": 200000,
  "naam": "Kost oprichting en kapitaalverhoging",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 200008,
  "naam": "Kost oprichting en kapitaalverhoging : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 200009,
  "naam": "Kost oprichting en kapitaalverhoging : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 201000,
  "naam": "Kost uitgifte leningen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 201008,
  "naam": "Kost uitgifte leningen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 201009,
  "naam": "Kost uitgifte leningen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 202000,
  "naam": "Overige oprichtingskosten",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 202008,
  "naam": "Overige oprichtingskosten : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 202009,
  "naam": "Overige oprichtingskosten : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 204000,
  "naam": "Herstructureringskosten",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 204008,
  "naam": "Herstructureringskosten : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 204009,
  "naam": "Herstructureringskosten : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "20",
  "rubriek_oms": "Oprichtingskosten"
 },
 {
  "nr": 210000,
  "naam": "Kost onderzoek en ontwikkeling",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 210008,
  "naam": "Kost onderzoek en ontwikkeling : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 210009,
  "naam": "Kost onderzoek en ontwikkeling : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 211000,
  "naam": "Concessies, octrooien, licenties, knowhow",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 211008,
  "naam": "Concessies, octrooien, licenties, knowhow : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 211009,
  "naam": "Concessies, octrooien, licenties, knowhow : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 212000,
  "naam": "Goodwill",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 212008,
  "naam": "Goodwill : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 212009,
  "naam": "Goodwill : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 213000,
  "naam": "Vooruitbetalingen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 213008,
  "naam": "Vooruitbetalingen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 213009,
  "naam": "Vooruitbetalingen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 215000,
  "naam": "Software",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 215009,
  "naam": "Software: afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "21",
  "rubriek_oms": "Immateriële vaste activa"
 },
 {
  "nr": 220000,
  "naam": "Terreinen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 220008,
  "naam": "Terreinen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 220009,
  "naam": "Terreinen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 221000,
  "naam": "Gebouwen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 221008,
  "naam": "Gebouwen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 221009,
  "naam": "Gebouwen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 222000,
  "naam": "Bebouwde terreinen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 222008,
  "naam": "Bebouwde terreinen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 222009,
  "naam": "Bebouwde terreinen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 223000,
  "naam": "Overige zakelijke rechten op onroerende goederen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 223008,
  "naam": "Overige zakelijke rechten op onroerende goederen : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 223009,
  "naam": "Overige zakelijke rechten op onroerende goederen : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "22",
  "rubriek_oms": "Terreinen & gebouwen"
 },
 {
  "nr": 230000,
  "naam": "Installaties",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 230008,
  "naam": "Installaties : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 230009,
  "naam": "Installaties : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 231000,
  "naam": "Machines",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 231008,
  "naam": "Machines : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 231009,
  "naam": "Machines : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 232000,
  "naam": "Uitrusting",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 232008,
  "naam": "Uitrusting : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 232009,
  "naam": "Uitrusting : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "23",
  "rubriek_oms": "Installaties, machines & uitrusting"
 },
 {
  "nr": 240000,
  "naam": "Meubilair",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240008,
  "naam": "Meubilair : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240009,
  "naam": "Meubilair : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240100,
  "naam": "Kantoormachines",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240109,
  "naam": "Kantoormachines: afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240200,
  "naam": "Computers",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240208,
  "naam": "Computer - herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 240209,
  "naam": "Computers: afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 241000,
  "naam": "Rollend materieel",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 241008,
  "naam": "Rollend materieel : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 241009,
  "naam": "Rollend materieel : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
 },
 {
  "nr": 250000,
  "naam": "Terreinen en gebouwen in leasing",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 250008,
  "naam": "Terreinen en gebouwen in leasing : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 250009,
  "naam": "Terreinen en gebouwen in leasing : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 251000,
  "naam": "Installatie./ Mach. / Uitrust. in leasing",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 251008,
  "naam": "Installaties, Machines en Uitrusting in leasing: Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 251009,
  "naam": "Installaties, Machines en Uitrusting in leasing : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 252000,
  "naam": "Meubilair en rollend materieel in leasing",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 252008,
  "naam": "Meubilair en rollend materieel in leasing : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 252009,
  "naam": "Meubilair en rollend materieel in leasing : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "25",
  "rubriek_oms": "Vaste activa in leasing"
 },
 {
  "nr": 260000,
  "naam": "Overige materiële vaste activa",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "26",
  "rubriek_oms": "Overige materiële vaste activa"
 },
 {
  "nr": 260008,
  "naam": "Overige materiële vaste activa : Herwaardering",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "26",
  "rubriek_oms": "Overige materiële vaste activa"
 },
 {
  "nr": 260009,
  "naam": "Overige materiële vaste activa : Afschrijving",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "26",
  "rubriek_oms": "Overige materiële vaste activa"
 },
 {
  "nr": 270000,
  "naam": "Vaste activa in aanbouw",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "27",
  "rubriek_oms": "Vaste activa in aanbouw"
 },
 {
  "nr": 271000,
  "naam": "Vooruitbetalingen vaste activa aan",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "27",
  "rubriek_oms": "Vaste activa in aanbouw"
 },
 {
  "nr": 280000,
  "naam": "Deelname in verbonden onderneming",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 280100,
  "naam": "Nog te storten bedragen (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 280800,
  "naam": "Geboekte meerwaarden",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 280900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 281000,
  "naam": "Vordering op verbonden onderneming",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 281100,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 281200,
  "naam": "Aanschafwaarde vastrent effecten",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 281700,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 281900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 282000,
  "naam": "Deelname in onderneming met verhouding",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 282100,
  "naam": "Nog te storten bedragen (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 282800,
  "naam": "Geboekte meerwaarden",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 282900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 283000,
  "naam": "Vordering op onderneming met verhouding",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 283100,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 283200,
  "naam": "Aanschafwaarde vastrent effecten",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 283700,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 283900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 284000,
  "naam": "Andere aandelen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 284100,
  "naam": "Nog te storten bedragen (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 284800,
  "naam": "Geboekte meerwaarden",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 284900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 285000,
  "naam": "Overige vorderingen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 285100,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 285200,
  "naam": "Aanschafwaarde vastrent effecten",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 285700,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 285900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 288000,
  "naam": "Borgtochten betaald in contanten (financiële activa)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "28",
  "rubriek_oms": "Financiële vaste activa"
 },
 {
  "nr": 290000,
  "naam": "Handelsvorderingen > 1 jaar: handelsdebiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 290100,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 290600,
  "naam": "Vooruitbetalingen",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 290700,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 290900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 291000,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 291100,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 291700,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 291900,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "29",
  "rubriek_oms": "Vorderingen op meer dan 1 jaar"
 },
 {
  "nr": 300000,
  "naam": "Voorraad grondstoffen",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "30",
  "rubriek_oms": "Grondstoffen"
 },
 {
  "nr": 309000,
  "naam": "Grondstoffen : Geboekte waardevermindering",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "30",
  "rubriek_oms": "Grondstoffen"
 },
 {
  "nr": 310000,
  "naam": "Voorraad hulpstoffen",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "31",
  "rubriek_oms": "Hulpstoffen"
 },
 {
  "nr": 319000,
  "naam": "Hulpstoffen : Geboekte waardevermindering",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "31",
  "rubriek_oms": "Hulpstoffen"
 },
 {
  "nr": 320000,
  "naam": "Goederen in bewerking",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "32",
  "rubriek_oms": "Goederen in bewerking"
 },
 {
  "nr": 329000,
  "naam": "Goederen in bewerking : Geboekte waardevermindering",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "32",
  "rubriek_oms": "Goederen in bewerking"
 },
 {
  "nr": 330000,
  "naam": "Gereed product",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "33",
  "rubriek_oms": "Gereed product"
 },
 {
  "nr": 339000,
  "naam": "Geboekte waardevermindering gereed product (-)",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "33",
  "rubriek_oms": "Gereed product"
 },
 {
  "nr": 340000,
  "naam": "Voorraad handelsgoederen",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "34",
  "rubriek_oms": "Handelsgoederen"
 },
 {
  "nr": 349000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "34",
  "rubriek_oms": "Handelsgoederen"
 },
 {
  "nr": 350000,
  "naam": "Onroerend goed bestemd voor verkoop",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "35",
  "rubriek_oms": "Onroerende goederen bestemd voor verkoop"
 },
 {
  "nr": 359000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "35",
  "rubriek_oms": "Onroerende goederen bestemd voor verkoop"
 },
 {
  "nr": 360000,
  "naam": "Vooruitbetalingen op voorraadaankopen",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "36",
  "rubriek_oms": "Vooruitbetalingen op voorraadinkopen"
 },
 {
  "nr": 369000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "36",
  "rubriek_oms": "Vooruitbetalingen op voorraadinkopen"
 },
 {
  "nr": 370000,
  "naam": "Bestellingen in uitvoering",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "37",
  "rubriek_oms": "Bestellingen in uitvoering"
 },
 {
  "nr": 371000,
  "naam": "Toegedekt winst bestelling in uitvoering",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "37",
  "rubriek_oms": "Bestellingen in uitvoering"
 },
 {
  "nr": 379000,
  "naam": "Geboekte waardevermindering bestelling uitvoering (-)",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "37",
  "rubriek_oms": "Bestellingen in uitvoering"
 },
 {
  "nr": 400000,
  "naam": "Klanten",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 401000,
  "naam": "Te innen wissels",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 404000,
  "naam": "Te innen opbrengsten",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 406000,
  "naam": "Vooruitbetalingen",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 407000,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 409000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "40",
  "rubriek_oms": "Handelsvorderingen"
 },
 {
  "nr": 410000,
  "naam": "Opgevraagd, niet gestort kapitaal",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 411000,
  "naam": "Terug te vorderen btw-saldo",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 411100,
  "naam": "Aftrekbare btw",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 411110,
  "naam": "Aftrekbare btw",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 411120,
  "naam": "Aftrekbare btw op uitgaande creditnota's",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 411200,
  "naam": "Aftrekbare btw op uitgaande creditnota’s",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 412000,
  "naam": "Terug te vorderen belastingen en voorheffingen",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 412100,
  "naam": "Terug te vorderen Belgische winstbelasting",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 412500,
  "naam": "Overige Belgische belastingen en taksen te vorderen",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 412800,
  "naam": "Terug te vorderen buitenlandse belastingen",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 414000,
  "naam": "Te innen opbrengsten",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 416000,
  "naam": "Vorderingen op de eigenaar",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 416100,
  "naam": "Voorschotten op bezoldigingen",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 417000,
  "naam": "Dubieuze debiteuren",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 418000,
  "naam": "Terug te vorderen verpakking",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 419000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "41",
  "rubriek_oms": "Overige vorderingen"
 },
 {
  "nr": 420000,
  "naam": "Schulden > 1 jaar, te vervallen binnen jaar",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "42",
  "rubriek_oms": "Schulden op meer dan 1 jaar die binnen het jaar vervallen"
 },
 {
  "nr": 422000,
  "naam": "Binnen het jaar vervallende leasingschulden",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "42",
  "rubriek_oms": "Schulden op meer dan 1 jaar die binnen het jaar vervallen"
 },
 {
  "nr": 423000,
  "naam": "Binnen het jaar vervallende schulden aan KI",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "42",
  "rubriek_oms": "Schulden op meer dan 1 jaar die binnen het jaar vervallen"
 },
 {
  "nr": 430000,
  "naam": "Lening rekening vast termijn",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "43",
  "rubriek_oms": "Financiële schulden"
 },
 {
  "nr": 431000,
  "naam": "Promessen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "43",
  "rubriek_oms": "Financiële schulden"
 },
 {
  "nr": 432000,
  "naam": "Bank acceptkredieten",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "43",
  "rubriek_oms": "Financiële schulden"
 },
 {
  "nr": 433000,
  "naam": "Schulden zichtrekening",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "43",
  "rubriek_oms": "Financiële schulden"
 },
 {
  "nr": 439000,
  "naam": "Overige leningen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "43",
  "rubriek_oms": "Financiële schulden"
 },
 {
  "nr": 440000,
  "naam": "Leveranciers",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "44",
  "rubriek_oms": "Handelsschulden"
 },
 {
  "nr": 441000,
  "naam": "Te betalen wissels",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "44",
  "rubriek_oms": "Handelsschulden"
 },
 {
  "nr": 444000,
  "naam": "Te ontvangen facturen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "44",
  "rubriek_oms": "Handelsschulden"
 },
 {
  "nr": 450000,
  "naam": "Geraamde belastingen (België)",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 450500,
  "naam": "Overige Belgische belastingen en taksen voorziening",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 450800,
  "naam": "Buitenlandse belastingen en taksen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451000,
  "naam": "Te betalen btw",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451100,
  "naam": "Verschuldigde btw",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451110,
  "naam": "Verschuldigde btw",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451200,
  "naam": "Verschuldigde btw op inkomende creditnota’s",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451300,
  "naam": "Verschuldigde btw IC-verwerving",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451400,
  "naam": "BTW op invoer met verlegging van heffing",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451500,
  "naam": "Verschuldigde btw werken in onroerende staat",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451600,
  "naam": "Btw (in land van bestemming)",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451700,
  "naam": "Btw-correctie",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 451900,
  "naam": "RC btw-administratie",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 452000,
  "naam": "Te betalen belg belastingen/taksen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 452100,
  "naam": "Belgische winstbelastingen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 452500,
  "naam": "Overige Belgische belastingen en taksen te betalen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 452800,
  "naam": "Buitenlandse belastingen en taksen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 453000,
  "naam": "Ingehouden bedrijfsvoorheffing",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 454000,
  "naam": "Rijksdienst sociale zekerheid",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 455000,
  "naam": "Bezoldigingen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 455200,
  "naam": "Verschuldigde lonen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 455300,
  "naam": "Verschuldigde salarissen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 456000,
  "naam": "Vakantiegeld",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 459000,
  "naam": "Overige sociale schulden",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "45",
  "rubriek_oms": "Schulden mbt belastingen, bezoldigingen en sociale lasten"
 },
 {
  "nr": 460000,
  "naam": "Ontvangen voorafbetalingen bestellingen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "46",
  "rubriek_oms": "Ontvangen vooruitbetalingen op bestellingen"
 },
 {
  "nr": 470000,
  "naam": "Dividenden en tantième vorige boekjaar",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "47",
  "rubriek_oms": "Schulden uit bestemming resultaat"
 },
 {
  "nr": 471000,
  "naam": "Dividenden over het boekjaar",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "47",
  "rubriek_oms": "Schulden uit bestemming resultaat"
 },
 {
  "nr": 472000,
  "naam": "Tantièmes over het boekjaar",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "47",
  "rubriek_oms": "Schulden uit bestemming resultaat"
 },
 {
  "nr": 473000,
  "naam": "Andere rechthebbenden",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "47",
  "rubriek_oms": "Schulden uit bestemming resultaat"
 },
 {
  "nr": 480000,
  "naam": "Vervallen obligaties & coupons",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "48",
  "rubriek_oms": "Diverse schulden"
 },
 {
  "nr": 488000,
  "naam": "Terug te betalen verpakking",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "48",
  "rubriek_oms": "Diverse schulden"
 },
 {
  "nr": 489000,
  "naam": "Schulden aan de eigenaar",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "48",
  "rubriek_oms": "Diverse schulden"
 },
 {
  "nr": 490000,
  "naam": "Over te dragen kosten",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 491000,
  "naam": "Verkregen opbrengsten",
  "apko": "A",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 492000,
  "naam": "Toe te rekenen kosten",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 493000,
  "naam": "Over te dragen opbrengsten",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 499000,
  "naam": "Wachtrekeningen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 499950,
  "naam": "Verzamelbetalingen onderweg",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "49",
  "rubriek_oms": "Overlopende rekeningen"
 },
 {
  "nr": 500000,
  "naam": "Eigen aandelen",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "50",
  "rubriek_oms": "Eigen aandelen"
 },
 {
  "nr": 510000,
  "naam": "Aanschaffingswaarden",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "51",
  "rubriek_oms": "Aandelen en geldbeleggingen"
 },
 {
  "nr": 511000,
  "naam": "Nog te storten bedragen (-)",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "51",
  "rubriek_oms": "Aandelen en geldbeleggingen"
 },
 {
  "nr": 519000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "51",
  "rubriek_oms": "Aandelen en geldbeleggingen"
 },
 {
  "nr": 520000,
  "naam": "Aanschafwaarde vastrent effecten",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "52",
  "rubriek_oms": "Vastrentende effecten"
 },
 {
  "nr": 529000,
  "naam": "Geboekte waardevermindering vast effect (-)",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "52",
  "rubriek_oms": "Vastrentende effecten"
 },
 {
  "nr": 530000,
  "naam": "Termijndeposito > 1 jaar",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "53",
  "rubriek_oms": "Termijndeposito's"
 },
 {
  "nr": 531000,
  "naam": "Termijndeposito > 1 maand en < 1 jaar",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "53",
  "rubriek_oms": "Termijndeposito's"
 },
 {
  "nr": 532000,
  "naam": "Termijndeposito < 1 maand",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "53",
  "rubriek_oms": "Termijndeposito's"
 },
 {
  "nr": 539000,
  "naam": "Geboekte waardevermindering (-)",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "53",
  "rubriek_oms": "Termijndeposito's"
 },
 {
  "nr": 540000,
  "naam": "Te domiciliëren vervallen waarde",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "54",
  "rubriek_oms": "Te incasseren vervallen waarden"
 },
 {
  "nr": 550000,
  "naam": "ING",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 551000,
  "naam": "KBC",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 552000,
  "naam": "BNP Paribas Fortis",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 553000,
  "naam": "Belfius",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 554000,
  "naam": "Bank van de Post",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 555000,
  "naam": "Bank x",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 570000,
  "naam": "Kassen contanten",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "57",
  "rubriek_oms": "Kas"
 },
 {
  "nr": 578000,
  "naam": "Kassen - zegels",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "57",
  "rubriek_oms": "Kas"
 },
 {
  "nr": 580000,
  "naam": "Interne overboekingen",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "58",
  "rubriek_oms": "Interne overboekingen"
 },
 {
  "nr": 580600,
  "naam": "Transfer to Credit Card",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "58",
  "rubriek_oms": "Interne overboekingen"
 },
 {
  "nr": 580900,
  "naam": "Niet toegewezen betalingen",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "58",
  "rubriek_oms": "Interne overboekingen"
 },
 {
  "nr": 590000,
  "naam": "Elektronische inning",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "59",
  "rubriek_oms": "Overige geldbeleggingen"
 },
 {
  "nr": 600000,
  "naam": "Aankopen van grondstoffen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 601000,
  "naam": "Aankopen van hulpstoffen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 602000,
  "naam": "Aankopen diensten/werk/studies",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 603000,
  "naam": "Algemene onderaannemingen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 604000,
  "naam": "Aankopen handelsgoederen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 604010,
  "naam": "Retours op aankopen (-)",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 604020,
  "naam": "Handelskorting op aankopen (-)",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 604030,
  "naam": "Aankoopkosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 608000,
  "naam": "Ontvangen kortingen en rabat (-)",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 609000,
  "naam": "Voorraadwijziging grondstoffen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 609100,
  "naam": "Voorraadwijziging hulpstoffen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 609400,
  "naam": "Voorraadwijziging handelsgoederen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "60",
  "rubriek_oms": "Handelsgoederen, grond- en hulpstoffen"
 },
 {
  "nr": 610000,
  "naam": "Diensten en diverse goederen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 610100,
  "naam": "Onderhoud",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 610210,
  "naam": "Onderhoud wagen 50% niet aftrekbaar",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 610211,
  "naam": "Onderhoud wagen 50% niet aft ND",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 610300,
  "naam": "Onderhoud informatica",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 611000,
  "naam": "Huur",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 611600,
  "naam": "Onderhoud en herstellingen gebouwen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 611700,
  "naam": "Onderhoud informatica",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 611800,
  "naam": "Onderhoud en herstellingen rollend materiaal",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612000,
  "naam": "Kantoorbenodigdheden en drukwerk",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612100,
  "naam": "Boeken en documentatie",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612200,
  "naam": "Klein materiaal",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612220,
  "naam": "Beroepskledij",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612500,
  "naam": "Verbruik water",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612600,
  "naam": "Verbruik gas",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 612700,
  "naam": "Verbruik elektriciteit",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 613200,
  "naam": "Ereloon boekhouders",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 613300,
  "naam": "Sociaal secretariaat",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 614000,
  "naam": "Brandverzekering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 614100,
  "naam": "Verzekering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 614400,
  "naam": "Verzekering rollend materiaal",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 615000,
  "naam": "Vervoerskosten op verkoop",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 616000,
  "naam": "Postzegels, portkosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 616200,
  "naam": "Telefoon, GSM",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 616300,
  "naam": "Internetkosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 616500,
  "naam": "Brandstof voertuigen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 616520,
  "naam": "Publiciteitskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 617000,
  "naam": "Uitzendpersoneel",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 618000,
  "naam": "Premies : Bestuurders",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "61",
  "rubriek_oms": "Diensten en diverse goederen"
 },
 {
  "nr": 620000,
  "naam": "Bezoldigingen : Bestuurders of zaakvoerder",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 620100,
  "naam": "Bezoldigingen : Directiepersoneel",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 620200,
  "naam": "Bezoldigingen : Bedienden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 620300,
  "naam": "Bezoldigingen : Arbeiders",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 620400,
  "naam": "Bezoldigingen : Overige personeelsleden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 621000,
  "naam": "Werkgeversbijdragen sociale verzekering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 622000,
  "naam": "Werkgeverspremie bovenwet. verzekering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 623000,
  "naam": "Overige personeelskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 624000,
  "naam": "Oudoom/overleg pens: best/zaakvervoer.",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 624100,
  "naam": "Oudoom/overleg pens: personeel",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 625000,
  "naam": "Voorziening vakantiegeld",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "62",
  "rubriek_oms": "Bezoldigingen, sociale lasten en pensioenen"
 },
 {
  "nr": 630000,
  "naam": "Afschrijvingen op oprichtingskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 630100,
  "naam": "Afschrijvingen op immateriële vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 630200,
  "naam": "Afschrijvingen op materiële vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 630800,
  "naam": "Minderwaarde immateriële vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 630900,
  "naam": "Minderwaarde materiële vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 631000,
  "naam": "Minderwaarde voorraad: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 631100,
  "naam": "Minderwaarde voorraad: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 632000,
  "naam": "Minderwaarde bestelling in uitvoering: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 632100,
  "naam": "Minderwaarde bestelling in uitvoering: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 633000,
  "naam": "Minderwaarde handelsvorderingen: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 633100,
  "naam": "Minderwaarde handelsvorderingen > 1 jaar: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 634000,
  "naam": "Minderwaarde handelsvorderingen < 1 jaar: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 634100,
  "naam": "Minderwaarde handelsvorderingen < 1 jaar: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 635000,
  "naam": "Voorzieningen: pensioenen: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 635100,
  "naam": "Voorzieningen: pensioenen: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "63",
  "rubriek_oms": "Afschrijvingen, waardeverminderingen en voorzieningen"
 },
 {
  "nr": 640000,
  "naam": "Bedrijfsbelastingen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 640200,
  "naam": "Diverse kosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 641000,
  "naam": "Minderwaarde realisatie imm vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 642000,
  "naam": "Minderwaarde realisatie handelsdebiteuren",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 643000,
  "naam": "Diverse bedrijfskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 649000,
  "naam": "Bedrijfskost als herstructurering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "64",
  "rubriek_oms": "Andere bedrijfskosten"
 },
 {
  "nr": 650000,
  "naam": "Rente, commissie & kosten schulden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 650100,
  "naam": "Kosten van leasingschulden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 650200,
  "naam": "Overige kosten van schulden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 650300,
  "naam": "Gekapitaliseerde interesten (-)",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 651000,
  "naam": "Minderwaarde vlot activa: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 651100,
  "naam": "Minderwaarde vlottende activa: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 652000,
  "naam": "Minderwaarde realisatie vlottende activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 653000,
  "naam": "Discontokosten op vordering",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 654000,
  "naam": "Wisselresultaten verlies",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 655000,
  "naam": "Resultaat omrekening vreemde valuta",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 656000,
  "naam": "Voorzieningen: met fin kar: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 656100,
  "naam": "Voorzieningen: financieel kar: Terugname",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 657000,
  "naam": "Betalingskortingen aan klanten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 657010,
  "naam": "Betalingsverschil verkoop",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 659000,
  "naam": "Diverse financiële kosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 659990,
  "naam": "Rekenverschillen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "65",
  "rubriek_oms": "Financiële kosten"
 },
 {
  "nr": 660000,
  "naam": "Minderwaarde Uitzonderlijke afschrijving oprichtingskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 660100,
  "naam": "Minderwaarde Uitzonderlijke afschrijving imm vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 660200,
  "naam": "Minderwaarde Uitzonderlijke afschrijving mat vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 661000,
  "naam": "Minderwaarde financiële vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 662000,
  "naam": "Voorzieningen: uitzonderlijke risico's en kosten: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 662100,
  "naam": "Voorzieningen: uitzonderlijke risico's en kosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 663000,
  "naam": "Minderwaarde realisatie vaste activa",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 664000,
  "naam": "Andere niet-recurrente bedrijfskosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 665000,
  "naam": "Andere niet-recurrente financiële kosten",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 669000,
  "naam": "Uitzonderlijke kost als herstructureringkost (-)",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "66",
  "rubriek_oms": "Niet-recurrente bedrijfs- en financiële kosten"
 },
 {
  "nr": 670000,
  "naam": "Verschuldigde en gestorte belastingen en voorheffingen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 670100,
  "naam": "Geactiveerde oversch bet bel/voorschot",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 670200,
  "naam": "Geraamde belastingen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 671000,
  "naam": "Belgische belastingen op het resultaat van het vorig boekjaar",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 671100,
  "naam": "Geraamde belastingssupplementen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 671200,
  "naam": "Voorzieningen: fiscale",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 672000,
  "naam": "Buitenlandse belastingen resultaat boekjaar",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 673000,
  "naam": "Buitenlandse belastingen resultaat vorige boekjaar",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "67",
  "rubriek_oms": "Belastingen op het resultaat"
 },
 {
  "nr": 680000,
  "naam": "Overschrijving naar uitgestelde belastingen",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "68",
  "rubriek_oms": "Overboeking naar uitgestelde belastingen en belastingvrije reserves"
 },
 {
  "nr": 689000,
  "naam": "Overschrijving naar belastingvrije reserves",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "68",
  "rubriek_oms": "Overboeking naar uitgestelde belastingen en belastingvrije reserves"
 },
 {
  "nr": 690000,
  "naam": "Overgedragen verlies vorig boekjaar",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 691000,
  "naam": "Kapitaal/aangifte: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 692000,
  "naam": "Toevoeging aan de wettelijke reserves",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 692100,
  "naam": "Overige reserve: Toevoeging",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 693000,
  "naam": "Over te dragen winst",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 694000,
  "naam": "Vergoeding van de inbreng",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 695000,
  "naam": "Bestuurders of zaakvoerders",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 696000,
  "naam": "Andere rechthebbenden",
  "apko": "K",
  "klasse": "6",
  "klasse_oms": "Kosten",
  "rubriek": "69",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 700000,
  "naam": "Verkopen en diensten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 704000,
  "naam": "Verkopen handelsgoederen",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 704001,
  "naam": "Verkopen handelsgoederen 6% btw",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 704002,
  "naam": "Verkopen handelsgoederen 21% btw",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 704010,
  "naam": "Retours op verkopen (-)",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 704020,
  "naam": "Handelskorting op verkopen (-)",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 707000,
  "naam": "Verkoop activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 708000,
  "naam": "Toegekende kort/rist/rabat",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "70",
  "rubriek_oms": "Omzet"
 },
 {
  "nr": 712000,
  "naam": "Voorraadwijziging goederen in bewerking",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "71",
  "rubriek_oms": "Wijziging in de voorraad goederen in bewerking"
 },
 {
  "nr": 713000,
  "naam": "Voorraadwijziging gereed product",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "71",
  "rubriek_oms": "Wijziging in de voorraad goederen in bewerking"
 },
 {
  "nr": 715000,
  "naam": "Voorraadwijziging onroerende handelsgoederen",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "71",
  "rubriek_oms": "Wijziging in de voorraad goederen in bewerking"
 },
 {
  "nr": 717000,
  "naam": "Voorraadwijziging bestelling in uitvoering: aanschafwaarde",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "71",
  "rubriek_oms": "Wijziging in de voorraad goederen in bewerking"
 },
 {
  "nr": 717100,
  "naam": "Voorraadwijziging bestelling in uitvoering",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "71",
  "rubriek_oms": "Wijziging in de voorraad goederen in bewerking"
 },
 {
  "nr": 720000,
  "naam": "Geproduceerde vaste activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "72",
  "rubriek_oms": "Geproduceerde vaste activa"
 },
 {
  "nr": 740000,
  "naam": "Bedrijfssubsidies en compensaties",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 741000,
  "naam": "Meerwaarde cour realisatie mat vaste activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 742000,
  "naam": "Meerwaarde realisatie handelgoederen",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 743000,
  "naam": "Diverse bedrijfsopbrengst",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 744000,
  "naam": "Huuropbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 746000,
  "naam": "Doorgerekende kosten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 749000,
  "naam": "Diverse bedrijfsopbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "74",
  "rubriek_oms": "Andere bedrijfsopbrengsten"
 },
 {
  "nr": 750000,
  "naam": "Opbrengsten uit financiële vaste activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 751000,
  "naam": "Opbrengsten uit vlottende activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 752000,
  "naam": "Meerwaarde realisatie vlot activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 753000,
  "naam": "Kapitaal- en interestsubsidie",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 754000,
  "naam": "Wisselresultaten winst",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 755000,
  "naam": "Resultaat omrekening vreemde valuta",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 757000,
  "naam": "Betalingskorting van leveranciers",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 757010,
  "naam": "Betalingsverschil aankoop",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 759000,
  "naam": "Diverse financiële opbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
 },
 {
  "nr": 760000,
  "naam": "Minderwaarde en Afschrijvingen mat vaste activa: Terugname",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 760100,
  "naam": "Minderwaarde en Afschrijvingen immat vaste activa: Terugname",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 761000,
  "naam": "Minderwaarde financiële vaste activa: Terugname",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 762000,
  "naam": "Voorzieningen: uitzonderlijke risico's en kosten: Terugname",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 763000,
  "naam": "Meerwaarde realisatie vaste activa",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 764000,
  "naam": "Andere niet-recurrente bedrijfsopbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 765000,
  "naam": "Privégebruik",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 769000,
  "naam": "Andere niet-recurrente financiële opbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "76",
  "rubriek_oms": "Niet-recurrente bedrijfs- of financiële opbrengsten"
 },
 {
  "nr": 771000,
  "naam": "B Belastingen res: reg versch/bet",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "77",
  "rubriek_oms": "Regularisering van belastingen"
 },
 {
  "nr": 771100,
  "naam": "B Belastingen res: reg geraamde b",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "77",
  "rubriek_oms": "Regularisering van belastingen"
 },
 {
  "nr": 771200,
  "naam": "Voorzieningen: fiscale: Terugname",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "77",
  "rubriek_oms": "Regularisering van belastingen"
 },
 {
  "nr": 773000,
  "naam": "Buitenlandse belastingen resultaat",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "77",
  "rubriek_oms": "Regularisering van belastingen"
 },
 {
  "nr": 780000,
  "naam": "Onttrekking : uitgestelde belastingen",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "78",
  "rubriek_oms": "Onttrekking aan uitgestelde belastingen en belastingvrije reserves"
 },
 {
  "nr": 789000,
  "naam": "Onttrekking : belastingvrij",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "78",
  "rubriek_oms": "Onttrekking aan uitgestelde belastingen en belastingvrije reserves"
 },
 {
  "nr": 790000,
  "naam": "Overgedragen winst vorig boekjaar",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "79",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 791000,
  "naam": "Onttrekking : kapitaal en uitgifte",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "79",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 792000,
  "naam": "Onttrekking : reserve",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "79",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 793000,
  "naam": "Over te dragen verlies",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "79",
  "rubriek_oms": "Resultaatverwerking"
 },
 {
  "nr": 794000,
  "naam": "Tussenkomst vennoten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "79",
  "rubriek_oms": "Resultaatverwerking"
 }
];
