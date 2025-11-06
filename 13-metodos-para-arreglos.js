// Metodos para arrelgos

const numbers = [2, 5, 8, 23, 56];

// Agregar elementos a mi arreglo, pero se requiere conocer la longitud del arreglo.
numbers[5] = 100;
console.table(numbers);

// El método push agrega elementos al final del arreglo
numbers.push(1000, 500)
// Método para agregar elementos al inicio del arreglo
numbers.unshift(-2, -1, 0);
// Elimina el ultimo elemento del arreglo
numbers.pop();
// Elimina el primer elemento del arreglo
numbers.shift();
// Método splice elimina todos los elementos a partir del índice asignado
numbers.splice(3);
console.table(numbers);

const fruits = ["Banano", "Pera", "Manzana", "Mango"];

fruits.push("Uva");
fruits.unshift("Sandia");
fruits.splice(3);
console.table(fruits);