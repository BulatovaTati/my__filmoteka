const cardsList = document.querySelector('.cards__list');
const modalMovie = document.querySelector('.modal-movie');
const backdrop = document.querySelector('.backdrop');

cardsList.addEventListener('click', onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (e.target !== cardsList) {
    modalMovieToggle();
    renderMovieInfo();
    backdrop.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onCloseModal);
    modalMovie.addEventListener('click', onCloseModal);
  }
}

function modalMovieToggle() {
  backdrop.classList.toggle('is-hidden');
  modalMovie.classList.toggle('is-hidden');
}

function onCloseModal(e) {
  e.preventDefault();
  const isContainsClass = e.target.classList.contains('close-btn__icon');

  if (e.key === 'Escape' || isContainsClass || e.target === backdrop) {
    modalMovieToggle();
    clearMovieInfo();
    window.removeEventListener('keydown', onCloseModal);
    backdrop.removeEventListener('click', onCloseModal);
    modalMovie.removeEventListener('click', onCloseModal);
  }
}

function clearMovieInfo() {
  modalMovie.innerHTML = '';
}

function renderMovieInfo() {
  modalMovie.innerHTML = `<button class="btn close-btn" type="button" data-modal-close>
    <svg class="close-btn__icon" width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"></path>
    </svg>
  </button>
  <div class="modal-movie__thumb">
    <img
      class="modal-movie__img"
      src="https://cdn.pixabay.com/photo/2022/08/22/10/01/tree-7403295_1280.jpg"
      alt=""
    />
  </div>
  <div class="modal-movie__info-container">
    <h2 class="modal-movie__title">A fistful of lead</h2>
    <table class="modal-movie__table">
      <tbody class="modal-movie__cell1">
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Vote / Votes
          </td>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            <span class="modal-movie__span modal-movie__span--vote">7.3</span> /
            <span class="modal-movie__span modal-movie__span--votes">1260</span>
          </td>
        </tr>
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Popularity
          </td>
          <td class="modal-movie__cell">100.2</td>
        </tr>
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Original Title
          </td>
          <td class="modal-movie__cell">A FISTFUL OF LEAD</td>
        </tr>
        <tr>
          <td
            class="modal-movie__cell modal-movie__cell--last-row modal-movie__cell--gray-text"
          >
            Genre
          </td>
          <td class="modal-movie__cell modal-movie__cell--last-row">Western</td>
        </tr>
      </tbody>
    </table>
    <h3 class="modal-movie__subtitle">About</h3>
    <p class="modal-movie__text">
      Four of the West’s most infamous outlaws assemble to steal a huge stash of
      gold from the most corrupt settlement of the gold rush towns. But not all
      goes to plan one is killed and the other three escapes with bags of gold
      hide out in the abandoned gold mine where they happen across another gang
      of three – who themselves were planning to hit the very same bank! As
      tensions rise, things go from bad to worse as they realise the bags of
      gold are filled with lead... they’ve been double crossed – but by who and
      how?
    </p>
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
