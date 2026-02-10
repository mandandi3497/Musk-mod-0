const readLine = require("readline-sync");

const input = readLine.question("Introduce la altura del triangulo: ");

const altura = parseInt(input);

if (isNaN(altura)) {
    console.log("No es un número");
} else{
    for (let i= 1; i <= altura; i++) {
        let línea = ""; 

        for (let j= 1; j <= altura - i; j++) {
            línea= línea + " "; 
        }

        for (let k = 1; k<= (2 * i - 1); k++) {
            línea=línea + "*";
        }
        
        console.log(línea);
    }
}
