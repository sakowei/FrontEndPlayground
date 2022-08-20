const inputs = document.querySelectorAll('input');

let validate = (e) => {
  e.target.setAttribute(
    'aria-valid',
    e.target.value ? 'true' : 'false'
  );
}

inputs.forEach(input => input.addEventListener('keyup', validate));
