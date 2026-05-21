function abrirSobreReal() {
    const overlay = document.getElementById('overlay-sobre-real');
    const musica = document.getElementById('musica-invitacion');

    // 1. Iniciar la música inmediatamente
    if (musica) {
        musica.play().catch(error => console.log("Audio block:", error));
    }

    // 2. Paso A: Levantar la solapa (Giro 3D)
    overlay.classList.add('abriendo');

    // 3. Paso B: Esperar a que la solapa termine de girar (1 segundo en CSS)
    // y luego hacer flotar todo el sobre hacia arriba.
    setTimeout(() => {
        overlay.classList.add('flotando');
    }, 1000); // 1000ms = 1s, el tiempo del giro en CSS

    // 4. Paso C: Ocultar el overlay completamente cuando todo termine
    setTimeout(() => {
        overlay.classList.add('oculto');
        // Opcional: quitarlo del DOM para mejorar rendimiento
        // setTimeout(() => overlay.style.display = 'none', 1000);
    }, 2500); // Tiempo total (1s giro + 1.5s flotada en CSS)
}

//contador de fecha
const targetDate = new Date('June 5, 2026 24:00:00').getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos matemáticos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inyectar los resultados en el HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Si la cuenta llega a cero
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "¡hoy es el Gran Día!";
    }
}, 1000);
