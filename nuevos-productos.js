// Obtener referencia al botón "Volver"
const volverButton = document.getElementById("volver-button");

// Manejador de eventos para volver a la vista anterior
volverButton.addEventListener("click", function () {
  // Ocultar la página de agregar productos
  document.getElementById("agregar-productos-page").classList.add("hidden");

  // Mostrar la vista anterior
  document.getElementById("productos").classList.remove("hidden");
  document.getElementById("lista-compras").classList.remove("hidden");
  document.getElementById("listas-anteriores").classList.remove("hidden");
});

// Manejador de eventos para seleccionar una foto
const imagenesPredefinidas = document.querySelectorAll("#imagenes-predefinidas img");
const fotoSeleccionada = document.getElementById("foto-seleccionada");
const fotoSeleccionadaBox = document.getElementById("foto-seleccionada-box");

imagenesPredefinidas.forEach(function (imagen) {
  imagen.addEventListener("click", function () {
    const imagenSrc = this.getAttribute("src");
    fotoSeleccionada.src = imagenSrc;
    fotoSeleccionadaBox.innerHTML = `<img src="${imagenSrc}" alt="Foto seleccionada">`;
  });
});

// Manejador de eventos para agregar un producto
const agregarProductoButton = document.getElementById("agregar-producto");
agregarProductoButton.addEventListener("click", function () {
  // Obtener los valores ingresados por el usuario
  const imagenSeleccionada = document.getElementById("foto-seleccionada").src;
  const nombre = document.getElementById("producto-nombre").value;
  const categoria = document.getElementById("producto-categoria").value;

  // Realizar la lógica para agregar el producto a la base de datos
  // Utiliza la imagenSeleccionada, nombre y categoría para guardar el producto

  // Limpiar los campos después de agregar el producto
  document.getElementById("foto-seleccionada").src = "#";
  document.getElementById("producto-nombre").value = "";
  document.getElementById("producto-categoria").value = "";
});
