$(document).ready(function () {
  const apiUrl = "https://api.boostr.cl/feriados/en.json";

  $.getJSON(apiUrl, function (data) {
    const feriados = data.data;

    feriados.forEach(feriado => {
      const fila = `
        <tr>
          <td>${feriado.date}</td>
          <td>${feriado.title}</td>
          <td>${feriado.extra}</td>
        </tr>
      `;
      $("#feriados-table tbody").append(fila);
    });
  }).fail(function () {
    alert("Error al cargar los feriados. Intenta nuevamente más tarde.");
  });
});
