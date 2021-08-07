// Calculador de cuotas a pagar

let montoInicial = 0;
let cantCuotas = 0;
let interes = 0;
let montoCouta = 0;
let montoFinal = 0;

const ingresarMonto = () => parseInt(prompt("Ingrese el monto inicial"));

const ingresarCantCuotas = () =>
  parseInt(prompt("Ingrese la cantidad de cuotas"));

const calcInteres = (montoInicial) => {
  if (montoInicial >= 1000000) {
    return 20;
  } else if (montoInicial >= 100000) {
    return 15;
  } else if (montoInicial >= 10000) {
    return 10;
  } else {
    return 5;
  }
};

const calcularMontoFinal = (montoInicial, interes) =>
  montoInicial + montoInicial * (interes / 100);

const calcularMontoCuotas = (montoFinal, cantCuotas) => montoFinal / cantCuotas;

montoInicial = ingresarMonto();
cantCuotas = ingresarCantCuotas();
interes = calcInteres(montoInicial);
montoFinal = calcularMontoFinal(montoInicial, interes);
montoCouta = parseFloat(calcularMontoCuotas(montoFinal, cantCuotas)).toFixed(2);

alert(
  "El monto ingresado es: $" +
    montoInicial +
    "\nLa cantidad de cuotas es: " +
    cantCuotas +
    "\nEl interes es: " +
    interes +
    "%\nEl monto a pagar es: $" +
    montoCouta +
    "\n El monto final es: $" +
    montoFinal
);
