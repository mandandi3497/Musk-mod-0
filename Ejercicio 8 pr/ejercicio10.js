const readLine = require("readline-sync");

let secuencia = readLine.question("Introduce una secuencia: ");

function secuenciaValida(texto) {

    let pila = [];

    let parejas = new Map (); 
    parejas.set(")", "(");
    parejas.set("]", "["); 
    parejas.set("}", "{"); 

    for (let caracter of texto) {

        if (caracter ==="(" || caracter === "[" || caracter === "{"){
        pila.push(caracter); 
        }
    
        else if (caracter === ")" || caracter === "]" || caracter === "}") {
        
            if (pila.length === 0) {
                return false; 
            }
            let ultimo = pila.pop(); 

            if (ultimo !== parejas.get(caracter)) {
            return false; 
            }
       }    
    }

    return pila.length === 0; 
}

if (secuenciaValida(secuencia)) {
    console.log("Secuencia correcta.");
} else {
    console.log("Secuencia incorrecta.");
}
