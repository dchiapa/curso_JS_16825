//? Una clase es la actualización de las funciones
//? constructoras, y la agrupación de funciones
class Persona {
  constructor(nombre, edad, domicilio) {
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;
  }
  //? Método saludar
  saludar() {
    console.log("Hola mi nombre es " + this.nombre);
  }
}

const persona1 = new Persona("Juan", 25, "Calle falsa 123");
persona1.saludar();
