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

