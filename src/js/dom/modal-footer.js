(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-modal__window]'),
    closeModalBtn: document.querySelector('[data-close-modal__window]'),
    modal: document.querySelector('[data-modal__window]'),
  };
  let isShown = false;

  refs.openModalBtn.forEach(el => el.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-open-modal');
    document.body.classList.toggle('js-modal-is-hidden');
    isShown
      ? document.body.removeEventListener('keydown', onKeyDown)
      : document.body.addEventListener('keydown', onKeyDown);
    isShown = !isShown;
  }

  function onBackdropClick(event) {
    if (event.target != event.currentTarget) {
      return;
    }
    toggleModal();
  }

  function onKeyDown(event) {
    event.code === 'Escape' ? toggleModal() : none;
  }
})();
