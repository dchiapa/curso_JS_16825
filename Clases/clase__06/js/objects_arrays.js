const product1 = {
  id: 1,
  name: "Atun",
};

const productsList = [product1, { id: 2, name: "Arroz" }];

productsList.push({ id: 3, name: "Fideos" });
productsList.push({ id: 4, name: "Arroz" });
console.log(productsList.join(" | "));

//* for of permite iterar sobre un array
//* y puede recorrerlo con un bucle for

for (product of productsList) {
  console.log(`ID: ${product.id} - Producto: ${product["name"]}`);
}

//* El método typeof nos permite saber
//* el tipo de una variable

console.log(typeof productsList);

//* El método find nos permite encontrar
//* un elemento en un array

const finded = productsList.find((product) => product.id === 1);

//* El método filter nos permite filtrar
//* los elementos de un array

const filtered = productsList.filter((product) => product.name === "Arroz");

//* El método map nos permite transformar
//* cada elemento de un array

const productsList2 = productsList.map((product) => (product.price = 55));

console.log(productsList);
console.log(finded);
console.log(filtered);
console.log(productsList2);
