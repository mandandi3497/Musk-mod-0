const readLine=require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10)+1;
let intentos= 0;
let adivinanza=0; 

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

while (adivinanza !== randomNumber) { 
    const input = readLine.question("Adivina: ");
adivinanza = parseInt(input); 

if (isNaN(adivinanza)) {
    console.log("Eso no es un número. Intenta de nuevo. "); 
    continue; 
}

intentos++; 

if (adivinanza === randomNumber) {
    console.log (`¡Correcto! Has necesitado ${intentos} intentos `);
}else{ 
    console.log("¡Fallo! Intenta de nuevo.");
 }
 } 


