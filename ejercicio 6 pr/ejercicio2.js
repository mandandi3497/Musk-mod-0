const readLine = require("readline-sync");

const input1 = readLine.question("Introduce un número: ");
const input2 = readLine.question("Introduce un número: ");
const input3 = readLine.question("Introduce un número: ");

const num1 = parseInt(input1);
const num2 = parseInt (input2);
const num3 = parseInt (input3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
console.log ("Alguno de los valores no es un número");
} else {

    if (num1 % 2===0 || num2 % 2===0 || num3 % 2===0){
 console.log ("Al menos un número es par"); 
    } else {
   console.log ("Ningún número es par"); 
}
}