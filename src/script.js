// Función para iniciar el contador en días, horas, minutos y segundos
function iniciarContador() {
    const fechaFiesta = new Date('2024-07-27'); // Fecha de la fiesta
    const hoy = new Date();
    const diferencia = fechaFiesta - hoy;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById('contador').textContent = ` ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  }
  window.onload = function() {
    iniciarContador();
    setInterval(iniciarContador, 1000); // Actualizar el contador cada segundo
  };