// 1.- Construya una función que dado un número n entero y 
// menor que 100 calcule la sumatoria de 1 hasta n. 

function sumatoria(n) {
  if (n < 1 || n >= 100 || !Number.isInteger(n)) {
    throw new Error("El número debe ser un entero entre 1 y 99.");
  }
  
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  
  return suma;
}
console.log(sumatoria(10)); // 55
console.log(sumatoria(3)); // 6

// 2.- Construya una función que imprima si un número es primo 
// o no. Los números primos son aquellos que son divisibles solo 
// por 1 y por sí mismos. 
//@param {number}

 function esPrimo(numero) {
  // 1. Validar que el input sea un número válido y mayor que 1.
  if (isNaN(numero) || numero <= 1) {
    console.log(`${numero} no es un número primo.`);
    return;
  }

  // 2. Optimización: los únicos divisores posibles están entre 2
  // y la raíz cuadrada del número.
  const limite = Math.sqrt(numero);
  for (let i = 2; i <= limite; i++) {
    // 3. Si el número es divisible por 'i', no es primo.
    if (numero % i === 0) {
      console.log(`${numero} no es un número primo.`);
      return;
    }
  }

  // 4. Si el bucle termina, el número es primo.
  console.log(`${numero} es un número primo.`);
}

// Ejemplo de uso
esPrimo(7);  // Debería imprimir: 7 es un número primo.
esPrimo(10); // Debería imprimir: 10 no es un número primo.
esPrimo(2);  // Debería imprimir: 2 es un número primo.
esPrimo(1);  // Debería imprimir: 1 no es un número primo.