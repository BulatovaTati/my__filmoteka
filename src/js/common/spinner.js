export default class Spinner {
  constructor() {
    this.overlay = document.querySelector('.js-overlay-modal');
    this.spinner = document.querySelector('.spinner');
  }

  enable() {
    this.overlay.classList.add('active');
    this.spinner.classList.add('spinner--on');
  }

  disable() {
    this.overlay.classList.remove('active');
    this.spinner.classList.remove('spinner--on');
  }
}
