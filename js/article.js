$(() => {
  $('.csl-item').eq(0).addClass('active');

  var total =  $('.csl-item').length;
  var current = 0;

  function setSlide (prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }

    $('.csl-item').eq(prev).removeClass('active');
    $('.csl-item').eq(slide).addClass('active');
  }

  $('#right').on('click', () => {
    let next = current;
    current++;
    setSlide(next, current);;
  });

  $('#left').on('click', () => {
    let next = current;
    current--;
    setSlide(next, current);;
  });
});
