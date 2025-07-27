function evaluarNumero(numero) {
  // Validación del rango permitido
  if (numero <= 1 || numero > 100) {
    console.log("❌ Número fuera del rango permitido (2 a 100).");
    return;
  }

  // Evaluación de condiciones favorables
  if ((numero > 5 && numero < 15) || numero === 70 || numero === 55) {
    console.log("✅ El número ingresado tiene opciones de ganar.");
  } else {
    console.log("⚠️ El número ingresado no es favorable.");
  }
}

// Pruebas
evaluarNumero(10);  // ✅
evaluarNumero(70);  // ✅
evaluarNumero(55);  // ✅
evaluarNumero(100); // ⚠️
evaluarNumero(1);   // ❌

function esBisiesto(anio) {
  // Validación del valor ingresado
  if (typeof anio !== "number" || isNaN(anio) || anio < 0) {
    console.log("❌ Año inválido. Debe ser un número mayor o igual a cero.");
    return;
  }

  // Lógica de año bisiesto
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    console.log("✅ El año ingresado es bisiesto.");
  } else {
    console.log("⚠️ El año ingresado no es bisiesto.");
  }
}

// Pruebas
esBisiesto(2024);  // ✅
esBisiesto(1900);  // ⚠️
esBisiesto(2000);  // ✅
esBisiesto(-5);    // ❌

function evaluarSet(m, n) {
  // Validación básica
  if (m < 0 || n < 0 || m > 7 || n > 7) {
    console.log("❌ Resultado inválido.");
    return;
  }

  // Caso 7-6 válido
  if ((m === 7 && n === 6) || (n === 7 && m === 6)) {
    console.log(m > n ? "✅ A ganó el set." : "✅ B ganó el set.");
    return;
  }

  // Caso 7-5 válido
  if ((m === 7 && n === 5) || (n === 7 && m === 5)) {
    console.log(m > n ? "✅ A ganó el set." : "✅ B ganó el set.");
    return;
  }

  // Caso 6 con diferencia de 2
  if (m === 6 && n <= 4) {
    console.log("✅ A ganó el set.");
    return;
  }

  if (n === 6 && m <= 4) {
    console.log("✅ B ganó el set.");
    return;
  }

  // Si no se cumple ninguna condición de victoria
  if ((m < 6 && n < 6) || (m === n && m < 6)) {
    console.log("⏳ El set todavía no termina.");
    return;
  }

  // Cualquier otro caso
  console.log("❌ Resultado inválido.");
}

// Pruebas
evaluarSet(6, 4); // ✅ A ganó
evaluarSet(7, 5); // ✅ A ganó
evaluarSet(7, 6); // ✅ A ganó
evaluarSet(5, 5); // ⏳
evaluarSet(8, 6); // ❌
