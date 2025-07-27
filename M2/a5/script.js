function mostrarFecha() {
const fechain = Date(); 
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const hora = {hour: '2-digit'};
const hr = "horas";
const minuto = {minute: '2-digit'};
const min = "minutos";
const segundo = {second: '2-digit'};
const seg = "segundos";
const fecha = new Date(fechain).toLocaleDateString('es-ES', opciones, hora, hr, minuto, min, segundo, seg);
return fecha, `Hoy es ${fecha} y son las ${new Date().toLocaleTimeString('es-ES', hora)} ${hr}, ${new Date().toLocaleTimeString('es-ES', minuto)} ${min} y ${new Date().toLocaleTimeString('es-ES', segundo)} con ${seg}.`;
}
console.log(mostrarFecha());
alert(mostrarFecha());

function countdown() {
    const fechaFinal = new Date("2026-01-01T00:00:00");
    const ahora = new Date();
    const diferencia = fechaFinal - ahora;

    if (diferencia <= 0) {
        return "¡Feliz Año Nuevo!";
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    // const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60))
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return `Faltan ${dias} días, ${minutos} minutos y ${segundos} segundos para el Año Nuevo.`;

}
// console.log(countdown());
// alert(countdown());

// let div =document.getElementById("tiemporestante");
// div.innerHTML = countdown();

document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById("hora");
    if (div) {
        div.innerHTML = countdown();
    } else {
        console.error("El elemento con id 'tiemporestante' no se encontró.");
    }
});

    setInterval(() => {
        let div = document.getElementById("tiemporestante");
        if (div) {
            div.innerHTML = countdown();
        } else {
            console.error("El elemento con id 'tiemporestante' no se encontró.");
        }
    }, 1000); // Actualiza cada segundo

