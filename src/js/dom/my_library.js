import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

const queueButton = document.querySelector('.queue_button');
const watchedButton = document.querySelector('.watched_button');
const cardsSection = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const noFilmsMessage = document.querySelector('.alert__mеssаge');

watchedButton.addEventListener('click', handleClickWatched);
queueButton.addEventListener('click', handleClickQueue);

renderSavedFilms('watch');

function handleClickQueue() {
  renderSavedFilms('queue');
  removeDisabled(watchedButton);
  setDisabled(queueButton);
}

function handleClickWatched() {
  renderSavedFilms('watch');
  setDisabled(watchedButton);
  removeDisabled(queueButton);
}

function renderSavedFilms(name) {
  clearFilmList();

  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    cardRender(addedFilms);
    noFilmsMessage.classList.add('visually-hidden');
  } else {
    noFilmsMessage.classList.remove('visually-hidden');
  }
}

function cardRender(result) {
  const cardListString = result
    .map(el => {
      const filmGenresArray = el.genres.map(genreObj => {
        return genreObj.name;
      });
      const title = el.name || el.title;
      const year =
        el.release_date?.slice(0, 4) || el.first_air_date?.slice(0, 4);
      const src = el.poster_path;
      const rating = el.vote_average.toFixed(1);
      const genre = filmGenresArray.join(', ');
      return `<li class="cards__item ">    
        <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="card__img">
        <div class="card__info">
          <h2 class="card__title">${title}</h2>
         <div class="card__decr">  
          <p class="card__genre">${genre} <span> | </span> </p>
           <p class="card__year">${year}</p>
          <p class="card__rating">${rating}</p>
          </div>
        </div>
      </li>`;
    })
    .join('');

  refs.cardsContainer.insertAdjacentHTML('afterbegin', cardListString);
}

function setDisabled(el) {
  el.setAttribute('disabled', '');
}
function removeDisabled(el) {
  el.removeAttribute('disabled');
}
function clearFilmList() {
  cardsList.innerHTML = '';
}
