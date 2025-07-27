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

function puedePostular(edad, carnet, ahorroUF, vulnerabilidad) {
  const edadValida = edad >= 18;
  const carnetValido = carnet === "chilena" || carnet === "extranjera";
  const ahorroValido = ahorroUF >= 4;
  const vulnerabilidadValida = vulnerabilidad <= 70;

  if (edadValida && carnetValido && ahorroValido && vulnerabilidadValida) {
    console.log("✅ Puede postular al subsidio de arriendo.");
    return true;
  } else {
    console.log("❌ No cumple con todos los requisitos para postular.");
    return false;
  }
}

// Prueba
puedePostular(25, "chilena", 5, 60); // ✅
puedePostular(17, "chilena", 5, 60); // ❌ edad
puedePostular(30, "pasaporte", 5, 60); // ❌ documento
