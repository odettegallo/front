// Clase para gestionar una sala de cine
class Sala {
  constructor(id, capacidad) {
    this.id = id;
    this.capacidad = capacidad;
    this.asientosDisponibles = Array.from({ length: capacidad }, (_, i) => i + 1);
    this.asientosReservados = [];
  }

  // Método para reservar un asiento
  reservarAsiento(asiento) {
    const indiceAsiento = this.asientosDisponibles.indexOf(asiento);
    if (indiceAsiento > -1) {
      this.asientosDisponibles.splice(indiceAsiento, 1);
      this.asientosReservados.push(asiento);
      console.log(`✅ Asiento ${asiento} reservado en la sala ${this.id}.`);
      return true;
    } else {
      console.log(`❌ El asiento ${asiento} no está disponible en la sala ${this.id}.`);
      return false;
    }
  }

  // Método para cancelar una reserva
  cancelarReserva(asiento) {
    const indiceAsiento = this.asientosReservados.indexOf(asiento);
    if (indiceAsiento > -1) {
      this.asientosReservados.splice(indiceAsiento, 1);
      this.asientosDisponibles.push(asiento);
      this.asientosDisponibles.sort((a, b) => a - b);
      console.log(`✅ Reserva del asiento ${asiento} cancelada en la sala ${this.id}.`);
      return true;
    } else {
      console.log(`❌ El asiento ${asiento} no está reservado en la sala ${this.id}.`);
      return false;
    }
  }

  // Método para mostrar los asientos disponibles
  mostrarDisponibles() {
    console.log(`Asientos disponibles en la sala ${this.id}: ${this.asientosDisponibles.join(', ')}`);
    console.log(`Total de asientos disponibles: ${this.asientosDisponibles.length}`);
  }
}

// Clase para gestionar el cine completo
class Cine {
  constructor(nombre) {
    this.nombre = nombre;
    this.salas = {};
  }

  // Método para agregar una sala al cine
  agregarSala(sala) {
    this.salas[sala.id] = sala;
    console.log(`🎬 Sala ${sala.id} con capacidad para ${sala.capacidad} asientos añadida al cine.`);
  }

  // Método para encontrar una sala por su ID
  obtenerSala(id) {
    return this.salas[id];
  }
}

// --- Simulación ---

// 1. Crear una instancia del cine
const cineLocal = new Cine("Cine Oasis");

// 2. Crear instancias de salas y agregarlas al cine
const sala1 = new Sala("Sala 1", 50);
const sala2 = new Sala("Sala 2", 30);

cineLocal.agregarSala(sala1);
cineLocal.agregarSala(sala2);

console.log("\n--- Estado inicial de las salas ---");
sala1.mostrarDisponibles();
sala2.mostrarDisponibles();

// 3. Simular reservas en la Sala 1
console.log("\n--- Proceso de reservas en Sala 1 ---");
sala1.reservarAsiento(10); // Reserva exitosa
sala1.reservarAsiento(25); // Reserva exitosa
sala1.reservarAsiento(10); // Intento de reservar un asiento ya ocupado
sala1.reservarAsiento(55); // Intento de reservar un asiento que no existe

console.log("\n--- Estado después de las reservas en Sala 1 ---");
sala1.mostrarDisponibles();

// 4. Simular cancelación de reserva en la Sala 1
console.log("\n--- Cancelación de reserva en Sala 1 ---");
sala1.cancelarReserva(10); // Cancelación exitosa
sala1.cancelarReserva(50); // Intento de cancelar un asiento que no está reservado

console.log("\n--- Estado final de la Sala 1 ---");
sala1.mostrarDisponibles();

// 5. Mostrar el estado de una sala diferente
console.log("\n--- Estado de la Sala 2 ---");
sala2.mostrarDisponibles();
sala2.reservarAsiento(5);
sala2.reservarAsiento(15);
sala2.mostrarDisponibles();
