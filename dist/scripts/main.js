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

const eventPP = document.querySelector("#js-eventPP");
  if (eventPP) {
    const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
    const closeEventPP = function (event) {
      function close() {
        document.removeEventListener("keyup", closeEventPP);
        eventPP.removeEventListener("click", closeEventPP);
        root.classList.remove("show-event-popup");
      }
      switch (event.type) {
        case "keyup":
          if (event.key === "Escape" || event.keyCode === 27) close();
          break;
        case "click":
          if (
            event.target === this ||
            event.target.classList.contains("js-ppCloseBtn")
          )
            close();
          break;
      }
    };
    eventOpenBtn.addEventListener("click", function () {
      root.classList.add("show-event-popup");
      document.addEventListener("keyup", closeEventPP);
      eventPP.addEventListener("click", closeEventPP);
    });
  }