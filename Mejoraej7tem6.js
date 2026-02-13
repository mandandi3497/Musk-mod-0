const readLine = require("readline-sync");


function pedirAltura() {
    let altura = parseInt(readLine.question("Introduce la altura del triángulo: "));
    while (isNaN(altura) || altura <= 0) {
        console.log("Por favor, introduce un número positivo.");
        altura = parseInt(readLine.question("Introduce la altura del triángulo: "));
    }
    return altura;
}


function dibujarTrianguloLleno(altura) {
    console.log("\nTriángulo lleno:");
    for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= altura - i; j++) {
            linea += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            linea += "*";
        }
        console.log(linea);
    }
}


function dibujarTrianguloHueco(altura) {
    console.log("\nTriángulo hueco:");
    for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= altura - i; j++) {
            linea += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (i === altura || k === 1 || k === 2 * i - 1) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}


function main() {
    const altura = pedirAltura();
    dibujarTrianguloLleno(altura);
    dibujarTrianguloHueco(altura);
}

main();
