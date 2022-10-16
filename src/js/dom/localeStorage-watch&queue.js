import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';

function localStorageFunction(movieData) {
  const filmObject = JSON.stringify(movieData);
  const isLibraryPage = location.pathname.includes('library');
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

  const watchBtn = document.querySelector('[data-action="watch"]');
  const queueBtn = document.querySelector('[data-action="queue"]');

  watchBtn.addEventListener('click', addWatch);
  queueBtn.addEventListener('click', addQueue);

  if (
    localStorage.getItem('watch').includes(filmObject) &&
    localStorage.getItem('watch').length > 2
  ) {
    watchBtn.classList.add('button--accent-btn');
    watchBtn.textContent = 'REMOVE FROM WATCHED';
  }

  if (
    localStorage.getItem('queue').includes(filmObject) &&
    localStorage.getItem('queue').length > 2
  ) {
    queueBtn.classList.add('button--accent-btn');
    queueBtn.textContent = 'REMOVE FROM QUEUE';
  }

  function addWatch() {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('watch')) || [];
      if (film.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent-btn');
        watchBtn.textContent = 'ADD TO WATCHED';
        film = film.filter(e => e.id !== movieData.id);
        if (isLibraryPage && cartItem && refs.isWatchTabActive) {
          cartItem.remove();
        }
      } else {
        watchBtn.classList.add('button--accent-btn');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        film.push(movieData);
      }
      localStorage.setItem('watch', JSON.stringify(film));
    }
    isLocalStorageEmpty('watch');
  }

  function addQueue() {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('queue')) || [];
      if (film.find(e => e.id === movieData.id)) {
        queueBtn.classList.remove('button--accent-btn');
        queueBtn.textContent = 'ADD TO QUEUE';
        film = film.filter(e => e.id !== movieData.id);

        if (isLibraryPage && cartItem && !refs.isWatchTabActive) {
          cartItem.remove();
        }
      } else {
        queueBtn.classList.add('button--accent-btn');
        queueBtn.textContent = 'REMOVE FROM QUEUE';
        film.push(movieData);
      }
      localStorage.setItem('queue', JSON.stringify(film));
    }
    isLocalStorageEmpty('queue');
  }
}

function isLocalStorageEmpty(name) {
  if (getFromStorage(name).length === 0) {
    if (refs.noFilmsMessage) {
      refs.noFilmsMessage.classList.remove('visually-hidden');
    }
    return;
  }
}

export { localStorageFunction };
