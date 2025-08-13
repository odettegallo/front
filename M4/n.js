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

let numeroDia = prompt("Ingrese un número del 1 al 7 para obtener el día de la semana:");
while (numeroDia < 0 || numeroDia > 7) {
  alert("Número inválido. Ingrese un número del 1 al 7:");
  numeroDia = prompt("Ingrese un número del 1 al 7 para obtener el día de la semana:");
switch (parseInt(numeroDia)) {
    case 1:
      prompt("El día es: " + diasSemana[0]);
      break;
    case 2:
      prompt("El día es: " + diasSemana[1]);
      break;
    case 3:
      prompt("El día es: " + diasSemana[2]);
      break;
    case 4:
      prompt("El día es: " + diasSemana[3]);
      break;
    case 5:
      prompt("El día es: " + diasSemana[4]);
      break;
    case 6:
      prompt("El día es: " + diasSemana[5]);
      break;
    case 7:
      prompt("El día es: " + diasSemana[6]);
      break;
  }
}

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