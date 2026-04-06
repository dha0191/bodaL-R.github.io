const targetDate = new Date('June 6, 2026 14:00:00').getTime();

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
        document.getElementById('countdown').innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);