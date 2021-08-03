console.log("Este algoritmo fue escrito por Diego");
let nombre = prompt("Bienvenido, ingrese su nombre: ");
alert("Hola " + nombre + " te estaba esperando...");
let ubicacion = prompt("De donde vienes?");
alert("Que comience el juego!");
let resCorrectas = 0;
let respuesta = prompt(
  "Para ganar rápido debes pensar, la suma de 5 y 8 debes ingresar..."
);
if (respuesta == 13 || respuesta == "trece") {
  alert("Una bien, pero aún hay más...");
  resCorrectas++;
}
respuesta = prompt("La constelación de los gemelos debes recordar...");
if (respuesta.toLowerCase() === "geminis") {
  alert("Muy bien " + nombre + " de " + ubicacion);
  resCorrectas++;
}
respuesta = prompt(
  "Esta respuesta en la consola debes encontrar, al creador del código debes encontrar"
);
if (respuesta.toLowerCase() === "diego") {
  alert(
    "Muy bien " + nombre + " de " + ubicacion + " haz completado el desafío!"
  );
  resCorrectas++;
}
if (resCorrectas === 3) {
  alert(
    "Excelente " +
      nombre +
      " de " +
      ubicacion +
      " has contestado correctamente todas las preguntas, tu puntaje es: " +
      resCorrectas
  );
} else if (resCorrectas >= 1 && resCorrectas <= 3) {
  alert(
    "Bien " +
      nombre +
      " de " +
      ubicacion +
      " has contestado correctamente algunas preguntas, tu puntaje es: " +
      resCorrectas
  );
} else {
  alert(
    "Mas debes practicar, no haz respondido correctamente " +
      nombre +
      " de " +
      ubicacion
  );
}
