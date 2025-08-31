//arreglo de potencias de 2

function crearArreglo(n) {
  let arreglo = [1];
  for (let i = 1; i < n; i++) {
    arreglo[i] = arreglo[i - 1] * 2;
  }
  return arreglo;
}

console.log(crearArreglo(5)); // [1, 2, 4, 8, 16]

//número mayor en un arreglo

const arregloDiez = [1024, 2, 4, 8, 16, 32, 64, 128, 256, 512];

let mayor = 0;
for (let i = 0; i < arregloDiez.length; i++) {
  if (arregloDiez[i] > mayor) {
    mayor = arregloDiez[i];
  }
}

console.log("El número mayor es ",mayor); // 1024

//día de la semana

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numeroDia;

do {
  numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para obtener el día de la semana:"));

  if (numeroDia >= 1 && numeroDia <= 7) {
    alert("El día es: " + diasSemana[numeroDia - 1]);
    break; // Salir del bucle una vez que se ingrese un número válido
  } else {
    alert("Número inválido, por favor ingrese un número del 1 al 7.");
  }
} while (true);

//buscar un número en un arreglo

const arregloNumeros = [1024, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numero = prompt("Ingrese un número para buscar si se encuentra en el arreglo:");
for (let i = 0; i < arregloNumeros.length; i++) {
  if (arregloNumeros[i] == numero) {
    alert("El número " + numero + " se encuentra en el arreglo.");
    break;
  }
  if (i == arregloNumeros.length - 1) {
    alert("El número " + numero + " no se encuentra en el arreglo.");
  }
}

//ordenar un arreglo de menor a mayor

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