// Función principal que recibe una función callback como parámetro
function saludo(callback) {
  console.log("Buenos días"); // Parte b: ejecución principal
  callback(); // Parte b: llamada al callback al final
}

// Parte a: invocación de la función principal con una función anónima como callback
saludo(function() {
  console.log("¿Quieres un café?"); // Parte c: ejecución del callback
});


function operaciones(a, b, minora, potencias) {
  const diferencia = a - b;
  const elevado = Math.pow(a, b);

  // Pasamos también a y b a las funciones callback para construir frases completas
  minora(a, b, diferencia);
  potencias(a, b, elevado);
}

// Invocación con funciones anónimas como callbacks
operaciones(5, 3,
  function(a, b, diferencia) {
    console.log(`La diferencia entre ${a} y ${b} es: ${diferencia}`);
  },
  function(a, b, elevado) {
    console.log(`Elevando ${a} a potencia ${b} se obtiene: ${elevado}`);
  }
);
