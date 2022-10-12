import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

refs.watchedButton.addEventListener('click', handleClickWatched);
refs.queueButton.addEventListener('click', handleClickQueue);

renderSavedFilms('watch');

function handleClickQueue() {
  renderSavedFilms('queue');
  removeDisabled(refs.watchedButton);
  setDisabled(refs.queueButton);
}

function handleClickWatched() {
  renderSavedFilms('watch');
  setDisabled(refs.watchedButton);
  removeDisabled(refs.queueButton);
}

function renderSavedFilms(name) {
  clearFilmList();
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    cardRendering(addedFilms);
    refs.noFilmsMessage.classList.add('visually-hidden');
  } else {
    refs.noFilmsMessage.classList.remove('visually-hidden');
  }
}

function cardRendering(result) {
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
      <div class="card__img--container "> <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="card__img"></div>    
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
  el.classList.add('button-active');
}
function removeDisabled(el) {
  el.removeAttribute('disabled');
  el.classList.remove('button-active');
}
function clearFilmList() {
  refs.cardsContainer.innerHTML = '';
}
