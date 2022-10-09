const settings = [
  {
    title: 'Terminator 3',
    vote_average: 8.911,
    img: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
    release_date: '2022.12.20',
    genre_ids: 'ection',
  },
  {
    title: 'Rambo 3',
    vote_average: 7.922,
    img: 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    release_date: '2022.12.20',
    genre_ids: 'ection',
  },
];

import { refs } from '../common/refs';

const queueButton = document.querySelector('.queue_button');

queueButton.addEventListener('click', handleClickQuery);

function handleClickQuery() {
  getArreyFromlocalStorage('settings');
}

function getArreyFromlocalStorage(name) {
  const addedFilms = localStorage.getItem(name);
  if (addedFilms) {
    try {
      parsedaddedFilms = JSON.parse(addedFilms);
      cardRender(parsedaddedFilms);
    } catch (error) {
      console.log(error);
    }
  } else {
    alert('Вибачте, жоднен фільм не додано');
  }
}

function cardRender(result) {
    result.map(el  => {
        console.log( el ); 
    year = el.release_date.slice(0, 4);
    src = el.poster_path;
    rating = el.vote_average.toFixed(1);
    genre = el.genre_ids;

    refs.cardsContainer.insertAdjacentHTML(
      'afterbegin',
      `<li class="cards__item ">    
        <img src="${el.img}" alt="Movie" class="movie-card__img">
        <div class="movie-card__info">
          <h2 class="movie-card__info-title">${el.title}</h2>
          <p class="movie-card__info">Genre<span> | </span>${el.genre}</p>
          <p class="movie-card__info">${rating}</p>
          <p class="movie-card__info">${year}</p>
        </div>
      </li>`
    );
  });
}

export { getArreyFromlocalStorage };
