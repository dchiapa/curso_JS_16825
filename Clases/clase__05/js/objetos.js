let nombre = "Homero";
let edad = 39;
let direccion = "Av. Siempreviva 742";

//? Un objeto agrupa valores relacionados
//? en una misma entidad
//? Los objetos tienen propiedades y métodos
//? Las propiedades son variables que guardan valores
//? Los métodos son funciones que se
//? ejecutan sobre objetos

const persona1 = {
  nombre: "Homero",
  edad: 39,
  direccion: "Av. Siempreviva 742",
};

//? Acceder a las propiedades de un objeto usando .
/*
* Ejemplo:
console.log("Nombre: ", persona1.nombre);
console.log("Edad: ", persona1.edad);
console.log("Direccion: ", persona1.direccion);
*/

//? Acceder a las propiedades de un objeto usando []
/*
* Ejemplo:
console.log("Nombre: ", persona1["nombre"]);
console.log("Edad: ", persona1["edad"]);
console.log("Direccion: ", persona1["direccion"]);
*/

//* Crear un objeto auto,
//* con las propiedades marca, modelo y color

const auto = {
  marca: "Ferrari",
  modelo: "458 Italia",
  color: "Rojo",
};

//? Se pueden agregar propiedades nuevas

auto.anio = 2018;

/*
* Ejemplo:
console.log(
  "tengo un auto marca: ",
  auto.marca,
  ", modelo: ",
  auto.modelo,
  ", de color: ",
  auto.color,
  ", del año: ",
  auto.anio
);
*/

//? constructor
//? se utiliza para crear objetos
//? con propiedades y métodos
/*
* Ejemplo:
function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}
const persona2 = new Persona("Bart", 11, "Av. Siempreviva 742");
const persona3 = new Persona("Lisa", 8, "Av. Siempreviva 742");
 */

//? Se puede utilizar un objeto como parámetro
//? en un constructor
/*
* Ejemplo:
function Persona(objPersona) {
  this.nombre = objPersona.nombre;
  this.edad = objPersona.edad;
  this.direccion = objPersona.direccion;
}

const persona4 = new Persona({
  nombre: "Maggie",
  edad: 1,
  direccion: "Av. Siempreviva 742",
});

console.log(persona4);
*/
//? Un método es una función que se
//? ejecuta sobre un objeto
/*
* Ejemplo:
let cadena = "Hola Mundo";
console.log(cadena.length);
console.log(cadena.toUpperCase());
*/
//? Métodos personalizados
function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.saludar = () => {
    console.log("Hola, soy " + this.nombre);
  };
}

const persona5 = new Persona("Bart", 11, "Av. Siempreviva 742");

persona5.saludar();

//? Operador IN devuelve true si
//? el objeto contiene la propiedad
//? especificada

console.log("nombre" in persona5);
console.log("apellido" in persona5);

//? Operador FOR IN permite acceder
//? a todas las propiedades del objeto

for (let propiedad in persona5) {
  console.log(persona5[propiedad]);
}
