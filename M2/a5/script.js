function mostrarFecha() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0
    const anio = fecha.getFullYear();
    
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    
    document.getElementById("fecha").innerText = 'Hoy es $fechaFormateada y la hora es ' + fecha.toLocaleTimeString();
    document.getElementById("fecha").style.color = "blue";

    alert("La fecha y hora actual es: " + fechaFormateada + ' ' + fecha.toLocaleTimeString());
    document.getElementById("fecha").style.fontSize = "20px";
}