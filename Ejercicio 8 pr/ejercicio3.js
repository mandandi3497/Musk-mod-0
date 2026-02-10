const readLine = require ("readline-sync");
let texto = readLine.question("Introduce un texto: ");
function frecuenciaCaracteres(cadena) {

    let mapa = new Map();
    for (let caracter of cadena) {
        if (mapa.has(caracter)) {
            mapa.set(caracter, mapa.get(caracter) + 1);
        
        } else {

            mapa.set(caracter, 1);

        }
    }

    return mapa;

}

    let resultado = frecuenciaCaracteres(texto); 

    console.log("Mapa de frecuencias:");
    console.log(resultado);