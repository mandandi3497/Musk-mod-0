const readLine = require ("readline-sync");

let input = readLine.question("Introduce un número: ");
let numero = parseInt(input); 

function esPrimo(n) {
    
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false; 
        }
    }

    return true;
}

if (esPrimo(numero)) {
    console.log(numero + " es primo.");
} else {
    console.log(numero + " no es primo.");
}

