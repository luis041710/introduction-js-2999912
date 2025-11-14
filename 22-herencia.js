// Herencia

class Product {
    constructor(productName = '', price){
        this.productName = productName;
        this.price = price;
    }

    // Metodos para formatear el texto
    formatProduct(){
    return `precio ${this.price}, nombre ${this.productName}`
    }
}

// Se crean los productos
const product1 = new Product('Marcador', 5000);
const product2 = new Product('Rule', 10000);
const product3 = new Product('Book', 7000);

// La impresión de los objetos
// console.log(product1.formatProduct());
// console.log(product2.formatProduct());
// console.log(product3.formatProduct());

// class Book{
//     constructor(bookName, price, isbn){
//         this.bookName = bookName;
//         this.price = price;
//         this.isbn = isbn;
//     }
// }

// const book1 = new Book('El perfume', 10000, 123456789);
// const book2 = new Book('Cien años de soledad', 25000, 555555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// console.log(book1);
// console.log(book2);
// console.log(book3);

// ==================================================================

// Herencia
// LA herencia permite que los objetos y clases reutilicen propiedades y métodos de otros

// class Book extends Product {
//     constructor(bookName, price, isbn){
//         super(bookName, price);
//         this.isbn = isbn;
//     }
//     formatProduct(){
//     return `El nombre del libro es ${this.productName} su precio es ${this.price} y su isbn es ${this.isbn}`;
//     }
// }

// const book1 = new Book('El perfume2', 9300, 123456789);
// const book2 = new Book('Cien años de soledad', 25000, 555555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());

// ===========================================================================
// class Book extends Product {
//     constructor(bookName, price, isbn){
//         super(bookName, price);
//         this.isbn = isbn;
//     }
//     formatProduct(){
//     return `${super.formatProduct()} y su isbn es ${this.isbn}`
//     }
// }

// const book1 = new Book('El perfume2', 9300, 123456789);
// const book2 = new Book('Cien años de soledad', 25000, 555555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());

// =============================================================
// Ejercicio

class Medicine extends Product{
    constructor(productName, price, amount){
        super('', price);
        this.amount = amount;
        this.productName = productName;
    }
    formatProduct(){
    return `${super.formatProduct()} cantidad ${this.amount}`
    }
}

// Se crean los productos
const medicine1 = new Medicine('Advil', 5000, 10);
const medicine2 = new Medicine('Dolex', 10000, 7);
const medicine3 = new Medicine('Acetaminofen', 7000, 15);

console.log(medicine1.formatProduct());
console.log(medicine2.formatProduct());
console.log(medicine3.formatProduct());

