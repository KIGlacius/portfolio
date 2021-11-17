const init = function () {
  const namePopinKayl = document.querySelector(".name-popin__kayl");
  const namePopinKaradjian = document.querySelector(".name-popin__karadjian");
  const arrowDownSection1 = document.querySelector(".angle-down-svg");
  const arrowUpMain = document.querySelector(".angles-up-svg");
  const section1 = document.querySelector(".section-1");
  const slides = document.querySelectorAll(".project-slider");
  const allSections = document.querySelectorAll(".app__container");
  const arrowLeft = document.querySelector(".left-arrow");
  const arrowRight = document.querySelector(".right-arrow");
  const body = document.querySelector("body");
  let curSlide = 0;

  window.addEventListener("load", () => {
    setTimeout(() => {
      namePopinKayl.style.left = "0";
      namePopinKayl.style.transition = "1s";
      namePopinKayl.style.transitionTimingFunction = "ease-out";
      namePopinKaradjian.style.right = "0";
      namePopinKaradjian.style.transition = "1s";
      namePopinKaradjian.style.transitionTimingFunction = "ease-out";
    }, 750);
  });

  arrowDownSection1.addEventListener("click", () => {
    section1.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  arrowUpMain.addEventListener("click", () => {
    body.scrollIntoView({ behavior: "smooth" });
  });

  setInterval(() => {
    arrowDownSection1.style.marginTop = "35px";
    arrowDownSection1.style.transition = ".5s";
    arrowDownSection1.style.transitionTimingFunction = "ease-out";
  }, 1000);

  setInterval(() => {
    arrowDownSection1.style.marginTop = "25px";
  }, 2000);

  setInterval(() => {
    arrowUpMain.style.marginTop = "25px";
  }, 1000);

  setInterval(() => {
    arrowUpMain.style.marginTop = "35px";
    arrowUpMain.style.transition = ".5s";
    arrowUpMain.style.transitionTimingFunction = "ease-out";
  }, 2000);

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting === true) {
      entry.target.classList.remove("hidden-section");
      entry.target.style.transition = ".5s";
    }

    if (entry.isIntersecting === false) {
      entry.target.classList.add("hidden-section");
      entry.target.style.transition = ".5s";
    }
  };

  const obsOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(revealSection, obsOptions);
  allSections.forEach(function (section) {
    observer.observe(section);
    section.classList.add("hidden-section");
  });

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  arrowLeft.addEventListener("click", () => {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
    } else {
      curSlide--;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });

  arrowRight.addEventListener("click", () => {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });
};

init();
