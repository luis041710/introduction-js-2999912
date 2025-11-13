// Metodos para arreglos

// Arreglo de meses
const months = ['december', 'november', 'january', 'february'];

// Crear un arreglo de objetos para un carrito de compras

const shoppingCart = [
    {productName : 'tablet', price : 800},
    {productName : 'mouse', price : 50},
    {productName : 'Smart TV', price : 1500},
    {productName : 'Computer', price : 2000},
    {productName : 'play station', price : 1800},
    {productName : 'X-box', price : 1800},
    {productName : 'Nitendo Wii', price : 900},
    {productName : 'KeyBoard', price : 400},
    {productName : 'Sound-bar', price : 700},
]
// Recorre el arreglo y muestra todos los elementos 
// months.forEach(function(month){
//     console.log(month);
// })

// months.forEach(function(month){
//     if(month == 'january'){
//         console.log('january si existe');
//     }else{
//         console.log('el mes no existe');
//     }
//     console.log(month);
// })

// const month = months.includes('december');
// console.log(month);

// El medoto Include no funciona bien cuando tenemos objetos dentro del arreglo
// const product = shoppingCart.includes('mouse');
// console.log(product);

// const result = shoppingCart.some(function(product){
//     return product.productName === 'tablet';
// })

// console.log(result);

// const result1 = shoppingCart.some(function(product){
//     return product.price === 1500;
// })

// console.log(result1);

// const result = shoppingCart.some(product => product.productName === 'tablet');

// El metodo reduce nos srive para realizar la sumatoria de los precios
// const result = shoppingCart.reduce(function(total, product){
//     return total + product.price
// }, 0)

// console.log(result);

// const result1 = shoppingCart.reduce((total, product) =>  total + product.price, 0);

// metodo filter

// const result = shoppingCart.filter(function(product){
//     return product.price < 100;
// })

// const result = shoppingCart.filter(product => product.price > 100);
// console.log(result);

// const result = shoppingCart.filter(product => product.productName === 'Sound-bar');
// console.log(result);

// const result = shoppingCart.filter(product => product.productName == 'Sound-bar');
// console.log(result);

const result = shoppingCart.filter(product => product.productName != 'Sound-bar');
console.log(result);