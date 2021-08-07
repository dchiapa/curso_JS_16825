console.log("EJEMPLO 1");
/*
Objetivo : Ejemplificar la diferencia entre let y var
Antes: debemos entender e lconcepto de ambito o alcance.
let: permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. 
var: define una variable global o local en una función sin importar el ámbito del bloque
* Ejemplo: declaramos variable numeroA con let fuera del if, la utilizamos dentro del if
* Que esperamos?: como dentro de if se declara otra numeroA que solo se podra usar en el ambito interno del if, la linea del console.log y la suma dentro de numeroB, no podra ejecutarse porque el interprete considera que numeroA esta siendo declarada en forma posterior. Es decir, no considera la variable numeroA declarada antes del if, porque dentro de su bloque se declaro una con el mismo nombre, solo utilizable dentro del bloque. Le da prioridad a la declarada dentro del bloque.
*/


//variable global 
/* 
let resultado = 0;

function sumar(a,b){

    resultado = a + b;
}

sumar(58,35);// al llamar la funcion guarda el resultado en nuestra variable global

if (resultado < 0){
    console.log("El resultado es negativo: " + resultado);
}else if( resultado == 0 ){
    console.log("Es cero");
}
else{
    console.log("El resultado es postivo: " + resultado);
}

 */


//EJEMPLO 2

/* console.log("EJEMPLO 2");
let resultado = 0;
var resultadoVar = 0;

function sumar(a,b){
    let resultado = a + b;
    if (a > b){
        let resultado = (a + b)*10;
        console.log("Como a es mayor a b lo multiplico por 10:" + resultado);
    }
    var resultadoVar = resultado;    
    console.log("Resultado de la suma: " + resultado);
}

sumar(58,35);// al llamar la funcion guarda el resultado en nuestra variable global

console.log(resultadoVar);

if (resultado < 0){
    console.log("El resultado es negativo: " + resultado);
}else if( resultado == 0 ){
    console.log("Es cero");
}
else{
    console.log("El resultado es postivo: " + resultado);
}

 */


var numeroC = 15;
console.log("numeroC antes del if " + numeroC);
if (numeroC >= 10) {
  //en la condicion numeroC todavia sirve
  console.log("Numeros dentro de if: ");
  console.log("numeroC: " + numeroC);
  var numeroD = 5;
  console.log("numeroD: " + numeroD);
  let numeroE = 99;
  console.log("numeroE: " + numeroE);
}
console.log("Numeros fuera del if: ");
console.log("numeroC: " + numeroC);
console.log("numeroD: " + numeroD);
console.log("numeroE: " + numeroE);