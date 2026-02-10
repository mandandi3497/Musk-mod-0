const readLine = require("readline-sync");

let palabra = readLine.question("Introduce una palabra: ");

function invertirPalabra(palabra) {

    let pila = [];

    for (let letra of palabra) {
        pila.push(letra);
    }

    let invertida = "";

    while (pila.length > 0) {
        invertida += pila.pop();
    }

    return invertida;

}

let resultado = invertirPalabra(palabra);

console.log("La palabra invertida es:", resultado);
