// settings = [
//   {
//     title: 'Terminator 3',
//     vote_average: 8.28,
//     img: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
//     release_date: '2022.12.20',
//     genre_ids: [28, 36, 99],
//   },
//   {
//     title: 'Rambo 3',
//     vote_average: 7.945,
//     img: 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
//     first_air_date: '2022.12.20',
//     genre_ids: [35, 14, 53],
//   },
// ];

// localStorage.setItem('settings', JSON.stringify(settings));

import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

const queueButton = document.querySelector('.queue_button');
const watchedButton = document.querySelector('.watched_button');

watchedButton.addEventListener('click', handleClickWatched);

queueButton.addEventListener('click', handleClickQueue);

function handleClickQueue() {
  renderSavedFilms('settings');
}

function handleClickWatched() {
  renderSavedFilms('settings');
}

function renderSavedFilms(name) {
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    cardRender(addedFilms);
  } else {
    alert('Вибачте, жоднен фільм не додано');
  }
}

function cardRender(result) {
  const genresArray = getFromStorage('allGenres');
  const genresObj = {};
  genresArray.forEach(genre => {
    genresObj[genre.id] = genre;
  });
  const cardListString = result
    .map(el => {
      const filmGenresArray = el.genre_ids.map(id => {
        return genresObj[id].name;
      });
        const title = el.name || el.title;
      const year =
        el.release_date?.slice(0, 4) || el.first_air_date?.slice(0, 4);
      const src = el.poster_path;
      const rating = el.vote_average.toFixed(1);
      const genre = filmGenresArray.join(', ');
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

  refs.cardsContainer.insertAdjacentHTML('afterbegin', cardListString);
}
