//Definimos array general
let listaTareas = [];

//creamos el objeto tarea
class Tarea {
  constructor(id, nombre, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  toString() {
    //devolvemos nuestro objeto en formato json
    return JSON.stringify(this);
  }
}
//contador para usar de ID
let contador = 0;

function agregarTarea(evento) {
  //evento.preventDefault();
  let nombre = document.getElementById("nombre");
  let descripcion = document.getElementById("descripcion");

  //Validamos que nombre no este vacio
  if (nombre.value == "") {
    //si esta vacio sale y muestra un alert
    alert("Ingresar Nombre valido");
    return;
  }

  //Validamos que descripcion no este vacio
  if (descripcion.value == "") {
    //si esta vacio sale y muestra un alert
    alert("Ingresar Descripcion valido");
    return;
  }

  console.log(`Nombre: ${nombre.value} \n Descripcion: ${descripcion.value}`);

  //agregamos objeto Tarea
  listaTareas.push(new Tarea(++contador, nombre.value, descripcion.value));

  //recuperamos el elemento tabla
  let table = document.getElementById("tabla-tareas");
  //creamos el Table ROW Element
  let tr = document.createElement("tr");
  //Le cargamos los table data
  tr.innerHTML = `<td>${contador}</td>\n
    <td>${nombre.value}</td>\n
    <td>${descripcion.value}</td>`;
  //agregamos a la estructura table
  table.appendChild(tr);

  //Limpiamos lso valores de los inputs
  nombre.value = "";
  descripcion.value = "";
}

//Funcion para guardar nuestro array en storage
function guardarLista() {
  localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
  for (tarea of listaTareas) {
    console.log(tarea.toString());
  }
}

let boton = document.getElementById("boton");

boton.addEventListener("click", agregarTarea);

//capturamos evento click de guardar
let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", guardarLista);
