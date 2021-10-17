import { teamLink, teamBackdrop, closeTeamBtn, body } from '../js/refs/refs';

teamLink.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  teamBackdrop.classList.remove('is-hidden');
  body.style.overflow = 'hidden';
  closeTeamBtn.addEventListener('click', onCloseBtn);
  teamBackdrop.addEventListener('click', onBackdrop);
  teamLink.removeEventListener('click', openModal);
  window.addEventListener('keydown', onEsc);
}

function closeModal() {
  body.style.overflow = 'visible';
  teamBackdrop.classList.add('is-hidden');
  teamLink.addEventListener('click', openModal);
  closeTeamBtn.removeEventListener('click', onCloseBtn);
  window.removeEventListener('keydown', onEsc);
  teamBackdrop.removeEventListener('click', onBackdrop);
}

function onCloseBtn() {
  closeModal();
}

function onBackdrop(e) {
  if (!e.target.classList.contains('team__backdrop')) {
    return;
  }
  closeModal();
}

function onEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
