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

try {
console.log(sumatoria(10)); // 55
console.log(sumatoria(3)); // 6
console.log(sumatoria(h));
} catch (e) {
  console.error("Error:", e.message);
}


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

try {
// Ejemplo de uso
esPrimo(7);  // Debería imprimir: 7 es un número primo.
esPrimo(10); // Debería imprimir: 10 no es un número primo.
esPrimo(2);  // Debería imprimir: 2 es un número primo.
esPrimo(1);  // Debería imprimir: 1 no es un número primo.
esPrimo(i)
} catch (e) {
  console.error("Error:", e.message);
}

// 3.- Cree una función que dado un número n entero y menor 
// que 100 imprima la cuenta regresiva, es decir si n es 5 deberá 
// imprimir 5,4,3,2,1.  

function cuentaRegresiva(n) {
  if (n < 1 || n >= 100 || !Number.isInteger(n)) {
    throw new Error("El número debe ser un entero entre 1 y 99.");
  }
  
  let resultado = [];
  for (let i = n; i > 0; i--) {
    resultado.push(i);
  }
  
  return resultado.join(",");
}

try {
console.log(cuentaRegresiva(5)); // "5,4,3,2,1"
console.log(cuentaRegresiva(3)); // "3,2,1"
console.log(cuentaRegresiva(i));
} catch (e) {
  console.error("Error:", e.message);
}

// 4.- Construya una función que dado un número n entero 
// mayor que 10 y menor que 1000 calcule la sumatoria de todos 
// los números pares contenidos en el rango. 

function sumatoriaPares(n) {
  if (n <= 10 || n >= 1000 || !Number.isInteger(n)) {
    throw new Error("El número debe ser un entero mayor que 10 y menor que 1000.");
  }
  
  let suma = 0;
  for (let i = 2; i <= n; i += 2) {
    suma += i;
  }
  
  return suma;
} 

try {
console.log(sumatoriaPares(10));
} catch (e) {
  console.error("Error:", e.message);
}
try {
console.log(sumatoriaPares(20)); // 110
console.log(sumatoriaPares(h));
} catch (e) {
  console.error("Error:", e.message);
}

//  Cree una función que permite dado un número n imprima la 
// tabla de multiplicar de dicho número hasta el 12.  

function tablaMultiplicar(n) {
  if (n < 1 || n > 100 || !Number.isInteger(n)) {
    throw new Error("El número debe ser un entero entre 1 y 100.");
  }
  
  let resultado = [];
  for (let i = 1; i <= 12; i++) {
    resultado.push(`${n} x ${i} = ${n * i}`);
  }
  
  return resultado.join("\n");
} 

try {
console.log(tablaMultiplicar(5));
console.log(tablaMultiplicar(12));
console.log(tablaMultiplicar(h));
}catch (e) {
  console.error("Error:", e.message);
}

// Cree una función que dado un arreglo de números desordenados 
// los ordene ascendentemente.

function ordenarArreglo(arreglo) {
  if (!Array.isArray(arreglo) || arreglo.some(num => typeof num !== 'number')) {
    throw new Error("El input debe ser un arreglo de números.");
  }
  
  return arreglo.sort((a, b) => a - b);
} 
try {
console.log(ordenarArreglo([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(ordenarArreglo([10, 20, 5, 15])); // [5, 10, 15, 20]
console.log(ordenarArreglo(h, [3, 1, 4, 2])); // Error
} catch (e) {
  console.error("Error:", e.message);
}