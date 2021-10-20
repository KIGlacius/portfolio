const init = function () {
  const menu = document.querySelector('.menu-icon');
  let n = 1;
  let clicked = false;

  const changePicStart = () => {
    const pic = document.querySelector(`.pic-${n - 1}`);
    const newPic = document.querySelector(`.pic-${n}`);
    pic.classList.add('hidden');
    newPic.classList.remove('hidden');
    newPic.style.transition = 'all 2s';
  };

  const changePicEnd = () => {
    const pic = document.querySelector(`.pic-${n - 1}`);
    pic.classList.add('hidden');
    n = 1;
    const newPic = document.querySelector(`.pic-${n}`);
    newPic.classList.remove('hidden');
    newPic.style.transition = 'all 2s';
  };

  menu.addEventListener('click', function () {
    clicked = !clicked;
    if (clicked) {
      const html = `<span class='menu-links'>
              <a class='menu-link' href='/'>Home Page</a>
              <a class='menu-link' href='/triviagame'>Trivia Game</a>
              <a class='menu-link' href='/timeup'>TimeUp</a>
          </span>`;
      menu.insertAdjacentHTML('beforeend', html);
    } else if (!clicked) {
      menu.innerHTML = '';
      const html = `<span class='menu-icon'>
    <i class='fa fa-bars'></i>
  </span>`;
      menu.insertAdjacentHTML('afterbegin', html);
    }
  });

  setInterval(() => {
    n++;
    if (n > 4) {
      changePicEnd();
    } else {
      changePicStart();
    }
  }, 3000);
};

init();
