// Creiamo un finto biglietto del treno con:
// eta passeggero



// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var btnGenera = document.getElementById('calcola');
console.log(btnGenera);

btnGenera.addEventListener('click', 
function() {
    // valore '.value' variabili
    var nome = document.getElementById('nome').value;
    document.getElementById('nome-passeggero').innerHTML = nome;
    
    // rendiamo visibile il 'biglietto'     'display block'
    var biglietto = document.getElementById('biglietto');
    biglietto.style.display = 'block';
    
    // Numero carrozza
    var numeroCarrozza = Math.floor(Math.random()* 12) + 1;
    document.getElementById('numero-carrozza').innerHTML = numeroCarrozza;
    
    // Codice treno (numero casuale tra 90000 e 100000 escluso)
    var codiceTreno = Math.floor(Math.random()* 10000) + 90000;
    document.getElementById('codice-cp').innerHTML = codiceTreno;
    
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
   
    // Prezzo calcolato
    var ticket = (km * 0.21);
    
    if (eta == 'minorenne')
    {
        ticket = ticket * 0.8;
    }
    else if (eta == 'over65') 
    {
        ticket = ticket * 0.6;
    }
    ticket = ticket.toFixed(2);
    document.getElementById('costo-biglietto').innerHTML = ticket;
}
)

var btnAnnulla = document.getElementById('annulla');
console.log(btnAnnulla);

btnAnnulla.addEventListener('click', 
function() {
    // inseriamo stringa vuota per cancellare i dati messi
    var nome = document.getElementById('nome').value = '';
    var km = document.getElementById('km').value = '';
    var eta = document.getElementById('eta').value = '';
    
    // rendiamo invisibile il 'biglietto'    'display none'
    var biglietto = document.getElementById('biglietto');
    biglietto.style.display = 'none';
}
)