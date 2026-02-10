const readLine = require("readline-sync");

let input = readLine.question("Introduce un número del 0 al 10: "); 
let num = parseInt(input);

while (isNaN(num) || num < 0 || num > 10) {
    input = readLine.question("Introduce un número del 0 al 10: ");
    num = parseInt(input);
}

    const numerosEnLetras = [ "Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];

    console.log(numerosEnLetras[num]); 