import { noPosterImg } from './create-movie-markup';

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
  const genresString = genres.map(genre => genre.name).join(', ');
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  return `<button class="btn close-btn" type="button">
    <svg class="close-btn__icon" width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"></path>
    </svg>
  </button>
  <div class="modal-movie__thumb">
    <img
      class="modal-movie__img"
      src="${poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path}"
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
            <span class="modal-movie__span modal-movie__span--vote">${vote_average.toFixed(
              1
            )}</span> /
            <span class="modal-movie__span modal-movie__span--votes">${vote_count}</span>
          </td>
        </tr>
        <tr>
          <td class="modal-movie__cell modal-movie__cell--gray-text">
            Popularity
          </td>
          <td class="modal-movie__cell">${popularity.toFixed(1)}</td>
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
          <td class="modal-movie__cell modal-movie__cell--last-row">${genresString}</td>
        </tr>
      </tbody>
    </table>
     <button type='button' class='button button--modal-btn button--trailer'>
        <img
          class='modal-movie__svg--ytb'
          src='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC03NyA1MTIuMDAyMTMgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMCIgZmlsbD0iI2YwMCIvPjxwYXRoIGQ9Im0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4='
        />trailer</button>
    <h3 class="modal-movie__subtitle">About</h3>
    <p class="modal-movie__text">${overview}</p>
    <ul class="modal-movie__btn-list">
      <li class="modal-movie__btn-item">
        <button
          class="button button--modal-btn"
          type="button" data-action="watch"
        >
          add to Watched
        </button>
      </li>
      <li class="modal-movie__btn-item">
        <button class="button button--modal-btn" type="button" data-action="queue">
          add to queue
        </button>
      </li>
    </ul>
  </div>`;
}

export { renderMovieInfo };
