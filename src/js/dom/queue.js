
const films1 = [
    {
        "title": "Terminator 3",
        "rating": 8.9,
        "img": 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
        'opis': 'this is american film'
    },
    {
        "title": "Rambo 3",
        "rating": 7.9,
        "img": 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
        'opis': 'this is Australian film'
    }
]


const conQ = films1[0].name || films1[0].title

queue.addEventListener('click', addQueue)


localStorage.getItem('filmQ', JSON.stringify(conQ) || []).includes(conQ) ? queue.classList.add('delete_video') : queue.classList.add('added_video')



function addQueue(e) {

    if (conQ) {
        let filmQ = JSON.parse(localStorage.getItem('filmQ')) || []

        if (filmQ.includes(conQ)) {

            queue.classList.remove('delete_video')
            queue.classList.add('added_video')
            filmQ = filmQ.filter(eId => eId !== conQ)
        } else {

            queue.classList.add('delete_video')
            queue.classList.remove('added_video')
            filmQ.push(conQ)
        }

        localStorage.setItem('filmQ', JSON.stringify(filmQ))
    }

}