const readLine = require ("readline-sync");
const texto = readLine.question("Introduce un texto: ");

function palabrasRepetidas(texto) {
    let palabras = texto.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ");

    let contador = new Map(); 

    for (let palabra of palabras) {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
 
        }else{
            contador.set(palabra, 1);
        }
    }

    let repetidas = [];

    for (let [palabra, cantidad] of contador) { 
        if (cantidad > 1) {
            repetidas.push(palabra);
        }
    }

    return repetidas;
}

const resultado = palabrasRepetidas(texto);

if (resultado.length > 0) {
    console.log("Se repiten las siguientes palabras:", resultado.join(", "));
} else {
    console.log("No hay palabras repetidas.");
}