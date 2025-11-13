// // Metodos para arrelgos

// const numbers = [2, 5, 8, 23, 56];

// // Agregar elementos a mi arreglo, pero se requiere conocer la longitud del arreglo.
// numbers[5] = 100;
// console.table(numbers);

// // El método push agrega elementos al final del arreglo
// numbers.push(1000, 500)
// // Método para agregar elementos al inicio del arreglo
// numbers.unshift(-2, -1, 0);
// // Elimina el ultimo elemento del arreglo
// numbers.pop();
// // Elimina el primer elemento del arreglo
// numbers.shift();
// // Método splice elimina todos los elementos a partir del índice asignado
// numbers.splice(3);
// console.table(numbers);

// const fruits = ["Banano", "Pera", "Manzana", "Mango"];

// fruits.push("Uva");
// fruits.unshift("Sandia");
// fruits.splice(3);
// console.table(fruits);

// // Recorrer un arreglo con FOR
// const colors = ['Red', 'Blue', 'Green'];
// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// // Recorrer un arreglo con foreach
// const animals = ['tiger', 'cat', 'dog', 'Hors'];
// animals.forEach((animals) => {
//     console.log(animal);
// })

// Map para transformar
const numbers = [1, 2, 3, 4];
const squeares = numbers.map(num => num * num);
console.log(squeares)