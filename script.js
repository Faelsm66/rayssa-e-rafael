
function updateCounter() {
  const startDate = new Date("2024-04-16T22:00:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerText =
    `Estamos juntos há ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💕`;
}

setInterval(updateCounter, 1000);
updateCounter();
