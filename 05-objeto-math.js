//Objeto Math

let result;

result = Math.PI;
//Redondea al entero mas cercano
result = Math.round(2.49)
//Redonde hacia arriba
result = Math.ceil(2.01);
//Redonde hacia abajo
result = Math.floor(2.1);
//Raiz cuadrada
result = Math.sqrt(144);
//Absoluto
result = Math.abs(-115);
//Muestra el minimo
result = Math.min(12,14,3,78);
//Muestra el maximo
result = Math.max(12,14,3,78);
//Numero aleatorio
result = Math.random()
//Numero aleatorio entero
result = Math.floor(Math.random()*1000);


console.log(result);

//Operaciones matematicas
let sum;

num1 = Math.floor(Math.random()*1000)
num2 = Math.floor(Math.random()*1000)

sum = num1 + num2;
rest = num1 - num2;
multiplication = num1 * num2;
division = num1 / num2;

console.log(sum);
console.log(rest);
console.log(multiplication);
console.log(division);