const menu = document.querySelector(".menu-icon");
let clicked = false;
menu.addEventListener("click", function () {
  clicked = !clicked;
  if (clicked) {
    const html = `<span class='menu-links'>
              <a class='menu-link' href='/'>Home Page</a>
              <a class='menu-link' href='/nutrition'>Nutrition App</a>
              <a class='menu-link' href='/timeup'>TimeUp</a>
              <a class='menu-link' href='/triviagame'>Trivia Game</a>
          </span>`;
    menu.insertAdjacentHTML("beforeend", html);
  } else if (!clicked) {
    menu.innerHTML = "";
    const html = `<span class='menu-icon'>
    <i class='fa fa-bars'></i>
  </span>`;
    menu.insertAdjacentHTML("afterbegin", html);
  }
});
