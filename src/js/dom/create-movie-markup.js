// Створити функцію, з розміткою однієї картки photo h2 <p> <span> <p>

// ==== Це мій ключ. Ще не міняв на ключ ліда.
const API_KEY = 'ec933baa094eb9a861a7c38baaae0d3c';
// const cardListEl = document.querySelector('.cards__list');
// console.log('cardListEl: ', cardListEl);
import { refs } from '../common/refs';

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
  for (let i = 0; i < result.length; i += 1) {
    console.log(result[i]);
    let title = '';
    if (result[i].hasOwnProperty('title')) {
      title = result[i].title;
    }
    if (result[i].hasOwnProperty('name')) {
      title = result[i].name;
    }
    const year = result[i].release_date.slice(0, 4);
    console.log(year);
    const src = result[i].poster_path;
    refs.cardsContainer.insertAdjacentHTML(
      'afterbegin',
      `<li class="cards__item">    
        <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="movie-card__img">
        <div class="movie-card__info">
          <h2 class="movie-card__info-title">${title}</h2>
          <p class="movie-card__info-short">Genre<span> | </span>${year}</p>
        </div>
      </li>`
    );
  }
}
