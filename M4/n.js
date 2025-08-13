function crearArreglo(n) {
  let arreglo = [1];
  for (let i = 1; i < n; i++) {
    arreglo[i] = arreglo[i - 1] * 2;
  }
  return arreglo;
}

console.log(crearArreglo(5)); // [1, 2, 4, 8, 16]

const arregloDiez = [1024, 2, 4, 8, 16, 32, 64, 128, 256, 512];

let mayor = 0;
for (let i = 0; i < arregloDiez.length; i++) {
  if (arregloDiez[i] > mayor) {
    mayor = arregloDiez[i];
  }
}

console.log("El número mayor es ",mayor); // 1024

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

