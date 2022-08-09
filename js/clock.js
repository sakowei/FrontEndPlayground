window.onload = () => {
  var hour = document.getElementById('hrs');
  var minute = document.getElementById('min');
  var second = document.getElementById('sec');

  setInterval(() => {
    let date = new Date();
    let HH = date.getHours() % 12;
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    hour.style.transform = 'rotate(' + (HH * 30) +'deg)';
    minute.style.transform = 'rotate(' + (MM * 6) +'deg)';
    second.style.transform = 'rotate(' + (SS * 6) +'deg)';
  }, 1000);
}
