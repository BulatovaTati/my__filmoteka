
function localStorageFunction(movieData) {

    const filmObject = JSON.stringify(movieData)

  const watchBtn = document.querySelector('[data-action="watch"]');
  const queueBtn = document.querySelector('[data-action="queue"]');

    watchBtn.addEventListener('click', addWatch)
    queueBtn.addEventListener('click', addQueue)

   
    if (localStorage.getItem('watch').includes(filmObject) && localStorage.getItem('watch').length > 2) {
        watchBtn.classList.add('button--accent-btn')
        watchBtn.textContent = 'REMOVE FROM WATCHED'
        queueBtn.disabled = true
        
    }

    if (localStorage.getItem('queue').includes(filmObject) && localStorage.getItem('queue').length > 2) {
        queueBtn.classList.add('button--accent-btn')
        queueBtn.textContent = 'REMOVE FROM QUEUE'
        watchBtn.disabled = true
    }



    function addWatch() {

        if (movieData) {
            let film = JSON.parse(localStorage.getItem('watch')) || []

            if (film.find(e => e.id === movieData.id)) {

                watchBtn.classList.remove('button--accent-btn')
                watchBtn.textContent = 'ADD TO WATCHED'
                film = film.filter(e => e.id !== movieData.id)
                queueBtn.disabled = false
            } else {

                watchBtn.classList.add('button--accent-btn')
                watchBtn.textContent = 'REMOVE FROM WATCHED'
                queueBtn.disabled = true
                // queueBtn.classList.remove('button--accent-btn')
                // queueBtn.textContent = 'ADD TO QUEUE'
                film.push(movieData)

            }
 
            localStorage.setItem('watch', JSON.stringify(film))
        }

    }

    function addQueue() {

        if (movieData) {
            let film = JSON.parse(localStorage.getItem('queue')) || []

            if (film.find(e => e.id === movieData.id)) {
                queueBtn.classList.remove('button--accent-btn')
                queueBtn.textContent = 'ADD TO QUEUE'
                film = film.filter(e => e.id !== movieData.id)
                watchBtn.disabled = false
            } else {

                queueBtn.classList.add('button--accent-btn')
                queueBtn.textContent = 'REMOVE FROM QUEUE'
                watchBtn.disabled = true
                // watchBtn.classList.remove('button--accent-btn')
                // watchBtn.textContent = 'ADD TO WATCHED'

                film.push(movieData)
            }

      localStorage.setItem('queue', JSON.stringify(film));
    }
  }
}
export { localStorageFunction }


