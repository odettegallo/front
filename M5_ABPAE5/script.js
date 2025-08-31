$(document).ready(function() {
  const apiUrl = "https://api.boostr.cl/feriados/en.json";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", apiUrl, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);
        const feriados = data.data;
        const tbody = $("#feriados-table tbody");
        tbody.empty(); // Limpiar el cuerpo de la tabla antes de agregar nuevos datos

        feriados.forEach(feriado => {
          const fila = `
            <tr>
              <td>${feriado.date}</td>
              <td>${feriado.title}</td>
              <td>${feriado.extra}</td>
            </tr>
          `;
          tbody.append(fila);
        });
      } catch (e) {
        console.error("Error al parsear el JSON:", e);
        alert("Error al procesar los datos de feriados.");
      }
    } else {
      alert(`Error al cargar los feriados. Código de estado: ${xhr.status}`);
    }
  };

  xhr.onerror = function() {
    alert("Error de red. Intenta nuevamente más tarde.");
  };

  xhr.send();
});