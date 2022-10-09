// // Створити функцію, з розміткою однієї картки photo h2 <p> <span> <p>

// // ==== Це мій ключ. Ще не міняв на ключ ліда.
// const API_KEY = 'ec933baa094eb9a861a7c38baaae0d3c';
// // const cardListEl = document.querySelector('.cards__list');
// // console.log('cardListEl: ', cardListEl);
// import { refs } from '../common/refs';

// popularMoviesSearch();

// function popularMoviesSearch() {
//   fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
//     .then(data => {
//       return data.json();
//     })
//     .then(response => {
//       console.log(response);

//       const result = response.results;
//       cardRender(result);
//     });
// }

// function cardRender(result) {
//   for (let i = 0; i < result.length; i += 1) {
//     let title = '';
//     if (result[i].hasOwnProperty('title')) {
//       title = result[i].title;
//     }
//     if (result[i].hasOwnProperty('name')) {
//       title = result[i].name;
//     }
//     const year = result[i].release_date.slice(0, 4);

//     const src = result[i].poster_path;
//     refs.cardsContainer.insertAdjacentHTML(
//       'afterbegin',
//       `<li class="cards__item">
//         <img src="https://image.tmdb.org/t/p/w500${src}" alt="Movie" class="movie-card__img">
//         <div class="movie-card__info">
//           <h2 class="movie-card__info-title">${title}</h2>
//           <p class="movie-card__info-short">Genre<span> | </span>${year}</p>
//         </div>
//       </li>`
//     );
//   }
// }

import { refs } from '../common/refs';
import { changeGenresIdsToNames } from './changeGenresToName';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p';
const SIZE_IMG = '/w500';
const noPosterImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';
export function renderCollection(movies) {
  const markup = movies.map(movie => createMarkupColl(movie)).join('');
  return (refs.cardsContainer.innerHTML = markup);
}

export function cardRender({
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
  first_air_date,
  name,
  id,
}) {
  changeGenresIdsToNames(genre_ids);
  return `<li class="cards__item"> 
            <a href="" class="link gallery-art">
              <div class="film-img">
                  <img class="movie-card__img" id='${id}' src="${
    poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
  }" alt="Poster of movie">
              </div> 
              <div class="film-description">
                <h2 class="movie-card__info-title">${
                  title ? title : name
                }</h2>      
                <div class="film-info">          
                  <p class="genres">${
                    genre_ids.length > 2
                      ? genre_ids.slice(0, 2) + `<span>,Other</span>`
                      : genre_ids
                  }</p>
                  <p class="year">${
                    release_date
                      ? release_date.slice(0, 4)
                      : first_air_date.slice(0, 4)
                  }</p> 
                  <p class="rating">${vote_average}</p> 
                </div>
              </div>
            </a>
          </li>`;
}
