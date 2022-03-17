// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// creo la costante N in cui chiedo un numero all utente
let N = parseInt(prompt("inserisci un numero"));

// creo un array vuota che deve contenere N array
let Narray = [];

// creo un ciclo che funziona fino a quando i < N ed a ogni ciclo incremento di 1
for ( i = 0; i < N ; i++ ) {
    
    // ad ogni ciclo creo una array tipo vuota
    let arrayTipo = [];
    
    // ciclo while fino a quando l'array tipo ha dentro numeri < 10
    while ( arrayTipo.length < 10 ) {

        // generatore di numeri random da 1 a 100
        arrayTipo.push(Math.floor(Math.random() * 100) + 1 );

    }
    
    // stampa degli array tipo singoli
    console.log(arrayTipo);

    // inserimento degli N array dentro ad una variabile
    Narray.push(arrayTipo);

}

// stampa finale delle N array
console.log(Narray);