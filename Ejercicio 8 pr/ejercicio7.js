let numeros = [];

for (let i = 0; i < 100000; i++) {
    numeros.push(Math.floor(Math.random() * 100000));
}

let inicio = Date.now();

function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let pivote = array[0];

    let menores = [];
    let mayores = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivote) {
            menores.push(array[i]);
        } else {
            mayores.push(array[i]);
        }
    
    }
        return quickSort(menores).concat(pivote, quickSort(mayores));
}

quickSort(numeros);

let fin = Date.now();

let tiempoSegundos = (fin - inicio) / 1000;

console.log(`El algoritmo quicksort ha tardado ${tiempoSegundos} segundos en ordenar 100000 elementos.`);