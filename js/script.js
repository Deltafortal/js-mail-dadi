console.log('JS OK');

// Prendi nel DOM gli elementi necessari


// Genera un numero random da 1 a 6 per l'utente

const dadoUtente = Math.floor(Math.random() * 6 + 1);
const dadoCPU = Math.floor(Math.random() * 6 + 1);

if (dadoUtente === dadoCPU) {
    console.log('Pareggio')
}
else if (dadoUtente > dadoCPU) {
    console.log ('Hai vinto')
}
else {
    console.log ('Ha vinto il computer')
}

console.log('Il tuo risultato è ' + dadoUtente);
console.log('Il risultato del computer è ' + dadoCPU);