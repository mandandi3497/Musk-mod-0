const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");
const num = parseInt(input);

if (isNaN(num)){
    console.log("No es un número");
}else{
    let resultado= "El número es ";

    if (num >= 0) {
        resultado= resultado + "positivo";
    }else {
        resultado = resultado + "negativo";
    }
if (num % 2 === 0 ) {
    resultado = resultado + " y par";
}else{
    resultado = resultado + " y impar";
}

console.log (resultado); 
}