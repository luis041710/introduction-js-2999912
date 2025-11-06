// Metodos de objetos

const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}

// Con el metodo o funcion freeze bloqueamos el objeto para que No se puedan agregar, eliminar, modificar las propiedades
// Object.freeze(product);

// Eliminar propiedad
// delete product.price;
// Agregar propiedad
// product.color = "Yellow";
// product.quantity = 10;
// Modificar propiedad
// product.price = 500;

// El metodo seal No permite eliminar ni agregar pero si permite modificar las propiedades del objeto.
Object.seal(product);
// Eliminar propiedad
delete product.price;

// Agregar propiedad
product.color = "Yellow";

// Modificar propiedad
product.price = 500;

console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));

