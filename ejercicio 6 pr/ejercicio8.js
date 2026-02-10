const readLine = require("readline-sync");

const altura= parseInt (readLine.question("Introduce la altura del rectángulo: "));
const anchura= parseInt (readLine.question("Introduce la anchura del rectángulo: "));


if (isNaN(altura) || isNaN (anchura)) {
    console.log("No es un número");

} else {

    for (let i=1 ; i<= altura; i++) {
        let línea= "";

        for (let j=1 ; j<= anchura; j++) {
        if (i=== 1 || i === altura || j === 1 || j=== anchura) {
            línea = línea + "*"; 
        }else{ 
            línea = línea + " ";
        }
        }
        console.log(línea);
    }
}
