// Rest operator, lo que se busca es No modificar el arreglo original

const months = ['december', 'november', 'january', 'february'];
console.table(months);


// Crear un nuevo arreglo y lo unimos con otro

const newArray = [...months, 'may'];
console.table(newArray);

const newaArray2 = ['october', ...newArray]
console.table(newaArray2);