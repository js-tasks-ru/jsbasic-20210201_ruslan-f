function initCarousel() {
  // ваш код...
  let list = document.querySelector('.carousel__inner');
  let listItems = document.querySelectorAll('.carousel__slide');

  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');

  let step = 0;
  
  checks ()
  function checks () {
    let itemWidth = list.offsetWidth * step;
    list.style.transform = `translateX( ${-itemWidth}px )`;

    if (listItems[step] == listItems[listItems.length -1]) {
      right.style.display = 'none';
    } else {
      right.style.display = '';
    }

    if (listItems[step] == listItems[0]) {
      left.style.display = 'none';
    } else {
      left.style.display = '';
    }
  }

  right.addEventListener('click', function() {
    step++;

    checks ()
  })

  left.addEventListener('click', function() {
    step--;

    checks ()
  })
}
