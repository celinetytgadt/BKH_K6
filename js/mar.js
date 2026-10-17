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
  "nr": 121000,
  "naam": "Herwaardering meerwaarde materiële vaste activa",
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
  "nr": 173000,
  "naam": "Schulden aan kredietinstellingen",
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
  "naam": "Kost oprichting en kapitaalverhoging : Afschrijving (-)",
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
  "nr": 210009,
  "naam": "Kost onderzoek en ontwikkeling : Afschrijving (-)",
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
  "naam": "Software: afschrijving (-)",
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
  "nr": 220009,
  "naam": "Terreinen : Afschrijving (-)",
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
  "nr": 221009,
  "naam": "Gebouwen : Afschrijving (-)",
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
  "nr": 230009,
  "naam": "Installaties : Afschrijving (-)",
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
  "nr": 231009,
  "naam": "Machines : Afschrijving (-)",
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
  "nr": 232009,
  "naam": "Uitrusting : Afschrijving (-)",
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
  "nr": 240009,
  "naam": "Meubilair : Afschrijving (-)",
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
  "naam": "Kantoormachines: afschrijving (-)",
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
  "nr": 240209,
  "naam": "Computers: afschrijving (-)",
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
  "nr": 241009,
  "naam": "Rollend materieel : Afschrijving (-)",
  "apko": "A",
  "klasse": "2",
  "klasse_oms": "Vaste activa",
  "rubriek": "24",
  "rubriek_oms": "Meubilair & rollend materieel"
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
  "nr": 260009,
  "naam": "Overige materiële vaste activa : Afschrijving (-)",
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
  "nr": 300000,
  "naam": "Voorraad grondstoffen",
  "apko": "A",
  "klasse": "3",
  "klasse_oms": "Voorraden",
  "rubriek": "30",
  "rubriek_oms": "Grondstoffen"
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
  "nr": 400000,
  "naam": "Klanten",
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
  "nr": 411200,
  "naam": "Aftrekbare btw op uitgaande creditnota's",
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
  "nr": 423000,
  "naam": "Binnen het jaar vervallende schulden aan kredietinstellingen",
  "apko": "P",
  "klasse": "4",
  "klasse_oms": "Vorderingen en schulden op ten hoogste 1 jaar",
  "rubriek": "42",
  "rubriek_oms": "Schulden op meer dan 1 jaar die binnen het jaar vervallen"
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
  "nr": 452000,
  "naam": "Te betalen belg belastingen/taksen",
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
  "nr": 470000,
  "naam": "Dividenden vorige boekjaar",
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
  "nr": 500000,
  "naam": "Eigen aandelen",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "50",
  "rubriek_oms": "Eigen aandelen"
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
  "nr": 550000,
  "naam": "Bank",
  "apko": "A",
  "klasse": "5",
  "klasse_oms": "Liquide middelen",
  "rubriek": "55",
  "rubriek_oms": "Kredietinstellingen"
 },
 {
  "nr": 570000,
  "naam": "Kassa",
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
  "nr": 640000,
  "naam": "Bedrijfsbelastingen",
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
  "nr": 650000,
  "naam": "Rente, commissie & kosten schulden",
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
  "nr": 655000,
  "naam": "Resultaat omrekening vreemde valuta",
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
  "nr": 663000,
  "naam": "Minderwaarde realisatie vaste activa",
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
  "nr": 759000,
  "naam": "Diverse financiële opbrengsten",
  "apko": "O",
  "klasse": "7",
  "klasse_oms": "Opbrengsten",
  "rubriek": "75",
  "rubriek_oms": "Financiële opbrengsten"
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
  "nr": 780000,
  "naam": "Onttrekking : uitgestelde belastingen",
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
