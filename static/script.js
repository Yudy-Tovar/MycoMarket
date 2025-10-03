// Esperamos a que todo el HTML esté listo antes de correr nuestro código
document.addEventListener("DOMContentLoaded", () => {
  // Guardamos en una constante la referencia al formulario por su id
  const form = document.getElementById("contactForm");

  // Función que lee del almacenamiento (localStorage) y pinta la lista en pantalla
  function mostrarRespuestas() {
    // Buscamos el contenedor donde se mostrarán las respuestas guardadas
    const contenedor = document.getElementById("listaRespuestas");
    // Limpiamos su contenido para volver a dibujar desde cero
    contenedor.innerHTML = "";
    // Leemos el arreglo de respuestas guardadas; si no hay nada, usamos []
    const datos = JSON.parse(localStorage.getItem("respuestasValidacion")) || [];

    // Recorremos cada respuesta guardada y creamos un <p> para mostrarla
    datos.forEach(d => {
      const mensaje = document.createElement("p"); // Creamos un párrafo
      // Armamos un texto resumido con nombre, interés, precio y comentario
      mensaje.textContent = `El formulario de ${d.nombre} se guardó (interés: ${d.interes}, precio: ${d.precio}, comentario: ${d.mensaje})`;
      // Agregamos el párrafo dentro del contenedor
      contenedor.appendChild(mensaje);
    });
  }

  // Cuando el usuario intenta enviar el formulario:
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos que la página se recargue

    // Tomamos los valores actuales de cada campo y quitamos espacios sobrantes
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const interes = document.getElementById("interes").value;
    const precio = document.getElementById("precio").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación muy simple: que algunos campos no estén vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor, completa todos los campos."); // Aviso al usuario
      return; // No seguimos si falta algo
    } else if (!correo.includes("@") || !correo.includes(".")) {
      // Validación rápida del correo (comprobación mínima)
      alert("Por favor, ingresa un correo válido.");
      return; // Detenemos el proceso si el correo no parece válido
    }

    // Si todo está bien, armamos un objeto con la información del formulario
    const nuevaRespuesta = { nombre, correo, interes, precio, mensaje };

    // Leemos lo que ya esté guardado (si no hay, usamos un arreglo vacío)
    let respuestas = JSON.parse(localStorage.getItem("respuestasValidacion")) || [];
    // Agregamos la nueva respuesta al final
    respuestas.push(nuevaRespuesta);
    // Guardamos de nuevo en localStorage convirtiendo el arreglo a texto JSON
    localStorage.setItem("respuestasValidacion", JSON.stringify(respuestas));

    // Volvemos a pintar la lista de respuestas ya con la nueva incluida
    mostrarRespuestas();
    // Damos un mensaje de confirmación
    alert("¡Gracias! Tu respuesta se guardó.");
    // Limpiamos el formulario para que quede listo para otra respuesta
    form.reset();
  });

  // Al cargar la página, mostramos lo que pudiera estar guardado de antes
  mostrarRespuestas();
});
