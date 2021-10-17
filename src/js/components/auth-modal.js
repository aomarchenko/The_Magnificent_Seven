import * as basicLightbox from 'basiclightbox';
import getRefs from '../refs/refs';
import 'basicLightbox/dist/basicLightbox.min.css';

const refs = getRefs();

if (authUser.userId) {
  refs.logInBtn.classList.add('visually-hidden');
} else {
  refs.logInBtn.classList.remove('visually-hidden');
}

refs.authorisationBtn.addEventListener('click', onLogInLogOut);

function onLogInLogOut(event) {
  if (event.target.dataset.action === 'log-in') {
    if (!authUser.userId || authUser.userId === 'undefined') {
      authUser.openModalAuth();
    }
  }
}

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
