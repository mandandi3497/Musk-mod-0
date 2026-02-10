const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);

if (isNaN(num) || num<0){
    console.log("No has introducido un número válido");
}else{
    let factorial=1;
    for (let i=num; i>1; i--){
        factorial= factorial*i;
    }
    console.log (`El factorial de ${num} es ${factorial}`);
}
