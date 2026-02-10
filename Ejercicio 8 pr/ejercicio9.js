const readLine = require("readline-sync");
let texto = readLine.question("Introduce un texto: ");

function parentesisBalanceados(texto) {

    let pila = [];

    for (let caracter of texto) {

        if (caracter === "(") {
            pila.push(caracter); 
        }
        else if (caracter ===")") {
            if (pila.length === 0) {
                return false;
            }
            pila.pop(); 
        }
}

return pila.length === 0;
}

if (parentesisBalanceados(texto)) {
    console.log("Están balanceados.");
} else {
    console.log("No están balanceados.");
}