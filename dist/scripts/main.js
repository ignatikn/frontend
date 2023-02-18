const root = document.documentElement;
const navToggle = document.querySelector("#js-navToggle");
navToggle.addEventListener("click", function () {
  root.classList.toggle("show-nav");
});


const swipers = document.querySelectorAll(".js-swiper");
swipers.forEach(function (swpr) {
  new Swiper(swpr, {
    updateOnWindowResize: true,
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 0,
    speed: 500,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
      disabledClass: "arrow--disabled"
    }
  });
});