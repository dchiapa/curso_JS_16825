//? App que a partir de un numero debe mostrar

//? Comprobar que lo ingresado sea un numero y > 0

//? Mientras no se cumpla se sigue pidiendo
//? que ingrese un numero

//? Se calcula su sumatoria y productoria
//? luego se muestra el resultado de ambas

console.log("Este algoritmo fue escrito por Diego Chiapa");

let numero = 0,
  sumatoria = 0,
  productoria = 1;

do {
  numero = parseInt(
    prompt(
      "Ingrese un numero distinto de 0 \npara calcular su sumatoria y productoria: "
    )
  );
} while (numero <= 0 || !numero);

for (let i = 1; i <= numero; i++) {
  sumatoria += i;
  productoria *= i;
}

alert("La sumatoria es: " + sumatoria + " y la productoria es: " + productoria);
