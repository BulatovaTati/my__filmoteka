// Створити функцію, з розміткою однієї картки photo h2 <p> <span> <p>

import { refs } from '../common/refs';
// refs.cardsContainer.insertAdjacentHTML(

// ==== Це мій ключ. Ще не міняв на ключ ліда.
const API_KEY = 'ec933baa094eb9a861a7c38baaae0d3c';
// const cardListEl = document.querySelector('.cards__list');

popularMoviesSearch();

function popularMoviesSearch() {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then(data => {
      return data.json();
    })
    .then(response => {
      console.log(response);

      const result = response.results;
      cardRender(result);
    });
}

function cardRender(result) {
  // console.log(result);

  result.map(({release_date, poster_path, title, name, genre}) => {
    // let pageTitle = '';
    const year = release_date.slice(0, 4);
    const src = poster_path;

    // if (item.hasOwnProperty('title')) {
    //   pageTitle = title;
    // }
    // if (item.hasOwnProperty('name')) {
    //   pageTitle = name;
    // }

    // cardListEl.insertAdjacentHTML(
    refs.cardsContainer.insertAdjacentHTML(
      'afterbegin',
      `<li class="movie-card">    
        <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="movie-card__img">
      <div class="movie-card__info">
        <h2 class="movie-card__info-title">${title}</h2>
        <p class="movie-card__info-short">Genre<span> | </span>${year}</p>
      </div>
      </li>`
    );
  });
}