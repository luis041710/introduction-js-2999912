// Funciones parámetros y argumentos

// Los parámetros se pasan en los parentesis de la función
// function add(num1, num2){//Estos son los paramentros
//     console.log(num1+num2);
// };

// add(7,10); //Estos son los argumentos y solo actuan en tiempo de ejecución
// add(4,10); //Estos son los argumentos y solo actuan en tiempo de ejecución
// add(8,154); //Estos son los argumentos y solo actuan en tiempo de ejecución
// add(6,10); //Estos son los argumentos y solo actuan en tiempo de ejecución
// add(7,98); //Estos son los argumentos y solo actuan en tiempo de ejecución

// const add2 = function(num3, num4){
//     const suma = num3 + num4;
//     return (suma);
// };

// add2(5, 1);

// const result = add2(5, 1) + 8;
// console.log(result);

// Función con valores por defecto
function add3(num5 = 9, num6 = 3){
    console.log(num5+num6);
}
add3()