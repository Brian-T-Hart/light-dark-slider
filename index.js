var container = document.getElementById('main-container');
var slider = document.getElementById('slider');

slider.addEventListener('click', function(e) {
  if (e.target.classList.contains('slider-on')) {
    slider.classList.add('slider-off');
    slider.classList.remove('slider-on');
    container.classList.remove('light');
    container.classList.add('dark');
  }

  else {
    slider.classList.add('slider-on');
    slider.classList.remove('slider-off');
    container.classList.add('light');
    container.classList.remove('dark');
  }
});