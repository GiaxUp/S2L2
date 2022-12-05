/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
Nella giornata di oggi abbiamo visto principalmente i datatype Number, String e Boolean.
1. Number ci restituisce un valore numerico preciso, che può essere scritto sia con che senza i decimali.
Esempio:
let numero1 = 35;
let numero 2 = 32.33;
2. String ci restituisce una serie di caratteri come lettere o numeri in serie.
Esempio:
let stringa1 = "Mario Rossi"
let stringa2 = "Volvo XC60"
3. Boolean ci restituisce semplicemente un valore vero o falso.
Esempio: 
let x = 5;
let y = 5;
let z = 6;
( x == y) -> Restituirà true
(x == z) -> Restituirà false
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let name = "Giacomo";
console.log(name);
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let x = 12;
let y = 20;
console.log(x + y);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
let name = "Della Peruta";
const name2 = "Giacomo";
let name2 = "Non Giacomo";  // Togliendo questa riga non ci saranno errori nella console
console.log(name2);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
console.log(x - 4);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*
let name1 = "john";
let name2 = " John";
console.log(name1 === name2); // False, corretto
console.log(name1.toLowerCase === name2.toLowerCase); // True, corretto
*/
