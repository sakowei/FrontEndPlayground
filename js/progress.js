let circPgs = document.querySelector(".circle-pgs"),
    pgsVal  = document.querySelector(".pgs-value"),
    startVal = 0, endVal = 44, speed = 100;

let progress = setInterval(() => {
  startVal++;
  pgsVal.textContent = `${startVal}%`;
  circPgs.style.background = `conic-gradient(hsl(210, 60%, 50%) ${startVal * 3.6}deg, #ededed 0deg)`;
  if(startVal == endVal) clearInterval(progress);
}, speed);