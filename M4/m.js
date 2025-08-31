const arregloDesordenado = [1024, 3, 512, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; i < arregloDesordenado.length; i++) {
  for (let j = i + 1; j < arregloDesordenado.length; j++) {
    if (arregloDesordenado[i] > arregloDesordenado[j]) {
      let ordenar = arregloDesordenado[i];
      arregloDesordenado[i] = arregloDesordenado[j];
      arregloDesordenado[j] = ordenar;
    }
  }
}

console.log(arregloDesordenado); // [3, 7, 9, 11, 13, 15, 17, 19, 512, 1024]




// arregloDesordenado.sort(function(a, b) {return a - b;});
// console.log(arregloDesordenado); // [3, 7, 9, 11, 13, 15, 17, 19, 512, 1024]    
// return;

