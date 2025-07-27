//Odette Gallo Martínez// Ejercicio de carrito de compras
// Este código simula un carrito de compras con productos, selección, cantidad y cálculo de total
// Paso 1: Crear productos
let producto1 = "Mouse inalámbrico";
let precio1 = 12000;

let producto2 = "Teclado mecánico";
let precio2 = 25000;

let producto3 = "Monitor LED 24''";
let precio3 = 80000;

// Paso 2: Selección y cantidad
let productoSeleccionado = producto2; // Simulamos que el usuario eligió el teclado
let cantidad = 2;
let precioUnitario;

// Determinar el precio según el producto
if (productoSeleccionado === producto1) {
  precioUnitario = precio1;
} else if (productoSeleccionado === producto2) {
  precioUnitario = precio2;
} else if (productoSeleccionado === producto3) {
  precioUnitario = precio3;
} else {
  console.log("Producto no válido");
}

// Paso 3: Cálculos
let valorNeto = precioUnitario * cantidad;
let iva = valorNeto * 0.19;
let despacho;

// Condicional para despacho
if (valorNeto >= 50000) {
  despacho = 0; // Envío gratis
} else {
  despacho = 5000;
}

let totalFinal = valorNeto + iva + despacho;

// Mostrar resultados
console.log("Producto:", productoSeleccionado);
console.log("Cantidad:", cantidad);
console.log("Valor Neto:", valorNeto);
console.log("IVA (19%):", iva);
console.log("Despacho:", despacho);
console.log("Total a pagar:", totalFinal);


