// Objetos en JS

const productName = "Multimetro";
const price = 150;
const available = true;

console.log(typeof productName);
console.log(price);
console.log(available);

const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}
console.log(typeof product);

// Acceder a las propiedades de un objeto

console.log("The product name is: " +product.productName);
console.log("The price product is: " +product.price);
console.log("Is available product name is: " +product.available);

product.image = "multimetro.png"

delete product.price;

console.log(product)

