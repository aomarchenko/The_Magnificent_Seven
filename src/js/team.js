import teamTemplate from '../templates/team';
import team from './team.json';

const teamLink = document.querySelector('.footer__link');
const teamModalEl = document.querySelector('.team__modal');
const backdropEl = document.querySelector('.team__backdrop');
const closeBtnEl = document.querySelector('.team__modal--btn-close');

teamLink.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (!document.querySelector('.team')) {
    createTeamTpl();
  }

  backdropEl.classList.remove('is-hidden');
  closeBtnEl.addEventListener('click', onCloseBtn);
  backdropEl.addEventListener('click', onBackdrop);
  teamLink.removeEventListener('click', openModal);
  window.addEventListener('keydown', onEsc);
}

function closeModal() {
  backdropEl.classList.add('is-hidden');
  teamLink.addEventListener('click', openModal);
  closeBtnEl.removeEventListener('click', onCloseBtn);
  window.removeEventListener('keydown', onEsc);
  backdropEl.removeEventListener('click', onBackdrop);
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

function createTeamTpl() {
  teamModalEl.insertAdjacentHTML('beforeend', teamTemplate(team));
}
