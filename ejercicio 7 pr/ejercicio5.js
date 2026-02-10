const readLine = require("readline-sync");

function encontrarRepetidos(array) {
    const repetidos = [];

for (let i = 0; i < array.length; i++) {
for (let j = i + 1; j < array.length; j++) {
    if (array [i] === array[j] && !repetidos.includes(array[i])) {
        repetidos.push(array[i]);
    }
    }
}
return repetidos; 
}
function imprimirResultados(array) {
    const repetidos = encontrarRepetidos(array);
    
    if (repetidos.length === 0) {
        console.log("Todos los elementos son únicos");
    } else {
        console.log("Los elementos repetidos son " + repetidos.join(","));
        }
    }
    
    const input = readLine.question("Introduce una lista de elementos: ");
    const elementos = input.split(",").map(e => e.trim());
imprimirResultados(elementos);
