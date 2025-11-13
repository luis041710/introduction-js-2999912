// funciones en js
// Hoisting
// Es el comportamiento por defecto en el que el interprete mueve las declaraciones (varibales y funciones), a la parte superior de su ambito(scope), antes de ejecutar el codigo.

// Declaracion de una función

// function add(){
//     console.log(10 + 20);
// }

// add();

// // La expresión de la funcion

// const add2 = function(){
//     console.log(30+40);
// }
// add2();

// Función IIFE, ésta función se invoca así misma
// Son útiles para proteger variables, para que no se mezclen con las variables de otros archivos

// (function(){
//     console.log('Esto es una funcion IIFE');
// })();

// console.log(client);

// Diferencia entre función y método

const num1 = 20;
const num2 = '10';

console.log(num1);
console.log(num2);

// Una función que convierte string a número
console.log(parseInt(num2));
console.log(num2);

// Un método siempre colocamos una variable y despues un punto.
// Método que convierte de numero a string
console.log(num1.toString());