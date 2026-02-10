const readLine = require("readline-sync");

function calcularSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
suma += numeros [i]; 
    }
    return suma;
}

function calcularMedia(numeros) {
    const suma = calcularSuma(numeros);
    return suma / numeros.length;
}

function imprimirResultados(numeros) {
const suma = calcularSuma(numeros);
const media = calcularMedia(numeros);
console.log(`La suma es ${suma}`);
console.log(`La media aritmética es ${media}`);
}

const input = readLine.question("Introduce una lista de números: ");
const numeros = input.split(",").map(num => parseFloat(num.trim()));
if (numeros.some(isNaN)) { 
    console.log("Alguno de los valores introducidos no es un número válido");
} else { 
    imprimirResultados(numeros);
}