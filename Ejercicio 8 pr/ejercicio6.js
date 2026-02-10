let numeros = [];
for (let i = 0; i < 100000; i++) {
    numeros.push(Math.floor(Math.random() * 100000));
}

let inicio = Date.now(); 

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
        return array;
}

bubbleSort(numeros);

let fin = Date.now();

let tiempoSegundos = (fin - inicio) / 1000;
console.log(`El algoritmo bubble sort ha tardado ${tiempoSegundos} segundos en ordenar ${numeros.length} elementos.`);
