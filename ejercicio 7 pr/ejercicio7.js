const readLine = require("readline-sync");

function crearMatrizTexto(texto) {
    const palabras = texto.split(" "); 
    const matriz= [];
let fila = [];

for (let i = 0; i < palabras.length; i++) {
    fila.push(palabras[i]); 

    if (fila.length === 5) {
        matriz.push(fila);
        fila = [];
    }
    } 
if (fila.length > 0) {
    matriz.push(fila);
}

return matriz;
}

const input = readLine.question("Introduce un texto: "); 

const matriz = crearMatrizTexto(input);
console.log(matriz); 