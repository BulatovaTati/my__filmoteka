// пше

import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

const queueButton = document.querySelector('.queue_button');
const watchedButton = document.querySelector('.watched_button');

watchedButton.addEventListener('click', handleClickWatched);

queueButton.addEventListener('click', handleClickQuery);

function handleClickQuery() {
  getArrayFromLocalStorage('settings');
}

function handleClickWatched() {
  getArrayFromLocalStorage('settings');
}

function getArrayFromLocalStorage(name) {
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    cardRender(addedFilms);
  } else {
    alert('Вибачте, жоднен фільм не додано');
  }
}

function cardRender(result) {
  const CardListString = result
    .map(el => {
      console.log(el);
      title = el.name || el.title;
      year = el.release_date?.slice(0, 4) || el.first_air_date?.slice(0, 4);
      src = el.poster_path;
      rating = el.vote_average.toFixed(1);
      genre = el.genre_ids;
      return `<li class="cards__item ">    
        <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="movie-card__img">
        <div class="movie-card__info">
          <h2 class="movie-card__info-title">${title}</h2>
         <div class="movie-card_about">  
          <p class="movie-card__info-short">Genre<span> | </span>${genre} </p>
           <p class="movie-card__info-short">${year}</p>
          <p class="movie-card__info-rating">${rating}</p>
          </div>
        </div>
      </li>`;
    })
    .join('');

  refs.cardsContainer.insertAdjacentHTML('afterbegin', CardListString);
}

export { getArrayFromLocalStorage };
