// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
// Interrompi il ciclo appena il nome è stato trovato.

let invitati = ["Mario", "Maccio", "Piero", "Marco", "Fabio", "Sergio", "Antonello"];

let domanda = prompt(`è in lista?`);

let accesso = false;

let i = 0;
while ( i < invitati.length ) {    

    if ( domanda == invitati[i] ){
        accesso = true;
    }

    i++;

    if (accesso == true){
        i = invitati.length+1;
        console.log(`ho capito ${domanda} prego!`);
        alert(`ho capito` + domanda + `prego!`);
    }

}

if (accesso == false){
    console.log(`Mi dispiace ${domanda} il suo nome non è presente nella lista!`);
    alert(`Mi dispiace` + domanda + `il suo nome non è presente nella lista!`);
}