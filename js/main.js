// Creiamo un finto biglietto del treno con:
// eta passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var btnGenera = document.getElementById('calcola');
console.log(btnGenera);

btnGenera.addEventListener('click', 
    function() {
        // valore '.value' variabili
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var eta = document.getElementById('eta').value;

        // rendiamo visibile il 'biglietto'     'display block'
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = 'block';
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