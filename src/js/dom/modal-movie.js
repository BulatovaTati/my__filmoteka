import { fetchMovieForId } from '../api/fetchApi';
import { renderMovieInfo } from './modal-movie-markup';
import { localStorageFunction } from './localeStorage-watch&queue';
import { onLoadTrailer } from './trailer';
import Spinner from '../common/spinner';
const spinner = new Spinner();

const cardsList = document.querySelector('.cards__list');
const modalMovie = document.querySelector('.modal-movie');
const backdrop = document.querySelector('.backdrop');

cardsList.addEventListener('click', onMovieCardClick);

function onMovieCardClick(e) {
  e.preventDefault();

  if (e.target !== e.currentTarget) {
    const selectedMovie = e.target.closest('li');
    const selectedMovieId = Number(selectedMovie.getAttribute('data-id'));

    spinner.enable();

    fetchMovieForId(selectedMovieId)
      .then(response => {
        modalMovieToggle();
        modalMovie.innerHTML = renderMovieInfo(response);
        addModalMovieListeners();
        spinner.disable();
        return response;
      })
      .then(response => {
        onLoadTrailer(selectedMovieId);
        localStorageFunction(response);
      })
      .catch(error => console.log(error));
  }
}

function onCloseModalMovie(e) {
  e.preventDefault();

  const isContainsClass =
    e.target.classList.contains('close-btn__icon') ||
    e.target.parentNode.classList.contains('close-btn__icon');

  if (e.code === 'Escape' || isContainsClass || e.target === backdrop) {
    modalMovieToggle();
    clearModalMovieInfo();
    removeModalMovieListeners();
  }
}

function modalMovieToggle() {
  backdrop.classList.toggle('is-hidden');
  modalMovie.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function addModalMovieListeners() {
  backdrop.addEventListener('click', onCloseModalMovie);
  window.addEventListener('keydown', onCloseModalMovie);
  modalMovie.addEventListener('click', onCloseModalMovie);
}

function removeModalMovieListeners() {
  backdrop.removeEventListener('click', onCloseModalMovie);
  window.removeEventListener('keydown', onCloseModalMovie);
  modalMovie.removeEventListener('click', onCloseModalMovie);
}

function clearModalMovieInfo() {
  modalMovie.innerHTML = '';
}
