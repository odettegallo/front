// for (i = 0; i < arregloNumeros.length; )

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

