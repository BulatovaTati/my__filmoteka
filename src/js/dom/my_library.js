import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

const queueButton = document.querySelector('.queue_button');
const watchedButton = document.querySelector('.watched_button');
const cardsAlert = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');


watchedButton.addEventListener('click', handleClickWatched);
queueButton.addEventListener('click', handleClickQueue);

function handleClickQueue() {
  deletedMessage();
  renderSavedFilms('queue');
  removeDisabled(watchedButton);
  setDisabled(queueButton);
}

function handleClickWatched() {
  deletedMessage();
  renderSavedFilms('watch');
  setDisabled(watchedButton);
  removeDisabled(queueButton);
}

function renderSavedFilms(name) {
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    cardRender(addedFilms);
  } else {
    const stringAlert = `<div class="alert__mеssаge">
      <span class="sorry"> Sorry :(</span>
      <p class="string__alert"> No movies have been added yet</p>
      </div>
      `;
    cardsAlert.insertAdjacentHTML('afterbegin', stringAlert);
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
function deletedMessage() {
  cardsList.innerHTML = '';
  cardsAlert.firstChild.innerHTML = '';
}
