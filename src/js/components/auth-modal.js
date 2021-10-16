import * as basicLightbox from 'basiclightbox';
import refs from '../refs/refs';
import 'basicLightbox/dist/basicLightbox.min.css';

export function onOpenModal(callback) {
  const instance = basicLightbox.create(callback, {
    onClose: instance => {
      refs.body.classList.remove('visually-hidden');
    },
  });
  refs.bodyRef.classList.add('visually-hidden ');
  instance.show();
  window.addEventListener('keydown', escCloseModal);

  const closeModalBtn = document.querySelector('.modal__btn--close');

  const closeModal = () => {
    instance.close();
    window.removeEventListener('keydown', escCloseModal);
  };

  function escCloseModal(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
  closeModalBtn.addEventListener('click', closeModal);
  if (moviesApi.getRefs().listGenreModal) {
    moviesApi.getRefs().listGenreModal.addEventListener('click', event => {
      searchGenreDate(event);
      closeModal();
    });
  }
}
