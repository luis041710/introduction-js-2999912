// Unir dos objetos
const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}

Object.freeze(product);

// Objeto que almecena medidas
const measurements = {
    weight : "1Kg",
    measurement : "15cm",
}

const features = {
    color : "red",
    brand : "Fluke",
}

// Rest operator para unir varios objetos
const newProduct = {...product, ...measurements, ...features}
console.log(product);
console.table(newProduct);