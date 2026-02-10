const readLine = require("readline-sync");

let texto = readLine.question("Introduce una palabra: ");

texto = texto.toLowerCase();

let contador= 0;

for (let i = 0; i < texto.length; i++){
 if (texto[i] === "a" || texto [i] === "e" || texto [i]=== "i" || texto [i]=== "o" || texto [i]=== "u"){
    contador++;
 }
}

console.log ("La cantidad de vocales es: " + contador); 