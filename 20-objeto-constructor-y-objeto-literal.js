// El objeto literal es la forma directa de crear un objeto usando {}y pares llave y valor

// const person = {
//     userName : "Peter",
// };

// Objeto constructor crea objetos mediante una funcion o clase new
// 
// const person1 = new person("Maria", 25, true);

// ==================================================================
// Objeto constructor
function Product(productName, price){
    this.productName = productName;
    this.price = price;
}

const product = new Product('Monitor curvo de 24"', 600000);
const product1 = new Product('Mouse', 600000);
const product2 = new Product('Keyboard', 600000);

console.log(product);
console.log(product1);
console.log(product2);

// =====================================================================

// Prototype: el prototipo es como un molde o modelo base
// Cuando se crean muchos objetos que se paarecen, No se quiere escribir lo mismo muchas veces

function Car(brand, color){
    this.color = color;
    this.brand = brand;
}

// Se define una funcion común para todos los carros
// Car.prototype.slowDown = function(){
//     console.log(this.brand + ' esta frenando');
// }

// const car1 = new Car('Kia', 'gray');
// const car2 = new Car('Toyota', 'white');

// car1.slowDown();
// car2.slowDown();

// Objeto persona
// function Person(userName, age, email){
//     this.userName = userName;
//     this.age = age;
//     this.email = email;
// }

// Person.prototype.textFormat = function(){
//     console.log('El nombre de la persona es ' + this.userName + ' y tiene ' + this.age + ' años y su correo electronico es ' +this.email);
// }

// const person1 = new Person('Luis', 21, 'Luisdavid@gmail.com');
// const person2 = new Person('Mateo', 18, 'mateoossa@gmail.com');
// const person3 = new Person('Federico', 24, 'fede123@gmail.com');

// person1.textFormat();
// person2.textFormat();
// person3.textFormat();

// ==========================================================================
// POO

