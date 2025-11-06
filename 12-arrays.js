// Arreglos de numeros
// const numbers = [2, 5, 8, 23, 56];
// console.table(typeof numbers);

// Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase
// const months = new Array ("May", "January", "July", "June");
// console.table(typeof months);

// Los arreglos en JS aceptan todos los tipos de datos del lenguaje
const userName = "Edwar"
const myArray = ["Hello", userName, 42, true, false, null, undefined, {lastName: "Velásquez", myJob : "Instructor"}, [3172293, 2999912, 3147206]];

console.table(myArray);
// Consultar el valor del elemento y su tipo
console.log(typeof myArray[2]);

// Método length para conocer la longitud de un arreglo
console.log("Edwar tu arreglo tiene: " +myArray.length + " elementos");

// ==============================================================================

const numbers = [2, 5, 8, 23, 56];
// Iterador con forEach
numbers.forEach(function(number){
    console.table(number);
})

const months = new Array ("May", "January", "July", "June");
months.forEach(function(month){
    console.table(month);
})