import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { fetchMovieVideoForId } from '../api/fetchApi';
const cont = document.querySelector('.cards__list');

onTrailerClick();

function onTrailerClick() {
  cont.addEventListener('click', watchTrailer);
}

function watchTrailer(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  dataIdSearch(e.target.closest('.card__item').dataset.id);
}

function dataIdSearch(id) {
  resiveDataFetch(id)
    .then(renderTrailer)
    .catch(error => {
      console.log(error);
    });
}

function resiveDataFetch(id) {
  return fetchMovieVideoForId(id).then(data => {
    console.log(data.results);

    return data.results;
  });
}

function renderTrailer(data) {
  let key = '';

  data.forEach(obj => {
    if (obj.name.includes('Official')) {
      key = obj.key;
    }
  });

  creatTrailerLink(key);
}

function creatTrailerLink(key) {
  const trailer = basicLightbox.create(`
  <iframe width="320" height="240" src='https://www.youtube.com/embed/${key}'frameborder="0" 
  allowfullscreen class="trailer_video">
  </iframe>
`);

  setTimeout(() => {
    const trailerbtn = document.querySelector('.button--trailer');
    trailerbtn.addEventListener('click', watchTrailer);
  }, 300);

  function watchTrailer() {
    trailer.show();
  }
}
