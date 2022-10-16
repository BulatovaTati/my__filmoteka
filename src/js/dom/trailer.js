import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { fetchMovieVideoForId } from '../api/fetchApi';
import Spinner from '../common/spinner';
const spinner = new Spinner();

let id;

function onLoadTrailer(movieId) {
  id = movieId;
  const trailerbtn = document.querySelector('.button--trailer');
  trailerbtn.addEventListener('click', resiveDataFetch);
}

function resiveDataFetch() {
  spinner.enable();
  fetchMovieVideoForId(id)
    .then(data => data.results)
    .then(data => {
      renderTrailer(data);
      spinner.disable();
    })
    .catch(error => console.log(error));
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
  trailer.show();
}

export { onLoadTrailer };
