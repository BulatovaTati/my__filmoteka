 
const films = [
    {
 "title" : "Terminator 3",
 "rating" : 8.9,
 "img" : 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
 'opis' : 'this is american film'
     },
  { 
  "title" : "Rambo 3",
  "rating" : 7.9,
  "img" : 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
  'opis' : 'this is Australian film'
 }
   ]  
 
   const con = films[1].name || films[1].title
 
 
 const card = document.querySelector('.card')
 const watch = document.querySelector('[data-action="watch"]')
 const queue = document.querySelector('[data-action="queue"]')
 
 
 
 watch.addEventListener('click', addWatch)
 
 
 localStorage.getItem('film', JSON.stringify(con) || []).includes(con)?watch.classList.add('delete_video'):watch.classList.add('added_video')
 
 
 function addWatch() {
 
  if(con) {
      let film = JSON.parse(localStorage.getItem('film')) || []
  
 
   if(film.includes(con)) {
 
     watch.classList.remove('delete_video')
     watch.classList.add('added_video')
        film = film.filter(eId => eId !== con)
   } else {
    
     watch.classList.add('delete_video')
     watch.classList.remove('added_video')
     film.push(con)
   }
 
  localStorage.setItem('film', JSON.stringify(film))
  }
  
 }