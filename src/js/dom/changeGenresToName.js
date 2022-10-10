const savedGenres = localStorage.getItem('allGenres');
const arrayOfAllGenres = JSON.parse(savedGenres);

export function changeGenresIdsToNames(id) {
  for (let i = 0; i < id.length; i++) {
    arrayOfAllGenres.forEach(genre => {
      if (Number(id[i]) === genre.id) {
        id[i] = genre.name;
        // console.log('id[i]: ', id[i]);
        // console.log('genre.name: ', genre.name);
      }
    });
  }

  return id;
}
