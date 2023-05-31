console.log('JS OK');


/************************* Es Email ****************************/


// Crea la lista di email

const permessi = ['cristoforocolombo@gmail.com' , 'supermario@gmail.com' , 'jonsnow@libero.it' , 'gandalfgrigio@hootmail.com']



// Chiedi all'utente la sua email e salvala

const email = prompt('Inserisci la tua email per accedere ' , 'jonsnow@libero.it').trim();



// Controlla se l'email inserita è presente nella lista

let autorizzato;
let message;

for (let i = 0; i < permessi.length; i++){

    let check = permessi[i];
    
    if (email === check){
        autorizzato = true;
        console.log(autorizzato);
    }

    check = permessi[i +1];
}

// Personalizza il messaggio

if (autorizzato === true) {
    messaggio = 'Sei nella lista, benvenuto!'
}
else {
    messaggio = 'Non sei nella lista, non hai il permesso di entrare!'
}

console.log(messaggio);
