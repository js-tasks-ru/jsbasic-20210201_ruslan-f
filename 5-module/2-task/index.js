function toggleText() {
  // ваш код...
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  
  btn.addEventListener('click', function () {
    text.hidden = !text.hidden;
  })
}
