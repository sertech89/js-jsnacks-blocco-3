// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// fino a quando la somma degli elementi è minore di 50.

// creo array vuota
let array = [];
console.log(array);

// creo la variabile somma vuota a zero
let somma = 0;
console.log(somma);

// ciclo while che funziona fino a che somma è inferiore a 50
while (somma < 50) {

    // prompt per chiedere a utente di inserire numero
    let numeroUtente = parseInt(prompt("inserisci un numero"));
    console.log(numeroUtente);

    // aggiungo il numero chiesto nell array vuoto
    array.push(numeroUtente);
    console.log(array);

    // sommo tutti i numeri chiesti fino a che non supera il 50
    somma += numeroUtente;

}

// stampa del valore finale
console.log(somma);

