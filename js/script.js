// 1. Chiedi all'utente il cognome.

// 2. Inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'.

// 3. Stampa la lista ordinata alfabeticamente.

// 4. Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.

//--------------------- Lista cognomi ----------------------

var cognomeUtente = prompt("Dimmi il tuo cognome!");
console.log("Il tuo cognome è: ", cognomeUtente);

var cognomi = ["Verdi", "Rossi", "Bianchi", "Gialli", "Neri"];
console.log("La lista dei cognomi è: ", cognomi);

cognomi.push(cognomeUtente);
console.log("Aggiungo ", cognomeUtente, "alla lista dei cognomi: ",  cognomi);

cognomi.sort();
console.log("Ordino i cognomi alfabeticamente: ", cognomi);

// Soluzione con ciclo "While":

// var i = 0;

// while (i < cognomi.length) {
//     console.log((i + 1) + " E' la posizione di: " + (cognomi[i]));
    
//     document.getElementById("lista_cognomi").innerHTML += "<li>" + (i + 1) + " E' la posizione di: " + (cognomi[i]) + "</li>"; 

//     i++;
// }

// Soluzione con ciclo "For":

for (var i = 0; i < cognomi.length; i++) {
    console.log((i + 1) + " E' la posizione di: " + (cognomi[i]));
    
    document.getElementById("lista_cognomi").innerHTML += "<li>" + (i + 1) + " E' la posizione di: " + (cognomi[i]) + "</li>"; 
}



