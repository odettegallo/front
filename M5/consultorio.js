// Requerimiento 3: Crear una función constructora para cada objeto.

// Función constructora para Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  // Requerimiento 4: Implementar métodos getters y setters para poder acceder y modificar los datos.
  
  // Getters
  this.getNombre = function() {
    return _nombre;
  };
  this.getEdad = function() {
    return _edad;
  };
  this.getRut = function() {
    return _rut;
  };
  this.getDiagnostico = function() {
    return _diagnostico;
  };

  // Setters
  this.setNombre = function(nuevoNombre) {
    _nombre = nuevoNombre;
  };
  this.setEdad = function(nuevaEdad) {
    _edad = nuevaEdad;
  };
  this.setRut = function(nuevoRut) {
    _rut = nuevoRut;
  };
  this.setDiagnostico = function(nuevoDiagnostico) {
    _diagnostico = nuevoDiagnostico;
  };
}

// Función constructora para Consultorio
function Consultorio(nombre) {
  var _nombreConsultorio = nombre;
  var _pacientes = []; // Array para almacenar los objetos de Paciente

  // Getter para el nombre del consultorio
  this.getNombre = function() {
    return _nombreConsultorio;
  };

  // Método para agregar un paciente al consultorio
  this.agregarPaciente = function(paciente) {
    _pacientes.push(paciente);
  };
  
  // Getter para el array de pacientes
  this.getPacientes = function() {
    return _pacientes;
  };
}

// Requerimiento 2: Crear un método mediante la propiedad prototype.

// Método para buscar un paciente por nombre
Consultorio.prototype.buscarPaciente = function(nombreBuscado) {
  var pacienteEncontrado = null;
  this.getPacientes().forEach(function(paciente) {
    if (paciente.getNombre().toLowerCase() === nombreBuscado.toLowerCase()) {
      pacienteEncontrado = paciente;
    }
  });

  if (pacienteEncontrado) {
    console.log(`\n--- Búsqueda de Paciente ---`);
    console.log(`Nombre: ${pacienteEncontrado.getNombre()}`);
    console.log(`Edad: ${pacienteEncontrado.getEdad()}`);
    console.log(`RUT: ${pacienteEncontrado.getRut()}`);
    console.log(`Diagnóstico: ${pacienteEncontrado.getDiagnostico()}`);
  } else {
    console.log(`\n--- Búsqueda de Paciente ---`);
    console.log(`No se encontró ningún paciente con el nombre: ${nombreBuscado}`);
  }
};

// Método para mostrar todos los pacientes
Consultorio.prototype.mostrarTodos = function() {
  console.log(`\n--- Lista de todos los Pacientes ---`);
  this.getPacientes().forEach(function(paciente, index) {
    console.log(`\nPaciente #${index + 1}`);
    console.log(`Nombre: ${paciente.getNombre()}`);
    console.log(`Edad: ${paciente.getEdad()}`);
    console.log(`RUT: ${paciente.getRut()}`);
    console.log(`Diagnóstico: ${paciente.getDiagnostico()}`);
  });
};


// Requerimiento 5: Instanciar cada objeto utilizando la instrucción new.

// Instanciar el consultorio
var consultorioPrincipal = new Consultorio("Clínica del Bienestar");

// Instanciar algunos pacientes
var paciente1 = new Paciente("María López", 35, "12345678-9", "Alergia estacional");
var paciente2 = new Paciente("Juan Pérez", 50, "98765432-1", "Hipertensión");
var paciente3 = new Paciente("Carlos Ruiz", 28, "23456789-0", "Gripe común");

// Agregar los pacientes al consultorio
consultorioPrincipal.agregarPaciente(paciente1);
consultorioPrincipal.agregarPaciente(paciente2);
consultorioPrincipal.agregarPaciente(paciente3);

// --- Uso de los métodos para mostrar los datos ---

// Mostrar todos los pacientes inicialmente
consultorioPrincipal.mostrarTodos();

// Ejemplo de búsqueda de un paciente por nombre
consultorioPrincipal.buscarPaciente("Juan Pérez");

// Ejemplo de búsqueda de un paciente que no existe
consultorioPrincipal.buscarPaciente("Pedro Gómez");

// Ejemplo de uso de setters para modificar datos
console.log("\n--- Modificación de datos ---");
console.log("Datos originales del Paciente 1:", paciente1.getDiagnostico());
paciente1.setDiagnostico("Asma");
console.log("Datos modificados del Paciente 1:", paciente1.getDiagnostico());

// Mostrar la lista actualizada para verificar la modificación
consultorioPrincipal.mostrarTodos();