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
    /* let nombre = document.getElementById("nombre"); */
    //let nombre = $("#nombre");
    let nombre = $("#formTareas #nombre");
    let descripcion = $("#descripcion");

    //En vez de utilizar la propiedad value del input utilizamos un metodo val()

    //Validamos que nombre no este vacio
    if (nombre.val() == "") {
        //si esta vacio sale y muestra un alert
        alert("Ingresar Nombre valido");
        return;
    }

    //Validamos que descripcion no este vacio
    if (descripcion.val() == "") {
        //si esta vacio sale y muestra un alert
        alert("Ingresar Descripcion valido");
        return;
    }

    console.log(`Nombre: ${nombre.val()} \n Descripcion: ${descripcion.val()}`);

    //agregamos objeto Tarea
    listaTareas.push(new Tarea(++contador, nombre.val(), descripcion.val()));

    //recuperamos el elemento tabla
    //let table = document.getElementById("tabla-tareas");
    $("#tabla-tareas").append(`<tr><td>${contador}</td>\n
    <td>${nombre.val()}</td>\n
    <td>${descripcion.val()}</td>
    <td><a href='#' class='btnVer'>Ver</a></td>
    </tr>`);
/*     $("#tabla-tareas").prepend(`<tr><td>${contador}</td>\n
<td>${nombre.val()}</td>\n
<td>${descripcion.val()}</td></tr>`); */
    /* //creamos el Table ROW Element
    let tr = document.createElement("tr");
    //Le cargamos los table data
    tr.innerHTML = `<td>${contador}</td>\n
    <td>${nombre.val()}</td>\n
    <td>${descripcion.val()}</td>`;
    //agregamos a la estructura table
    table.appendChild(tr); */

    //Limpiamos lso valores de los inputs
    nombre.val("");
    descripcion.val("");

}

//Funcion para guardar nuestro array en storage
function guardarLista() {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
    console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
    for (tarea of listaTareas) {
        console.log(tarea.toString());
    }
}

$(document).ready(function () {

/*     let boton = document.getElementById("boton");
    boton.addEventListener("click", agregarTarea); */
    //Camabiamos manejo de evento por .on de jquery
    $("#boton").on('click',agregarTarea);

    //usamos metodo shorcut .click de jquery
    $("#btnReset").click(function(){
        console.log("RESET");
        localStorage.setItem("listaTareas", "");
        $("#tabla-tareas").html("");

    });


    //usamos metodop .change de jquery
    $("#nombre").change(function(e){
        if (this.value == ""){
            alert("Debe ingresar un nombre");
        }
    });

    //usamos metodo .change de jquery para validar descripcion 
    $("#descripcion").change(function(){
        if(this.value == ""){
            alert("Debe ingresar una descripcion");
        }
    })

    //Capturar submit
    $("#formTareas").submit(function(){
        console.log(this);
        if ( $("#nombre").val() == "" || $("#descripcion").val() == ""){
            alert("Se deben ingresar Nombre y descripcion");
        }else{
            //debemos agregar nombre y descripcion a la lista
            //forzamos el evento click en el boton de "Agregar"
            $("#boton").trigger("click");
        }
    });

    //capturamos evento click de guardar
    /* 
    let btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", guardarLista);
     */
    //Reemplazo de evento por .on de jquery
    $("#btnGuardar").on('click',function(){
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
        console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
        for (tarea of listaTareas) {
            console.log(tarea.toString());
        }    
    });


});


