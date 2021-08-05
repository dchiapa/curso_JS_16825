//! Una función es un bloque de código
//! que puede ser ejecutado en cualquier momento
//! de la aplicación.

//? Declaración de una función
function saludar() {
  console.log("Hola, bienvenido a la aplicación");
}

//? Ejecución de una función
saludar();

function ingresarNombre() {
  let nombreIngresado = prompt("Ingrese su nombre: ");
  alert(`Hola, ${nombreIngresado}`);
}

let resultado = 0;

//! Parámetros de una función
//! En la declaración de la función,
//! se pueden especificar los parámetros
//! que se le pasan a la función.
/*
function sumar(numero1, numero2) {
  resultado = numero1 + numero2;
}
*/

//! Parámetros de una función
//! En la Ejecución de la función,
//! se pueden especificar los argumentos
//! que se le pasan a la función.
sumar(2, 3);

console.log("el resultado es: " + resultado);

//! guardar el resultado de una función
//! y utilizarlo en otra
/*
function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
}
*/
function mostrarResultado(mensaje) {
  console.log("el resultado es: " + mensaje);
}

sumar(5, 3);

console.log("el resultado es: " + resultado);

//! Función que devuelve un resultado
/*
function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}
*/
resultado = sumar(5, 3);

console.log("el resultado es: " + resultado);

//! Función calculadora

function calculadora(operando1, operando2, operacion) {
  switch (operacion) {
    case "suma":
      return operando1 + operando2;
      break;
    case "resta":
      return operando1 - operando2;
      break;
    case "multiplicacion":
      return operando1 * operando2;
      break;
    case "division":
      return operando1 / operando2;
      break;
    default:
      return 0;
      break;
  }
}

console.log("Suma: " + calculadora(6, 2, "suma"));
console.log("Resta: " + calculadora(6, 2, "resta"));
console.log("Multiplicacion: " + calculadora(6, 2, "multiplicacion"));
console.log("Division: " + calculadora(6, 2, "division"));

//! Ambito de una variable
//? resultado es una variable local
/*
function sumar(numeroUno, numeroDos) {
  let resultado = numeroUno + numeroDos;
}
*/

//? resultado es una variable global
function sumar(numeroUno, numeroDos) {
  resultado = numeroUno + numeroDos;
}

sumar(1, 3);
console.log(resultado);

//! Funciones anonimas

const suma = function (a, b) {
  return a + b;
};

//! Funciones flecha

const resta = (a, b) => a - b;

//? Ejercicio calcular precio

const iva = (x) => x * 0.21;

let precioProducto = 500,
  precioDescuento = 50;

let precioFinal = resta(
  suma(precioProducto, iva(precioProducto)),
  precioDescuento
);
