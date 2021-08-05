// Pedir al usuario el precio de un producto
// calcular el iva y chequear si tiene descuento
// mostrar el precio final

let precio = 0;
let iva = 0;
let precioConIva = 0;

function pedirPrecio() {
  return parseInt(prompt("Ingrese el precio del producto: "));
}

function calcularIva(valor) {
  return valor * 0.21;
}

function calcularDescuento(valor) {
  if (valor >= 10000) {
    console.log("El producto tiene un descuento del 20%");
    console.log("El precio final es: " + valor * 0.8);
  } else if (valor >= 5000) {
    console.log("El producto tiene un descuento del 10%");
    console.log("El precio final es: " + valor * 0.9);
  } else {
    console.log("El producto no tiene descuento");
    console.log("El precio final es: " + valor);
  }
}

precio = pedirPrecio();
iva = calcularIva(precio);
precioConIva = precio + iva;

console.log("El precio del producto es: " + precio);
console.log("El iva del producto es: " + iva);
calcularDescuento(precioConIva);
