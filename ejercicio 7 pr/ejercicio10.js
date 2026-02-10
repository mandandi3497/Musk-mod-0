function trasponerMatriz(matriz) {
    const resultado = [];

    for (let i = 0; i < matriz[0].length; i++) {
        const fila = []; 

        for (let j = 0; j < matriz.length; j++) {
            fila.push(matriz[j][i]);
        }

        resultado.push(fila);
    }

    return resultado;
}

const matrizOriginal = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

console.log("Matriz de la entrada");
console.log(matrizOriginal);

const matrizTraspuesta = trasponerMatriz(matrizOriginal);

console.log("Matriz traspuesta"); 
console.log(matrizTraspuesta);

