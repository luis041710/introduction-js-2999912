//string o cadena de texto

const userName = "Carlos";
const name1 = 'Edwar';

console.log(typeof userName);
console.log(userName);

//Dos formas no tan comunes
const userName2 = String("Vero");
//Creamos una variable, mediante el constructor, instanciando a partir de la palabra new.
//Instanciar, es el proceso mediante el cual yo creo un objeto a partir de una clase
const userName4 = new String("Vero");

console.log(userName2);
console.log(typeof userName4);

let product = 'Televisor de 50"';
console.log(product);

let product2 = "Televisor de 50\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en el CDITI";
console.log(phrase.length);
//Busca si una cadena existe y me da su indexación.
//Si el resultado es menor que cero, la cadena No existe
console.log(phrase.indexOf("JS"));

//Método más moderno para buscar si una cadena existe
console.log (phrase.includes("JS"));