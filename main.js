// Declaración de variables y arrays
const reservas = []; // Array para almacenar las reservas

// Solicitar datos y registrar la reserva
function registrarReserva() {
    const nombre = prompt("Por favor, ingrese su nombre:");
    if (!nombre) {
        alert("El nombre es obligatorio para registrar la reserva.");
        return;
    }

    const sede = prompt("¿En qué sede desea reservar? (Santiago o Concepción)");
    if (sede !== "Santiago" && sede !== "Concepción") {
        alert("Por favor, ingrese una sede válida: Santiago o Concepción.");
        return;
    }

    const confirmacion = confirm(`¿Desea confirmar su reserva en la sede ${sede}?`);
    if (confirmacion) {
        reservas.push({ nombre, sede });
        alert(`Reserva confirmada para ${nombre} en la sede ${sede}.`);
    } else {
        alert("Reserva cancelada.");
    }
}

// Mostrar todas las reservas en consola
function mostrarReservas() {
    console.clear(); // Limpiar consola
    console.log("Reservas registradas:");
    if (reservas.length === 0) {
        console.log("No hay reservas registradas.");
    } else {
        reservas.forEach((reserva, index) => {
            console.log(`${index + 1}. Nombre: ${reserva.nombre}, Sede: ${reserva.sede}`);
        });
    }
}

// Función 3: Ejecutar acciones al hacer clic en el botón
function inicializarSimulador() {
    document.getElementById("reserva-btn").addEventListener("click", () => {
        registrarReserva();
        mostrarReservas();
    });
}

// Inicializar el simulador
inicializarSimulador();









