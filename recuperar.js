document.getElementById('cambiarContraseña').addEventListener('click', function(e) {
    e.preventDefault();
  
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const nuevaContraseñaInput = document.getElementById('nuevaContraseña');
  
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
  
    $.ajax({
      type: "POST",
      url: "verificar_nombre_apellido.php",
      data: { nombre: nombre, apellido: apellido },
      success: function(response) {
        if (response === 'nombre_apellido_correctos') {
          nuevaContraseñaInput.classList.remove('hidden');
          // Agrega la clase 'show' para aplicar la animación
          nuevaContraseñaInput.classList.add('show');
        } else {
          alert('El nombre y el apellido no coinciden con nuestros registros.');
        }
      }
    });
  });