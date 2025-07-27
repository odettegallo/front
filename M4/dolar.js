function convertirADolares(montoUSD) {
  const tipoCambio = 745;

  // Validación del tipo de dato
  if (typeof montoUSD === "number" && !isNaN(montoUSD)) {
    const resultado = Math.round(montoUSD * tipoCambio);
    console.log("Equivalente en pesos chilenos:", resultado);
    return resultado;
  } else {
    console.log("Error: Ingrese un monto válido en dólares (solo números).");
    return null;
  }
}

// Pruebas
convertirADolares(100.50); // 74873
convertirADolares(0.99);   // 738
convertirADolares("100");  // Error
