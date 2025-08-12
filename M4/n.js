function crearArreglo(n) {
  let arreglo = [1];
  for (let i = 1; i < n; i++) {
    arreglo[i] = arreglo[i - 1] * 2;
  }
  return arreglo;
}

console.log(crearArreglo(5)); // [1, 2, 4, 8, 16]
