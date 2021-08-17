//? localStorage permite acceder
//? a los datos guardados en el navegador
//? queda en la memoria del navegador
//? hasta que se limpie la cache del navegador

//? sessionStorage permite acceder
//? a los datos guardados en el navegador
//? queda en la memoria del navegador
//? hasta que se cierre el navegador

//! metodos de local y session Storage

//* setItem(key, value)
//* key: nombre del item
//* value: valor guardado
//* guarda el item en session o local Storage

//* getItem(key)
//* key: nombre del item
//* recupera el item en session o local Storage

//* removeItem(key)
//* key: nombre del item
//* elimina el item en session o local Storage

//* key(index)
//* index: indice del item
//* recupera la key de un item en
//* session o local Storage

//* clear()
//* elimina todos los items de
//* session o local Storage

function setItems() {
  let item,
    cantidad,
    ingresarItems = true,
    cantidadItems = 0;
  do {
    item = prompt("Ingrese item (Vacio para terminar):");
    if (item == "") {
      break;
    }
    cantidad = prompt(`Ingrese cantidad de ${item} (o para terminar):`);
    if (cantidad && cantidad > 0) {
      localStorage.setItem(item.toUpperCase(), cantidad);
      cantidadItems++;
    } else ingresarItems = false;
  } while (ingresarItems);
  sessionStorage.setItem("cantidadItems", cantidadItems);
}

function showItems() {
  for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}

function removeItem(key) {
  localStorage.getItem(key.toUpperCase()) &&
    localStorage.removeItem(key.toUpperCase());
}

setItems();
showItems();
removeItem("leche");
showItems();
