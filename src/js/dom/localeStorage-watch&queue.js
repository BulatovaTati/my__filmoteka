

function localStorageFunction(movieData) {
    const watch = movieData
    const queue = movieData

    const watchBtn = document.querySelector('[data-action="watch"]')
    const queueBtn = document.querySelector('[data-action="queue"]')

    console.log(watchBtn)
    watchBtn.addEventListener('click', addWatch)
    queueBtn.addEventListener('click', addQueue)


    if (localStorage.getItem('watch') && localStorage.getItem('watch').length > 2) {
        watchBtn.classList.add('button--accent-btn')
        watchBtn.textContent = 'REMOVE FROM WATCHED'
        localStorage.removeItem('queue')
        console.log(localStorage.getItem('watch').length)
    }

    if (localStorage.getItem('queue') && localStorage.getItem('queue').length > 2) {
        queueBtn.classList.add('button--accent-btn')
        queueBtn.textContent = 'REMOVE FROM QUEUE'
        localStorage.removeItem('watch')
    }


    function addWatch(e) {

        if (watch) {
            let film = JSON.parse(localStorage.getItem('watch')) || []

            if (film.includes(watch)) {

                watchBtn.classList.remove('button--accent-btn')
                watchBtn.textContent = 'ADD TO WATCHED'
                film = film.filter(eId => eId !== watch)
            } else {

                watchBtn.classList.add('button--accent-btn')
                watchBtn.textContent = 'REMOVE FROM WATCHED'
                // localStorage.removeItem("queue")
                queueBtn.classList.remove('button--accent-btn')
                queueBtn.textContent = 'ADD TO QUEUE'
                film.push(watch)
            }

            localStorage.setItem('watch', JSON.stringify(film))
        }
        console.log(localStorage.getItem('watch').length)

    }

    function addQueue() {

        if (queue) {
            let film = JSON.parse(localStorage.getItem('queue')) || []


            if (film.includes(queue)) {
                queueBtn.classList.remove('button--accent-btn')
                queueBtn.textContent = 'ADD TO QUEUE'
                film = film.filter(eId => eId !== queue)
            } else {
                queueBtn.classList.add('button--accent-btn')
                queueBtn.textContent = 'REMOVE FROM QUEUE'
                // localStorage.removeItem("watch")
                watchBtn.classList.remove('button--accent-btn')
                watchBtn.textContent = 'ADD TO WATCHED'
                film.push(queue)
            }

            localStorage.setItem('queue', JSON.stringify(film))
        }
    }
}
export {localStorageFunction}