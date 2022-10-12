import { fetchMovieForId } from '../api/fetchApi';

setTimeout(() => {
  const cardsList = document.querySelector('.cards__list');
  const modalMovie = document.querySelector('.modal-movie');
  const backdrop = document.querySelector('.backdrop');
  const cardsItem = cardsList.querySelectorAll('li');

  let movieData = {};

  cardsItem.forEach(elem => {
    elem.addEventListener('click', onCardClick);
  });

  function onCardClick(e) {
    e.preventDefault();
    document.body.classList.add('modal-open');
    fetchMovieForId(e.currentTarget.dataset.id)
      .then(response => {
        movieData = response;

        modalMovieToggle();
        renderMovieInfo(response);
        addModalListeners();
      })
      .catch(error => console.log(error));
  }

  function modalMovieToggle() {
    backdrop.classList.toggle('is-hidden');
    modalMovie.classList.toggle('is-hidden');
  }

  function onCloseModal(e) {
    e.preventDefault();
    const isContainsClass =
      e.target.classList.contains('close-btn__icon') ||
      e.target.parentNode.classList.contains('close-btn__icon');

    if (
      e.code === 'Escape' ||
      isContainsClass ||
      e.target === e.currentTarget
    ) {
      modalMovieToggle();
      clearMovieInfo();
      removeModalListeners();
      document.body.classList.remove('modal-open');
    }
  }

  function clearMovieInfo() {
    modalMovie.innerHTML = '';
  }

  function renderMovieInfo({
    poster_path,
    title,
    genres,
    popularity,
    vote_count,
    vote_average,
    original_title,
    overview,
  }) {
    const ganresName = genres.map(genre => genre.name).join(', ');
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

    modalMovie.innerHTML = `<button class="btn close-btn" type="button">
    <svg class="close-btn__icon" width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"></path>
    </svg>
  </button>
  <div class="modal-movie__thumb">
    <img
      class="modal-movie__img"
      src="${BASE_IMG_URL + poster_path}"
      alt="${original_title + ' poster'}"
    />
  </div>
  <div class="modal-movie__info-container">
    <h2 class="modal-movie__title">${title}</h2>
    <table class="modal-movie__table">
      <tbody class="modal-movie__cell1">
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Vote / Votes
          </td>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            <span class="modal-movie__span modal-movie__span--vote">${vote_average}</span> /
            <span class="modal-movie__span modal-movie__span--votes">${vote_count}</span>
          </td>
        </tr>
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Popularity
          </td>
          <td class="modal-movie__cell">${popularity}</td>
        </tr>
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Original Title
          </td>
          <td class="modal-movie__cell">${original_title}</td>
        </tr>
        <tr>
          <td
            class="modal-movie__cell modal-movie__cell--last-row modal-movie__cell--gray-text"
          >
            Genre
          </td>
          <td class="modal-movie__cell modal-movie__cell--last-row">${ganresName}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="modal-movie__subtitle">About</h3>
    <p class="modal-movie__text">${overview}</p>
    <ul class="modal-movie__btn-list">
      <li class="modal-movie__btn-item">
        <button
          class="button button--modal-btn button--accent-btn"
          type="button"
        >
          add to Watched
        </button>
      </li>
      <li class="modal-movie__btn-item">
        <button class="button button--modal-btn" type="button">
          add to queue
        </button>
      </li>
    </ul>
  </div>`;
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
}, 1000);

export { movieData };
