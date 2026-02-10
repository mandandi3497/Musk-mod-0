const readLine = require ("readline-sync");

let palabra1 = readLine.question("Introduce una palabra: ");
let palabra2 = readLine.question("Introduce una palabra: ");

function crearMapa(cadena) {
    let mapa = new Map();

    for (let caracter of cadena) {
        if (mapa.has(caracter)) {
            mapa.set(caracter, mapa.get(caracter) + 1);
        } else {
            mapa.set(caracter, 1); 
        }
    }

    return mapa; 
}

function sonAnagramas(cadena1, cadena2) {

    if (cadena1.length !== cadena2.length) {
        return false;
    }

    let mapa1 = crearMapa(cadena1);
    let mapa2 = crearMapa(cadena2);

    for (let [caracter, cantidad] of mapa1) {
        if (mapa2.get(caracter) !== cantidad) {
            return false;
        }
    }
    
    return true;
}

if (sonAnagramas(palabra1, palabra2)) {
    console.log("Las palabras son anagramas."); 
} else {
    console.log("Las palabras no son anagramas."); 
}
