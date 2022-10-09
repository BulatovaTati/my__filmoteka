import 'swiper/swiper-bundle.css';
new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  preloadImages: false,
});
