const readLine = require("readline-sync");

function esPalindromo(texto){

    const limpio = texto.toLowerCase().split(" ").join("");

    let invertido = "";

    for (let i = limpio.length -  1 ; i >= 0; i--){
        invertido += limpio[i];
    }

    return limpio === invertido; 
}

function imprimirResultado(texto){
    if (esPalindromo(texto)) {
        console.log("Sí es palíndromo"); 
    } else {
        console.log("No es palíndromo"); 
    }
    }

    const input = readLine.question("Introduce un texto: ");
    imprimirResultado(input); 