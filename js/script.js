const targetDate = new Date('Aug 15, 2026 00:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = day;
  document.getElementById('hours').innerText = hour;
  document.getElementById('minutes').innerText = minute;
  document.getElementById('seconds').innerText = second;
}, 1000);
