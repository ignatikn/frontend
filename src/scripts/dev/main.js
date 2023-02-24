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

const contactsMap = document.querySelector("#js-contactsMap");
if (contactsMap) {
  const mapStyles = []; //здесь должен быть задан JSON со стилями
  const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
  const mapOptions = {
    center: mapCenter,
    disableDefaultUI: true,
    draggable: true,
    gestureHandling: "cooperative",
    scrollwheel: false,
    styles: mapStyles,
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  };
  const map = new google.maps.Map(contactsMap, mapOptions);
}