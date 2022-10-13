

function localStorageFunction(movieData) {

    const filmObject = JSON.stringify(movieData)

    const watchBtn = document.querySelector('[data-action="watch"]')
    const queueBtn = document.querySelector('[data-action="queue"]')

    watchBtn.addEventListener('click', addWatch)
    queueBtn.addEventListener('click', addQueue)


    if (localStorage.getItem('watch').includes(filmObject) && localStorage.getItem('watch').length > 2) {
        watchBtn.classList.add('button--accent-btn')
        watchBtn.textContent = 'REMOVE FROM WATCHED'
    }

    if (localStorage.getItem('queue').includes(filmObject) && localStorage.getItem('queue').length > 2) {
        queueBtn.classList.add('button--accent-btn')
        queueBtn.textContent = 'REMOVE FROM QUEUE'
    }

    function addWatch() {

        if (movieData) {
            let film = JSON.parse(localStorage.getItem('watch')) || []

            if (film.includes(movieData)) {

                watchBtn.classList.remove('button--accent-btn')
                watchBtn.textContent = 'ADD TO WATCHED'
                film = film.filter(eId => eId !== movieData)

            } else {

                watchBtn.classList.add('button--accent-btn')
                watchBtn.textContent = 'REMOVE FROM WATCHED'
                queueBtn.classList.remove('button--accent-btn')
                queueBtn.textContent = 'ADD TO QUEUE'
                film.push(movieData)

            }

            localStorage.setItem('watch', JSON.stringify(film))
        }

    }

    function addQueue() {

        if (movieData) {
            let film = JSON.parse(localStorage.getItem('queue')) || []


            if (film.includes(movieData)) {
                queueBtn.classList.remove('button--accent-btn')
                queueBtn.textContent = 'ADD TO QUEUE'
                film = film.filter(eId => eId !== movieData)
            } else {
                queueBtn.classList.add('button--accent-btn')
                queueBtn.textContent = 'REMOVE FROM QUEUE'
                watchBtn.classList.remove('button--accent-btn')
                watchBtn.textContent = 'ADD TO WATCHED'
                film.push(movieData)
            }

            localStorage.setItem('queue', JSON.stringify(film))
        }
    }
}
export { localStorageFunction }


