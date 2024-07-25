$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 2000, // Time in milliseconds (2000ms = 2 seconds)
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
