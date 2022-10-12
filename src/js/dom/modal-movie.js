import { fetchMovieForId } from '../api/fetchApi';
import { renderMovieInfo } from './modal-movie-markup';

const cardsList = document.querySelector('.cards__list');
const modalMovie = document.querySelector('.modal-movie');
const backdrop = document.querySelector('.backdrop');

let movieData = {};

cardsList.addEventListener('click', onCardClick);

function onCardClick(e) {
  e.preventDefault();

  const selectedMovie = e.target.closest('li');
  const selectedMovieId = Number(selectedMovie.getAttribute('data-id'));

  fetchMovieForId(selectedMovieId)
    .then(response => {
      movieData = response;

      modalMovieToggle();
      modalMovie.innerHTML = renderMovieInfo(response);
      addModalListeners();
    })
    .catch(error => console.log(error));
}

function onCloseModal(e) {
  e.preventDefault();

  const isContainsClass =
    e.target.classList.contains('close-btn__icon') ||
    e.target.parentNode.classList.contains('close-btn__icon');

  if (e.code === 'Escape' || isContainsClass || e.target === backdrop) {
    modalMovieToggle();
    clearMovieInfo();
    removeModalListeners();
  }
}

function modalMovieToggle() {
  backdrop.classList.toggle('is-hidden');
  modalMovie.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function addModalListeners() {
  backdrop.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onCloseModal);
  modalMovie.addEventListener('click', onCloseModal);
}

function removeModalListeners() {
  backdrop.removeEventListener('click', onCloseModal);
  window.removeEventListener('keydown', onCloseModal);
  modalMovie.removeEventListener('click', onCloseModal);
}

function clearMovieInfo() {
  modalMovie.innerHTML = '';
}

export { movieData };
