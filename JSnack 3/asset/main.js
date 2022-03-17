// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

let arrayNum = [];
let somma = 0;

let i = 0;
while ( i < 5 ) {
    
    arrayNum[i] = parseInt(prompt("inserisci un numero please!"));

    console.log("numero da te inserito: " + arrayNum);

    somma += arrayNum[i];
    
    i++;

}

console.log("Somma totale: " + somma);
