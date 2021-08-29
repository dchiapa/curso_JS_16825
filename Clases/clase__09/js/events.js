const btn = document.getElementById("btnAdd");
const listFood = document.getElementById("comestibles");

/*
! 1 forma de capturar un evento
btn.addEventListener("click", addItem);

function addItem() {
  console.log("Agregando item");
  let item = document.getElementById("itemText").value;
  let value = document.getElementById("itemValue").value;
  console.log(`${item}: ${value}`);
}
*/
//! 2 forma de capturar un evento

btn.onclick = () => {
  console.log("Agregando item");
  let item = document.getElementById("itemText").value;
  let value = document.getElementById("itemValue").value;
  console.log(`${item}: ${value}`);
};

listFood.onmouseover = () => {
  console.log("mouse over");
};
