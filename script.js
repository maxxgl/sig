// Header Color Change ===============================================
document.documentElement.dataset.scroll = 0;

document.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY;
});

// Countdown Timer ===================================================
const RACE_START = Date.parse('Jan 16 2020 10:00 GMT+0900');
const COUNTDOWN = document.getElementById('countdown-body')

setInterval(() => {
  const DELTA = RACE_START - Date.parse(new Date());
  const seconds = Math.floor( (DELTA/1000) % 60 );
  const minutes = Math.floor( (DELTA/1000/60) % 60 );
  const hours = Math.floor( (DELTA/(1000*60*60)) % 24 );
  const days = Math.floor( DELTA/(1000*60*60*24) );

  COUNTDOWN.innerHTML = `
    <tr>
      <td>${days}</td>
      <td>Day${days === 1 ? '' : 's'}</td>
    </tr>
    <tr>
      <td>${hours}</td>
      <td>Hour${hours === 1 ? '' : 's'}</td>
    </tr>
      <tr>
      <td>${minutes}</td>
      <td>Minute${minutes === 1 ? '' : 's'}</td>
    </tr>
    <tr>
      <td>${seconds}</td>
      <td>Second${seconds === 1 ? '' : 's'}</td>
    </tr>
  `;
}, 1000);
