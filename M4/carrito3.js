// Definir productos y sus precios
const producto1 = "Camiseta";
const precio1 = 15000;

const producto2 = "Pantalón";
const precio2 = 30000;

const producto3 = "Zapatillas";
const precio3 = 55000;

// Variables para el cálculo del total
let totalNeto = 0;
let continuarComprando;

do {
    // Mostrar el menú al usuario
    const seleccion = prompt(`
        Bienvenido al Carrito de Compras
        Por favor, selecciona un producto:
        1. ${producto1} ($${precio1})
        2. ${producto2} ($${precio2})
        3. ${producto3} ($${precio3})
        
        Presiona 'S' para salir o cualquier otra tecla para continuar.
    `);

    // El usuario decide salir
    if (seleccion && seleccion.toUpperCase() === 'S') {
        continuarComprando = false;
        break; // Sale del bucle
    }

    // El usuario selecciona un producto
    if (seleccion === "1" || seleccion === "2" || seleccion === "3") {
        const cantidad = parseInt(prompt(`
            Has seleccionado el producto ${seleccion}.
            Ingresa la cantidad que deseas:
        `));

        if (!isNaN(cantidad) && cantidad > 0) {
            let precioProducto;
            switch (seleccion) {
                case "1":
                    precioProducto = precio1;
                    break;
                case "2":
                    precioProducto = precio2;
                    break;
                case "3":
                    precioProducto = precio3;
                    break;
            }
            totalNeto += precioProducto * cantidad;
            alert(`
                Se ha agregado el producto al carrito.
                Total acumulado: $${totalNeto}
            `);
        } else {
            alert("Cantidad no válida. Por favor, ingresa un número mayor a 0.");
        }
    } else {
        alert("Opción no válida. Por favor, selecciona un número del 1 al 3.");
    }
} while (continuarComprando !== false);

// Calcular valores finales
const iva = totalNeto * 0.19;
const despacho = totalNeto > 50000 ? 0 : 3000;
const totalFinal = totalNeto + iva + despacho;

// Mostrar resumen de la compra por consola
console.log(`
    --- Resumen de tu Compra ---
    Total Neto: $${totalNeto.toFixed(2)}
    IVA (19%): $${iva.toFixed(2)}
    Costo de Despacho: $${despacho.toFixed(2)}
    ---------------------------
    Total Final: $${totalFinal.toFixed(2)}
`);