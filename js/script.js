/* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.*/

var studente = {
  nome : "francesca",
  cognome : "lai",
  eta : 30
};

for (var i in studente) {
  console.log(i + " " + studente[i]);
}


/* 2. Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.*/

var arrayStudenti = [
  {
    nome : "francesca",
    cognome : "lai",
    eta : 30
  },
  {
    nome : "martina",
    cognome : "bianchi",
    eta : 27
  },
  {
    nome : "federica",
    cognome : "rossi",
    eta : 32
  },
];

for (var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + " " + arrayStudenti[i].eta);
}

/* 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

var nuovoStudente = {
  nome : null,
  cognome : null,
  eta : null
};

nuovoStudente.nome = prompt("Inserisci il tuo nome");
nuovoStudente.cognome = prompt("Inserisci il tuo cognome");
nuovoStudente.eta = prompt("Inserisci la tua età");

arrayStudenti.push(nuovoStudente);
console.log(nuovoStudente.nome + " " + nuovoStudente.cognome + " " + nuovoStudente.eta);
