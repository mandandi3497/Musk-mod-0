const readLine = require("readline-sync");

function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

function imprimirAreaCirculo(radio) {
  const area = calcularAreaCirculo(radio);
  console.log(`El área del círculo es ${area}`);
}

const input = readLine.question("Introduce el radio: ");
const radio = parseFloat(input);

if (isNaN(radio)) {
  console.log("No es un número");
} else {
  imprimirAreaCirculo(radio);
}
