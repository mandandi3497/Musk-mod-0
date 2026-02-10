const readLine = require("readline-sync");

const input = readLine.question("Introduce un año: ");

const num = parseInt(input);

if (isNaN(num)) {
    console.log("No es un número");
} else if (num % 400 === 0) {
        console.log ("El año es bisiesto");
    } else if (num % 100 === 0) {
        console.log ("El año no es bisiesto");
     } else if (num % 4 === 0) {
            console.log ("El año es bisiesto");
        } else {
            console.log ("El año no es bisiesto"); 
}