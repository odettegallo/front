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
console.log(sumatoriaPares(20)); // 110
console.log(sumatoriaPares(10)); // 30
} catch (e) {
  console.error("Error:", e.message);
}
try {
console.log(sumatoriaPares(h));
} catch (e) {
  console.error("Error:", e.message);
}
try {
console.log(sumatoriaPares(9));
} catch (e) {
  console.error("Error:", e.message);
}