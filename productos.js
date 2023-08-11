// TODOS LOS PRODUCTOS 

var productos = {
  frutas: [
    { nombre: "Futilla", imagen: "../img/frutilla.png" },
    { nombre: "Manzana", imagen: "../img/manzana.png" },
    { nombre: "Pera", imagen: "../img/pera.png" },
     { nombre: "Pera", imagen: "../img/pera.png" },
    // Agrega más productos de fiambres aquí
  ],
  lacteos: [
    { nombre: "Leche", imagen: "../img/leche.png" },
    { nombre: "Crema", imagen: "../img/crema.png" },
    { nombre: "Yogurt", imagen: "../img/yogurt.png" },
    // Agrega más productos lácteos aquí
  ],
  fiambres: [
    { nombre: "Queso", imagen: "../img/queso-maquina.png" },
    { nombre: "Jamon", imagen: "../img/jamon.png" },
    { nombre: "Salame", imagen: "../img/salame.png" },
    // Agrega más productos de fiambres aquí
  ],
  snack: [
    { nombre: "Mani", imagen: "../img/mani.png" },
    { nombre: "Papas Fritas", imagen: "../img/papas.png" },
    { nombre: "Queso", imagen: "../img/queso.png" },
    // Agrega más productos de fiambres aquí
  ],
  enlatados: [
    { nombre: "Lentejas", imagen: "../img/lentejas.png" },
    { nombre: "Porotos", imagen: "../img/porotos.png" },
    { nombre: "Choclo", imagen: "../img/choclo.png" },
    // Agrega más productos de fiambres aquí
  ],
  carnes: [
    { nombre: "Bondiola", imagen: "../img/bondiola.png" },
    { nombre: "Pollo", imagen: "../img/pollo.png" },
    { nombre: "Pescado", imagen: "../img/pescado.png" },
    // Agrega más productos de fiambres aquí
  ],
  limpieza: [
    { nombre: "Lavandina", imagen: "../img/lavandina.png" },
    { nombre: "Detergente", imagen: "../img/detergente.png" },
    { nombre: "Jabon", imagen: "../img/jabon.png" },
    // Agrega más productos de fiambres aquí
  ],
  panaderia: [
    { nombre: "Pan", imagen: "../img/pan.png" },
    { nombre: "Medialunas", imagen: "../img/medialuna.png" },
    { nombre: "Pastel", imagen: "../img/torta.png" },
    // Agrega más productos de fiambres aquí
  ],
  bebidas: [
    { nombre: "Coca-Cola", imagen: "../img/coca.png" },
    { nombre: "Sprite", imagen: "../img/sprite.png" },
    { nombre: "Fanta", imagen: "../img/fanta.png" },
    // Agrega más productos de fiambres aquí
  ],
};
// TODOS LOS PRODUCTOS FIN
// **********************************************************************************************************************
// CREAR NUEVOS PRODUCTOS
const botonRedireccionar = document.getElementById("redireccionar");

botonRedireccionar.addEventListener("click", function () {
  window.location.href = "nuevos-productos.html";
});
// CREAR NUEVOS PRODUCTOS FIN
// **********************************************************************************************************************



var listaCompras = [];

// Función para mostrar los productos según la categoría seleccionada
function mostrarProductos(categoria) {
  var listaProductos = productos[categoria];

  var productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = ""; // Limpia los productos anteriores

  listaProductos.forEach(function (producto) {
    var productoDiv = document.createElement("div");
    productoDiv.className = "producto";

    var imagen = document.createElement("img");
    imagen.src = producto.imagen;

    var nombre = document.createTextNode(producto.nombre);

    var contador = document.createElement("div");
    contador.className = "contador";

    var input = document.createElement("input");
    input.type = "text";
    input.value = 0;
    input.readOnly = true;

    var botonAgregar = document.createElement("button");
    botonAgregar.innerText = "+";
    botonAgregar.addEventListener("click", function () {
      var cantidad = parseInt(input.value);
      cantidad++;
      input.value = cantidad;
    });

    var botonQuitar = document.createElement("button");
    botonQuitar.innerText = "-";
    botonQuitar.addEventListener("click", function () {
      var cantidad = parseInt(input.value);
      if (cantidad > 0) {
        cantidad--;
        input.value = cantidad;
      }
    });

    contador.appendChild(botonQuitar);
    contador.appendChild(input);
    contador.appendChild(botonAgregar);

    var botonAgregarLista = document.createElement("button");
    botonAgregarLista.innerText = "Agregar a la lista";
    botonAgregarLista.className = "button-agregar";
    botonAgregarLista.addEventListener("click", function () {
      var cantidad = parseInt(input.value);
      if (cantidad > 0) {
        var item = {
          nombre: producto.nombre,
          cantidad: cantidad
        };
        listaCompras.push(item);
        actualizarListaCompras();
      }
    });

    productoDiv.appendChild(imagen);
    productoDiv.appendChild(nombre);
    productoDiv.appendChild(contador);
    productoDiv.appendChild(botonAgregarLista);
    productosDiv.appendChild(productoDiv);
  });
}

// Función para actualizar la lista de compras
function actualizarListaCompras() {
  var listaComprasDiv = document.getElementById("items-comprados");
  listaComprasDiv.innerHTML = ""; // Limpia los elementos anteriores

  listaCompras.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.innerText = item.nombre + " - Cantidad: " + item.cantidad;
    listaComprasDiv.appendChild(listItem);
  });
}

// Evento que se activa al cambiar la categoría seleccionada
var selectCategorias = document.getElementById("categorias");
selectCategorias.addEventListener("change", function () {
  var categoriaSeleccionada = selectCategorias.value;
  mostrarProductos(categoriaSeleccionada);
});

// Mostrar los productos de la categoría inicial seleccionada
var categoriaInicial = selectCategorias.value;
mostrarProductos(categoriaInicial);

//**********************************************************************************************************************

// Función para crear una nueva lista
function crearNuevaLista() {
  // Aquí puedes implementar la lógica para crear una nueva lista
  var nuevaLista = listaCompras.slice(); // Copia la lista actual

  // Guardar la nueva lista en el almacenamiento local
  var listasGuardadas = JSON.parse(localStorage.getItem("listas")) || [];
  listasGuardadas.push(nuevaLista);
  localStorage.setItem("listas", JSON.stringify(listasGuardadas));

  listaCompras = []; // Vaciar la lista de compras
  actualizarListaCompras(); // Actualizar la lista en la página
  console.log("Se ha creado y guardado una nueva lista");

}

//**********************************************************************************************************************
// Función para generar el texto de la lista de compras
function generarTextoLista() {
  var texto = "Lista de Compras:\n";
  listaCompras.forEach(function (item) {
    texto += item.nombre + " - Cantidad: " + item.cantidad + "\n";
  });
  return texto;
}

// Función para compartir la lista a través de WhatsApp
function compartirPorWhatsApp() {
  var textoLista = generarTextoLista();
  var encodedTexto = encodeURIComponent(textoLista);
  var url = "https://api.whatsapp.com/send?text=" + encodedTexto;
  window.open(url);
}

// Agregar evento de clic al botón o enlace para compartir por WhatsApp
var botonExportarWhatsApp = document.getElementById("whatsapp-button");
botonExportarWhatsApp.addEventListener("click", function() {
  compartirPorWhatsApp();
});
