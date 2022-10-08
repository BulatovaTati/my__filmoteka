// const toTopButton = document.querySelector('.scroll-to-top');

// window.onscroll = () => changeScrollButtonVisibility();

// toTopButton.addEventListener('click', () =>
//   document.getElementById('header').scrollIntoView()
// );

// function changeScrollButtonVisibility() {
//   const offsetTrigger = 80;
//   const pageOffset = window.pageYOffset;

//   if (pageOffset > offsetTrigger) {
//     toTopButton.classList.remove('js-transparent');
//   } else {
//     toTopButton.classList.add('js-transparent');
//   }
// }

import throttle from 'lodash.throttle';

const btn = document.querySelector('.scrolltop__btn');
window.addEventListener('scroll', throttle(onScroll, 150));

function onScroll() {
  const minimumPxToScroll = 150;
  if (window.scrollY > minimumPxToScroll) {
    btn.classList.add(`transitionBtn`);
    btn.classList.remove(`is-hidden-button`);
  }
  if (window.scrollY < minimumPxToScroll) {
    btn.classList.add(`is-hidden-button`);
  }
}

export function toTop() {
  window.scrollTo(0, 0);
}

btn.addEventListener('click', toTop); 