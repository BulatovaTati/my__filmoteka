document.querySelector('.theme__toggle').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('html').classList.add('dark');
    document.querySelector('.theme__toggle span').textContent = 'dark_mode';
  } else {
    document.querySelector('html').classList.remove('dark');
    document.querySelector('.theme__toggle span').textContent = 'light_mode';
  }
}

addDarkClassToHTML();
