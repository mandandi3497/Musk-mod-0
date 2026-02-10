const readLine = require("readline-sync");

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function imprimirCircunferencia(radio) {
    const circunferencia = calcularCircunferencia(radio);
    console.log(`La circunferencia es ${circunferencia}`);
    }

    const input = readLine.question("Introduce el radio: ");
    const radio = parseFloat(input);

    if (isNaN(radio)) {
        console.log("No es un número");
    } else {
        imprimirCircunferencia(radio);
    }