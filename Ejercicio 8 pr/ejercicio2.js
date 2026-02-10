const readLine = require ("readline-sync");

let input1 = readLine.question("Array 1: ")
let array1 = input1.split(",").map(Number);

let input2 = readLine.question("Array 2: ");
let array2 = input2.split(",").map(Number);

function diferenciaArrays(array1, array2) {
    let conjunto2 = new Set(array2);
    let resultado = [];
    
    for (let numero of array1) {

        if (!conjunto2.has(numero)) {
            resultado.push(numero); 
        
        }
    }
    return resultado;
}

let diferencia = diferenciaArrays(array1, array2);

console.log("La diferencia de ambos conjuntos es:", diferencia);
