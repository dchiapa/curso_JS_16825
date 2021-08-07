/*
Ejemplo de Funcion Flecha
*/


const suma = (a,b) => { console.log("Suma: " + (a + b)) };
const resta = (a,b) => { 
    let resultado=a-b;
    console.log("Resta: " + resultado );
    return resultado;
    };
suma(5,13);
let resultadoResta = resta(13,5);

console.log(resultadoResta);


