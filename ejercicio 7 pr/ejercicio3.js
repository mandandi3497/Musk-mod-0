const readLine = require("readline-sync");
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function imprimirResultados(radio) {
    const circunferencia = calcularCircunferencia(radio);
    const area = calcularAreaCirculo (radio);
    console.log(`La circunferencia es ${circunferencia}`);
    console.log(`El área del círculo es ${area}`);
    }
    const input = readLine.question("Introduce el radio: ");
    const radio = parseFloat(input);

    if (isNaN(radio)) {
        console.log("No es un número");
    } else {
imprimirResultados (radio);
    } 