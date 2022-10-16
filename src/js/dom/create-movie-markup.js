import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const noPosterImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const genresObj = getFromStorage('allGenres');

export function renderCollection(movies) {
  const markup = movies.map(movie => cardRender(movie)).join('');
  refs.cardsContainer.innerHTML = markup;
}

export function cardRender({
  poster_path,
  title,
  genre_ids,
  genres,
  release_date,
  first_air_date,
  vote_average,
  name,
  id,
  overview,
}) {
  let year = '';
  if (release_date) {
    year = release_date?.slice(0, 4);
  } else {
    year = first_air_date?.slice(0, 4);
  }

  let filmGenresArray;

  if (genre_ids && genre_ids.length > 0) {
    filmGenresArray = genre_ids.map(id => {
      return genresObj[id];
    });
  } else if (genres && genres.length > 0) {
    filmGenresArray = genres.map(({ name }) => {
      return name;
    });
  }

  let movieOverviev = overview;

  const overviewInfo = overview.trim().split(' ').length;
  if (overviewInfo === '') {
    movieOverviev = 'Sorry there is no overview of that movie';
  } else if (overviewInfo < 3 || overviewInfo > 90) {
    movieOverviev = 'Click to read more';
  }

  return `<li class="card__item" data-id='${id}'> 
            <a href="#" class="gallery-art">

              <div class="card__img--container">
                  <img class="card__img "
                   src="${
                     poster_path === null
                       ? noPosterImg
                       : BASE_IMG_URL + poster_path
                   }" 
                   alt="Poster of movie"  
                   loading="lazy">
              </div> 

              <div class="card__info">
                <h2 class="card__title">${title ? title : name}</h2>     
                <div class="card__decr">          
                  <p class="card__genre">
                  ${
                    filmGenresArray && filmGenresArray.length > 0
                      ? filmGenresArray.splice(0, 2).concat('Other').join(', ')
                      : 'no genres'
                  }
                    <span>${' '}|${' '}</span>
                  </p>
                  <p class="card__year">${year ? year : 'no year'}
                    </p> 
                    <p class="card__rating">${
                      vote_average.toFixed(1)
                        ? vote_average.toFixed(1)
                        : 'no rate'
                    }</p> 
 
                </div>

              </div>
                                <div class="cards-back-text">
              <span class="description_films"> ${movieOverviev} </span>
                </div>
            </a>
          </li>`;
}

export { noPosterImg };
