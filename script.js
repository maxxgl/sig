// Header Color Change ===============================================
document.documentElement.dataset.scroll = 0;

document.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY;
});

// Countdown Timer ===================================================
const RACE_START = Date.parse('Feb 16 2020 10:00 GMT+0900');
const COUNTDOWN = document.getElementById('countdown-body')

setInterval(() => {
  const DELTA = RACE_START - Date.parse(new Date());
  const seconds = Math.floor( (DELTA/1000) % 60 );
  const minutes = Math.floor( (DELTA/1000/60) % 60 );
  const hours = Math.floor( (DELTA/(1000*60*60)) % 24 );
  const days = Math.floor( DELTA/(1000*60*60*24) );

  COUNTDOWN.innerHTML = `
    <span>${days < 10 ? '0' : ''}${days}:</span>
    <span>${hours < 10 ? '0' : ''}${hours}:</span>
    <span>${minutes < 10 ? '0' : ''}${minutes}:</span>
    <span>${seconds < 10 ? '0' : ''}${seconds}</span>
  `;
}, 1000);
