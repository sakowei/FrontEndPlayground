window.onload = function () {
  let status = false;
  const captcha = document.querySelector('#captcha');
  const handle = document.querySelector('#handle');
  const button = document.querySelector('#handle span');

  button.addEventListener('mousedown', () => {status = true;});

  window.addEventListener('mousemove', (e) => {
    if (status) {
      const offsetLeft = handle.getBoundingClientRect().left;
      const btnWidth = button.getBoundingClientRect().width;

      captcha.style.setProperty('--moved', `${e.clientX - offsetLeft - btnWidth / 2}px`);
    }
  });

  window.addEventListener('mouseup', (e) => {
    if (status) {
      const finalOffset = e.clientX - handle.getBoundingClientRect().left;
      (finalOffset >= 430 && finalOffset <= 450) ?
      captcha.classList.add('pass') :
      captcha.style.setProperty('--moved', '0px');
      status = false;
    }
  });
}
