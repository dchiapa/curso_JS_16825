//? JSON es JS Object Notation
//? JSON es un formato de codificación
//? de datos

//! metodos de JSON

//* stringify(object)
//* Devuelve un string con el JSON
//* de un objeto

//* parse(string)
//* Devuelve un objeto con los
//* datos JSON de un string

let item1 = {
  nombre: "PAN",
  cantidad: 6,
};

localStorage.setItem(item1.nombre, JSON.stringify(item1));
let item2 = JSON.parse(localStorage.getItem(item1.nombre));

console.log(localStorage.getItem(item1.nombre));
console.log(`${item2.nombre}: ${item2.cantidad}`);

item2 = { nombre: "JABON", cantidad: 2 };
let item3 = { nombre: "ACEITE", cantidad: 5 };

localStorage.setItem(item3.nombre, JSON.stringify(item3));

const listItems = [item1, item2, item3];

for (const item of listItems) {
  localStorage.setItem(item.nombre, JSON.stringify(item));
}

localStorage.setItem("lista", JSON.stringify(listItems));
