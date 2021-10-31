const init = function () {
  let n = 1;

  const changePicStart = () => {
    const pic = document.querySelector(`.pic-${n - 1}`);
    const newPic = document.querySelector(`.pic-${n}`);
    pic.classList.add("hidden");
    newPic.classList.remove("hidden");
    newPic.style.transition = "all 2s";
  };

  const changePicEnd = () => {
    const pic = document.querySelector(`.pic-${n - 1}`);
    pic.classList.add("hidden");
    n = 1;
    const newPic = document.querySelector(`.pic-${n}`);
    newPic.classList.remove("hidden");
    newPic.style.transition = "all 2s";
  };

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
