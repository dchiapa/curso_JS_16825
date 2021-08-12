//? Arrays

//? un array es un objeto que
//? contiene varios elementos
//? y que puede ser accedido por su indice
//? o por su nombre

//? inicializar un array
const listEmpty = [];
const listNumbers = [1, 2, 3, 4];
const listStrings = ["uno", "dos", "tres", "cuatro"];
const listBooleans = [true, false, false, true];
const listMixed = [1, "dos", true];

//? acceder a un elemento de un array
let suma = listNumbers[0] + listNumbers[1] + listNumbers[2] + arrayNumbers[3];

//? ciclan los elementos de un array
for (let index = 0; index < listNumbers.length; index++) {
  console.log(`Elemento ${index}: ${listNumbers[index]}`);
}

//* La propiedad length
//* guarda la cantidad de elemento del array

console.log(listEmpty.length);

//* El método toString() devuelve todos los elementos
//* del array en una cadena, separados por comas

console.log(listStrings.toString());

//* El método join() separa los elementos del array
//* por un carácter especificado

console.log(listStrings.join(" - "));

//* El método push() añade un elemento
//* al final del array

listMixed.push(4);

//* El metodo concat() concatena los elementos
//* de dos arrays, en un nuevo array

console.log(listMixed.concat(listNumbers));

//* El metodo slice() obtiene una nuevo array
//* con los elementos de un array
//* en un rango de elementos

console.log(listMixed.slice(1, listMixed.length - 1));
