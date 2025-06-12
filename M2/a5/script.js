function mostrarFecha() {
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaMes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  
const anio = ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
const minutos = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
const segundos = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    const fecha = new Date();
    const diaSemanaActual = diaSemana[fecha.getDay()];
    const diaMesActual = diaMes[fecha.getDate() - 1];
    const mesActual = mes[fecha.getMonth()];
    const anioActual = anio[fecha.getFullYear() - 2025];
    const horaActual = fecha.getHours();
    const minutoActual = minutos[fecha.getMinutes()];
    const segundoActual = segundos[fecha.getSeconds()];

    // Formatear la fecha   

    const fechaFormateada = `${diaSemanaActual}, ${diaMesActual} de ${mesActual} de ${anioActual} - ${horaActual}:${minutoActual}:${segundoActual}`;
    // Mostrar la fecha en el elemento con id "fecha"
    document.getElementById("fecha").innerText = fechaFormateada;
    alert("La fecha actual es: " + fechaFormateada);



}
