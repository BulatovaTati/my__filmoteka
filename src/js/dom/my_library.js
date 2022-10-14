import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';
import { renderCollection } from './create-movie-markup';

refs.watchedButton.addEventListener('click', handleClickWatched);
refs.queueButton.addEventListener('click', handleClickQueue);

renderSavedFilms('watch');

function handleClickQueue() {
  renderSavedFilms('queue');
  removeDisabled(refs.watchedButton);
  setDisabled(refs.queueButton);
  refs.isWatchTabActive = false;
}

function handleClickWatched() {
  renderSavedFilms('watch');
  setDisabled(refs.watchedButton);
  removeDisabled(refs.queueButton);
  refs.isWatchTabActive = true;
}

function renderSavedFilms(name) {
  clearFilmList();
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    renderCollection(addedFilms);
    refs.noFilmsMessage.classList.add('visually-hidden');
  } else {
    refs.noFilmsMessage.classList.remove('visually-hidden');
  }
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
