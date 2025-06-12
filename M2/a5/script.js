function mostrarFecha() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses empiezan desde 0
    const anio = fecha.getFullYear();
    
    // Formatear la fecha como dd/mm/yyyy
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    
    // Mostrar la fecha en el elemento con id "fecha"
    document.getElementById("fecha").innerText = fechaFormateada;

alert("La fecha actual es: " + fechaFormateada);
}