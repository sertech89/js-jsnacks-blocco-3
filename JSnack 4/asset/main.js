// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
// Interrompi il ciclo appena il nome è stato trovato.

let invitati = ["Baudo", "Alzheimer", "Pivetta", "Brazorf", "Fatarni", "Marinalli", "Cisafrulli"];

let domanda = prompt(`mi scusi, lei è il Dottor?`);

let accesso = false;

let i = 0;
while ( i < invitati.length ) {    

    if ( domanda == invitati[i] ){
        accesso = true;
    }

    i++;

    if (accesso == true){
        i = invitati.length+1;
        console.log(`lo ben so Dottor ${domanda} entri pure!`);
        alert(`lo ben so Dottor ` + domanda + ` entri pure!`);
    }

}

if (accesso == false){
    console.log(`Dottor ${domanda} vada via o la opero!`);
    alert(`Dottor ` + domanda + ` vada via o la opero!`);
}