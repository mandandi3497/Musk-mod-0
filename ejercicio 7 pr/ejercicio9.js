const readLine = require("readline-sync");

function crearMatrizProducto(n) {
    const matriz = [];

    for (let i = 0; i < n; i++) {
const fila = [];

for (let j = 0; j < n; j++) {
    fila.push(i * j); 
}

matriz.push(fila); 
    }

    return matriz;
} 

const input = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
const n = parseInt(input);

if (isNaN(n) || n <= 0) {
    console.log("No es un número válido.");
} else {
    const matriz = crearMatrizProducto(n);
    console.log(matriz); 
}