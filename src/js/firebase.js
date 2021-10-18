import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCoK0KbVR5F9Gbl47XCVO_8gFrP9bTN0K0',
  authDomain: 'imagefinder-5e9b7.firebaseapp.com',
  projectId: 'imagefinder-5e9b7',
  storageBucket: 'imagefinder-5e9b7.appspot.com',
  messagingSenderId: '766200896168',
  appId: '1:766200896168:web:f87beaac54ef331a39009d',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
let email = 'timetravel@ukr.net';
let password = 'password';

createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
const loginBacdrop = document.querySelector('.login__backdrop');
const body = document.querySelector('body');
const closeLoginBtn = document.querySelector('.login__modal--btn-close');
const loginLink = document.querySelector('.js-button-login');

loginLink.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  loginBacdrop.classList.remove('is-hidden');
  body.style.overflow = 'hidden';
  closeLoginBtn.addEventListener('click', onCloseBtn);
  loginBacdrop.addEventListener('click', onBackdrop);
  loginLink.removeEventListener('click', openModal);
  window.addEventListener('keydown', onEsc);
}

function closeModal() {
  body.style.overflow = 'visible';
  loginBacdrop.classList.add('is-hidden');
  loginLink.addEventListener('click', openModal);
  closeLoginBtn.removeEventListener('click', onCloseBtn);
  window.removeEventListener('keydown', onEsc);
  loginBacdrop.removeEventListener('click', onBackdrop);
}
function onCloseBtn() {
  closeModal();
}

function onBackdrop(e) {
  if (!e.target.classList.contains('login__backdrop')) {
    return;
  }
  closeModal();
}

function onEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
