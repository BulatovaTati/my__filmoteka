// const films = [
//     {
//         "title": "Terminator 3",
//         "rating": 8.9,
//         "img": 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
//         'about': 'this is american film'
//     },
//     {
//         "title": "Rambo 3",
//         "rating": 7.9,
//         "img": 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
//         'about': 'this is Australian film'
//     }
// ]

// const watch = films[1].name || films[1].title
// const queue = films[0].name || films[0].title


// const card = document.querySelector('.card')
// const watchBtn = document.querySelector('[data-action="watch"]')
// const queueBtn = document.querySelector('[data-action="queue"]')

// watchBtn.addEventListener('click', addWatch)
// queueBtn.addEventListener('click', addQueue)


// if (localStorage.getItem('watch') && localStorage.getItem('watch').length > 2) {
//     watchBtn.classList.add('delete_video')
//     watchBtn.textContent = 'REMOVE FROM WATCHED'
//     localStorage.removeItem('queue')
//     console.log(localStorage.getItem('watch').length)
// }

// if (localStorage.getItem('queue') && localStorage.getItem('queue').length > 2) {
//     queueBtn.classList.add('delete_video')
//     queueBtn.textContent = 'REMOVE FROM QUEUE'
//     localStorage.removeItem('watch')
// }


// function addWatch(e) {

//     if (watch) {
//         let film = JSON.parse(localStorage.getItem('watch')) || []

//         if (film.includes(watch)) {

//             watchBtn.classList.remove('delete_video')
//             watchBtn.classList.add('added_video')
//             watchBtn.textContent = 'ADD TO WATCHED'
//             film = film.filter(eId => eId !== watch)
//         } else {

//             watchBtn.classList.add('delete_video')
//             watchBtn.classList.remove('added_video')
//             watchBtn.textContent = 'REMOVE FROM WATCHED'
//             localStorage.removeItem("queue")
//             queueBtn.classList.remove('delete_video')
//             queueBtn.classList.add('added_video')
//             queueBtn.textContent = 'ADD TO QUEUE'
//             film.push(watch)
//         }

//         localStorage.setItem('watch', JSON.stringify(film))
//     }
//     console.log(localStorage.getItem('watch').length)

// }

// function addQueue() {

//     if (queue) {
//         let film = JSON.parse(localStorage.getItem('queue')) || []


//         if (film.includes(queue)) {
//             queueBtn.classList.remove('delete_video')
//             queueBtn.classList.add('added_video')
//             queueBtn.textContent = 'ADD TO QUEUE'
//             film = film.filter(eId => eId !== queue)
//         } else {
//             queueBtn.classList.add('delete_video')
//             queueBtn.classList.remove('added_video')
//             queueBtn.textContent = 'REMOVE FROM QUEUE'
//             localStorage.removeItem("watch")
//             watchBtn.classList.remove('delete_video')
//             watchBtn.classList.add('added_video')
//             watchBtn.textContent = 'ADD TO WATCHED'
//             film.push(queue)
//         }

//         localStorage.setItem('queue', JSON.stringify(film))
//     }
// }