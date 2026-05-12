/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/
let persona = {
  nome: `Mario`,
  cognome: `Rossi`,
  eta: 25,
  citta: `Roma`,
};
console.log(
  `${persona.nome} ${persona.cognome} ${persona.eta} anni vive a ${persona.citta}`,
);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/
persona.email = `epicode@PeriodicWave.it`;
delete persona.eta;
console.log(persona);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/
const utente = {
  indirizzo: {
    via: `Giovanni Miani`,
    citta: `Roma`,
    cap: `00149`,
  },
};
console.log(utente.indirizzo.cap);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/
let variabileChiave = "nome";
console.log(persona[variabileChiave]);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/
let a = 35;
let b = 45;
let c = 45;

if (a > b && a > c) {
  console.log(`il numero più grande è ${a}`);
} else if (b > a && b > c) {
  console.log(`il numero più grande è ${b}`);
} else if (c > a && c > b) {
  console.log(`il numero più grande è ${c}`);
} else {
  console.log(`Pareggio`);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

let totale = 35;
let spedizione;
let totaleFinale;

const spedizioneGratuita = 50;
const costoSpedizione = 9.9;
if (totale >= spedizioneGratuita) {
  spedizione = 0;
} else {
  spedizione = costoSpedizione;
}
totaleFinale = totale + spedizione;
console.log(`Totale finale: ${totaleFinale.toFixed(2)}€`);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayMisto = [42, "ciao", true];

for (let i = 0; i < arrayMisto.length; i++) {
  let elemento = arrayMisto[i];
  if (typeof elemento === "number") {
    console.log(elemento + " è un numero");
  } else {
    console.log(elemento + " non è un numero");
  }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myArray = [];
myArray.push(1, 2, 3, 4, 5);
myArray.unshift(0);
console.log(myArray, myArray.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/
const mioArray = ["penna", "quaderno", "Zaino", "Astuccio"];
mioArray.splice(1, 1);
console.log(mioArray);
mioArray.splice(1, 0, `Diario`);
console.log(mioArray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ["Penna", "Quaderno", "Zaino"];
const cercato = "Zaino";
if (prodotti.includes(cercato)) {
  console.log(`${cercato} è in carrello: true`);
} else {
  console.log(`${cercato}è in carrello: false`);
}
prodotti.splice(2, 1);
const posizione = prodotti.indexOf(cercato);
if (posizione !== -1) {
  console.log(`posizione: ${posizione}`);
} else {
  console.log("Non in carrello");
}
/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utenti = [
  { nome: "Mario", eta: 25 },
  { nome: "Luigi", eta: 30 },
  { nome: "Anna", eta: 22 },
];

for (let i = 0; i < utenti.length; i++) {
  console.log(`${utenti[i].nome} (${utenti[i].eta} anni)`);
}

console.table(utenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotto = [
  { nome: "Mela", prezzo: 0.8, disponibile: true },
  { nome: "Laptop", prezzo: 799.99, disponibile: true },
  { nome: "Penna", prezzo: 1.5, disponibile: false },
  { nome: "Monitor", prezzo: 249.99, disponibile: true },
];

for (let i = 0; i < prodotto.length; i++) {
  const { nome, prezzo, disponibile } = prodotto[i];

  if (disponibile && prezzo < 10) {
    console.log(`OFFERTA: ${nome} (${prezzo}€)`);
  } else if (disponibile && prezzo >= 10) {
    console.log(`${nome} — ${prezzo}€`);
  } else {
    console.log(`${nome} — esaurito`);
  }
}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
