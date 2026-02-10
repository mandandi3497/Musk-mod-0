const readLine = require("readline-sync");

function crearMatrizCuadrada(n) {
    const matriz = [];
    let contador = 1; 

    for (let i = 0; i < n; i++) {
const fila = [];

for (let j = 0 ; j < n; j++) {
    fila.push(contador);
    contador++;
}

matriz.push(fila);
    }
    return matriz;
}

const input = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
const n = parseInt(input);

if (isNaN(n) || n <= 0) {
    console.log ("No es un número válido");
} else {
    const matriz = crearMatrizCuadrada (n); 
    console.log(matriz);
} 
