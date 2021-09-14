//EJEMPLO SPA PLANTILLA

const app = new ProductoController(new ProductoModel(), new ProductoView());

// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [
  { path: "/", action: "agregar" },
  { path: "/pagina1", action: "listar" },
  { path: "/pagina2", action: "buscar" },
];

//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

//BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND
const findActionByPath = (path, routes) =>
  routes.find((r) => r.path == path || undefined);

const router = () => {
  //OBTENER RUTA ACTUAL
  const path = parseLocation();
  //OBTENER ACCIÓN ACTUAL
  const action = findActionByPath(path, routes).action;
  // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
  switch (action) {
    case "agregar":
      app.agregar("#app");
      break;
    case "listar":
      app.listar("#app");
      break;
    case "buscar":
      app.buscar("#app");
      break;
    default:
      ErrorComponent("#app");
      break;
  }
};

//CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION ROUTER
$(window).on("load", function () {
  router();
});
//CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
$(window).on("hashchange", function () {
  router();
});
