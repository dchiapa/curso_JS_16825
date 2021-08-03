//! Ciclo FOR
/*
for (let index = 0; index < 10; index++) {
  console.log("Valor index: ", index);
}
*/

//? Tabla de multiplicar
/*
let numeroTabla = parseInt(prompt("Ingrese un numero el 1 al 10: "));
console.log("Tabla del: ", numeroTabla);
for (let tabla = 1; tabla <= 10; tabla++) {
  console.log(numeroTabla, " * ", tabla, " = ", numeroTabla * tabla);
}
*/

//? Ejemplo de ingreso de turnos por personas
/*
let nombreIngresado = "",
  turnosGenerados = 0;
for (let turno = 35; turno <= 40; turno++, turnosGenerados++) {
  nombreIngresado = prompt("Ingrese el nombre de la persona: ");
  alert("Hola " + nombreIngresado + ", el turno es: " + turno);
  console.log("Turno: " + turno + " Nombre: " + nombreIngresado);
}

console.log(turnosGenerados);
*/

//? Ejemplo de BREAK
//! Breaks son usados para salir del ciclo
//! y pueden ser usados en cualquier lugar
//! donde se pueda usar un ciclo
/*
for (let index = 0; index < 10; index++) {
  if (index === 5) {
    console.log("Se ha llegado al valor 5");
    break;
  }
  console.log("Valor index: ", index);
}

console.log("esta fuera del ciclo");
*/
//? Ejemplo de CONTINUE
//! Continuar con el siguiente ciclo
//! y pueden ser usados en cualquier lugar
//! donde se pueda usar un ciclo

let sumatoria = 0;
for (let index = 0; index < 10; index++) {
  if (index === 5) {
    console.log("Se ha llegado al valor 5");
    continue;
  }
  sumatoria += index;
  console.log("Valor index: ", index);
  console.log("Sumatoria: " + sumatoria);
}

console.log("esta fuera del ciclo");
console.log("Sumatoria final: " + sumatoria);
