

localStorage.setItem('settings', JSON.stringify(settings));
console.log(localStorage);

import { getArreyFromlocalStorage } from './queue';
const watchedButton = document.querySelector('.watched_button');

watchedButton.addEventListener('click', handleClickWatched);

function handleClickWatched() {
  getArreyFromlocalStorage('settings');
}
