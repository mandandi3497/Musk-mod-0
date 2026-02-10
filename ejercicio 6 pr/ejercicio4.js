const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);

if (isNaN(num)) {
    console.log("No es un número");
} else {
    for (let i = 1; i <= 10; i++){
        console.log (num + " x " + i + " = " + (num * i));
    }
    };
    