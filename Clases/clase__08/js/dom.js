//? document representa el objeto global del navegador
//? tiene métodos para acceder a los elementos del DOM

//! métodos y propiedades de document

//* document.getElementById("id")
//* devuelve el elemento con el id "id"
//* devuelve un único elemento

//* document.getElementsByClassName("clase")
//* devuelve un array con todos los elementos
//* con la clase "clase"

//* document.getElementsByTagName("h1")
//* devuelve un array con todos los elementos
//* de tipo h1

//* document.createElement("h1")
//* crea un elemento de tipo h1

//* innerHTML permite a cambiar el contenido
//* de un elemento

//* appendChild() permite añadir un elemento
//* como hijo de otro elemento

//* removeChild() permite eliminar un elemento
//* hijo desde su elemento padre

console.dir(document);

let titulo = document.getElementById("titulo");
let listaArticulos = document.getElementsByClassName("listaArticulos");
let items = document.getElementsByTagName("li");

for (const item of items) {
  console.log(item.innerHTML + " - " + item.parentNode.innerText);
}

let listaComestibles = document.getElementById("comestibles");

let elementoComestible = document.createElement("li");
elementoComestible.innerHTML = "Aceite: 1";
listaComestibles.appendChild(elementoComestible);

listaComestibles.removeChild(elementoComestible);
