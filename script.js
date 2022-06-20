// ---- Esercizi 20/06

// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

//Esercizio 1

function sum(num1, num2) {
  return console.log(num1 + num2);
}
//console.log(sum(2, 3)); //ci ritorna il risultato dei due parametri

//Esercizio 2
function sum2(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Non hai inserito un numero valido");
  }
  return console.log(num1 + num2);
}

//con typeof vado a verificare che i parametri siano dei numeri
//e SE uno dei parametri non è un numero valido, uscirà "Non hai inserito un numero valido"

//Esercizio 3
function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero valido");
  }
  return console.log(num1 * num2);
}

function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.info("Non hai inserito un numero valido");
  }
  return console.log(num1 - num2);
}

function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.info("Non hai inserito un numero valido");
  } else if (num1 === 0 || num2 === 0) {
    console.error("Non puoi dividere per 0");
  } else {
    return console.log(num1 / num2);
  }
}
//qui è la stessa cosa del punto n°2 ma SE num2 è = 0, uscirà "Non puoi dividere per 0"
// else fa l'operazione

//Esericizio 4
function calculator(operation, num1, num2) {
  operation(num1, num2);
}

//richiamo la funzione calculator dove a sua volta chiama le funzioni delle operazioni rispettando gli if
calculator(sum2, 3, 4);
calculator(div, 6, 0); //difatti qui uscirà che non posso dividere per 0
calculator(sub, 6, "l"); //mentre qui che non ho inserito un numero valido
calculator(mult, 6, 7);
