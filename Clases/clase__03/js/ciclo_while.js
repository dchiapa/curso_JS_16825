//! ciclo WHILE
//! Este ciclo se ejecuta mientras
//! la condición sea verdadera
//! primero se evalúa la condición
//! y luego se ejecuta el ciclo

/*
let datoIngresado = prompt("Ingrese cualquier texto ('ESC' para terminar ):");

while (datoIngresado != "ESC") {
  console.log("El texto ingresado es: ", datoIngresado);
  datoIngresado = prompt("Ingrese cualquier texto ('ESC' para terminar ):");
}
*/

//! DO WHILE
//! Este ciclo se ejecuta mientras
//! la condición sea verdadera
//! primero se ejecuta el ciclo
//! y luego se evalúa la condición
/*
let repetir = false;

do {
  console.log("Hola mundo");
} while (repetir);

console.log("Fin del ciclo");
*/

//? Ingreso de números

let numero = 0;
do {
  numero = parseInt(prompt("Ingreso un numero: "));
  if (numero) {
    console.log("El numero ingresado es " + numero);
  }
} while (numero);
