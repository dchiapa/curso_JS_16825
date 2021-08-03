//! SWITCH
//! estructura que se utiliza para
//! la gestión de los casos
//! de una estructura de control

let nombre = prompt("¿Cual es tu nombre? ('ESC' para salir)");

while (nombre !== "ESC") {
  switch (nombre) {
    case "ANA":
      console.log("Hola Ana");
      break;
    case "JOSE":
      console.log("Hola Jose");
      break;
    default:
      alert("¡No te entiendo!");
      break;
  }
  nombre = prompt("¿Cual es tu nombre? ('ESC' para salir)");
}
