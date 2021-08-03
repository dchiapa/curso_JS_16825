//Operador binario de asignación
var numeroIngresado = 10;
console.log("numeroIngresado:" + numeroIngresado);
//Operador Aritmetico
var suma = numeroIngresado + 4; // suma = 14

console.log("suma:" + suma);
var resta = numeroIngresado - 5; // resta = 5

console.log("resta:" + resta);

//Acumuladores
let totalSuma = 0;

//totalSuma = 0 y numeroIngresado = 10 --> 0 + 10 = 10
totalSuma = totalSuma + numeroIngresado;
//aca totalSuma vale 10

console.log("totalSuma + numeroIngresado = " + totalSuma);

//totalSuma = 10 y resta = 5 --> 10 + 5 = 15
totalSuma = totalSuma + resta;
//totalSuma = 15
console.log("totalSuma + resta = " + totalSuma);

// totalSuma = totalSuma + suma;
// 15 + 14 = 29
totalSuma = totalSuma + suma;
//totalSuma = 29
console.log("totalSuma = totalSuma + suma = " + totalSuma);
// totalSuma = totalSuma + 11;
totalSuma += 11;
// totalSuma = 40
console.log("totalSuma += 11 = " + totalSuma);

//Acumulando producto
let numeroPar = 2;
let totalProducto = 3;

//totalProducto = totalProducto * numeroPar;
totalProducto *= numeroPar;
console.log("totalProducto=" + totalProducto);
totalProducto *= numeroPar;
console.log("totalProducto=" + totalProducto);
totalProducto *= numeroPar;
console.log("totalProducto=" + totalProducto);

// Operadores Unarios

let contador = 0;

//Votacion de alumno 1 - cuenta un voto
contador = contador + 1;
console.log("Contador=" + contador);
//Votacion de alumno 2 - cuenta un voto
contador += 1;
console.log("Contador=" + contador);

//Votacion de alumno 3 - cuenta un voto
//Operador Unario de incremento
//Operando Operador
//contador = contador + 1;
contador++;
console.log("Contador=" + contador);

//Operador Unario de increment
//Operando Operador
++contador;
console.log("Contador=" + contador);

let numeroFijo = 4;
//Preincremento
let contador2 = ++numeroFijo * 2;
console.log("Contador2=" + contador2);
console.log("numeroFijo=" + numeroFijo);

contador2 = numeroFijo++ * 2;
/*
PostIncremento
1) contador2 = numeroFijo * 2;
2) numeroFijo = numeroFijo + 1;
*/
console.log("Contador2=" + contador2);
console.log("numeroFijo=" + numeroFijo);

/* Asignacion anidada que expone 
   que la asignacion en si misma
   devuelve un resultad
*/
let texto1 = "Salvador expone operadores";
console.log(texto1);
let texto2 = (texto3 = "Otro Texto");
console.log(texto2);
console.log(texto3);

/* Operador ternario o operador condicional
    Condición ? ValorSiVerdadero : ValorSiFalso
*/

let ejemploTernario = 6;
let resultado = ejemploTernario == 5 ? "Iguales" : "Distintos";
console.log("resultado = " + resultado);

/* Prioridades con operadores Logicos */

let condicion1 = false;
let condicion2 = true;

let ejemploPrioridad = condicion1 && condicion2;
/*
Evalua de izq a der
&& :
Si el operando1 es verdadero, el resultado es el operando2
Si el operando1 es falso, el resultado es el operando 1
*/
console.log(ejemploPrioridad);

condicion1 = "";
condicion2 = "Perro";
ejemploPrioridad = condicion1 && condicion2;

console.log(ejemploPrioridad);

/*
Evalua de izq a der
|| :
Si el operando1 es verdadero, el resultado es el operando1
Si el operando1 es falso, el resultado es el operando 2
*/
condicion1 = false;
condicion2 = true;
ejemploPrioridad = condicion1 || condicion2;

console.log(ejemploPrioridad);

condicion1 = true;
condicion2 = false;
ejemploPrioridad = condicion1 || condicion2;

console.log(ejemploPrioridad);

condicion1 = "";
condicion2 = "Perro";
ejemploPrioridad = condicion1 || condicion2; //Devuelve condicion2

console.log(ejemploPrioridad);

condicion1 = "Gato";
condicion2 = "Perro";
ejemploPrioridad = condicion1 || condicion2; //Devuelve condicion1

console.log(ejemploPrioridad);
