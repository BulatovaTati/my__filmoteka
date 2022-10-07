// const films = [
//   {
// "name" : "Terminator 3",
// "rating" : 8.9,
// "img" : 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
// 'opis' : 'this is american film'
//    },
// { 
// "name" : "Rambo 3",
// "rating" : 7.9,
// "img" : 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
// 'opis' : 'this is Australian film'
// }
//  ]  
//  const conQ = films[0].name
//  const con = films[1].name

// const card = document.querySelector('.card')
// const watch = document.querySelector('[data-action="watch"]')
// const queue = document.querySelector('[data-action="queue"]')


// watch.addEventListener('click', addWatch)
// queue.addEventListener('click', addQueue)

// console.log((localStorage.getItem('film', JSON.stringify(con) || [])).includes(con))
// console.log((localStorage.getItem('filmQ', JSON.stringify(conQ) || [])).includes(conQ))

// // (localStorage.getItem('film', JSON.stringify(con) || [])).includes(con) ? (watch.classList.remove('add_watch'),  
// //  watch.textContent = 'Delete video') : (watch.classList.add('add_watch'), watch.textContent = 'Add watch')
// function addWatch() {

// if(con) {
//     let film = JSON.parse(localStorage.getItem('film')) || []
//  console.log(film)

//  if(film.includes(con)) {
//    watch.textContent = 'Add watch'
//    watch.classList.remove('delete_video')
//    watch.classList.add('added_video')
//       film = film.filter(eId => eId !== con)
//  } else {
//    watch.textContent = 'Delete video'
//    watch.classList.add('delete_video')
//    watch.classList.remove('added_video')
//    film.push(con)
//  }

//  console.log(localStorage.setItem('film', JSON.stringify(film)))
// }

// }

// function addQueue(e) {

//    if(conQ) {
//        let filmQ = JSON.parse(localStorage.getItem('filmQ')) || []
//     console.log(filmQ)
  
//     if(filmQ.includes(conQ)) {
//       watch.textContent = 'Add watch'
//       watch.classList.remove('delete_video')
//       watch.classList.add('added_video')
//          filmQ = filmQ.filter(eId => eId !== conQ)
//     } else {
//       watch.textContent = 'Delete video'
//       watch.classList.add('delete_video')
//       watch.classList.remove('added_video')
//       filmQ.push(conQ)
//     }
  
//     console.log(localStorage.setItem('filmQ', JSON.stringify(filmQ)))
//    }
   
// }