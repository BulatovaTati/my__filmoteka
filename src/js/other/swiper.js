// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  // speed: 500,

  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
