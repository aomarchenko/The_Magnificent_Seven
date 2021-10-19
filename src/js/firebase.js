import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import notification from './notification';

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

const loginBacdrop = document.querySelector('.login__backdrop');
const body = document.querySelector('body');
const closeLoginBtn = document.querySelector('.login__modal--btn-close');
const loginLink = document.querySelector('.js-button-login');
const loginForm = document.querySelector('.login');
const loginButton = document.querySelector('.login_modal--btn-login');
const libraryButtonToShow = document.querySelector('.js-button-libary');
const loginButtonToHide = document.querySelector('.js-button-login');
const createAccountButton = document.querySelector('.login_modal--btn-create-acnt');
const headerNav = document.querySelector('header-nav');
const logOutButton = document.querySelector('.js-button-logout');
logOutButton.addEventListener('click', clearStorageValue());
loginForm.addEventListener('click', onSubmit);
loginLink.addEventListener('click', openModal);

function setStorageValue() {
  localStorage.setItem('islogin', true);
}
// function resetPage() {
//   if (null) {
//     console.log('hiii');
//     logOutButton.classList.add('is-hidden');
//     loginButtonToHide.classList.remove('is-hidden');
//   }
// }
export default function getStorageValue() {
  localStorage.getItem('islogin');
  if (true) {
    logOutButton.classList.remove('is-hidden');

    loginButtonToHide.classList.add('is-hidden');
  }

  //   logOutButton.classList.add('is-hidden');
  //   loginButtonToHide.classList.remove('is-hidden');
}
function clearStorageValue() {
  localStorage.removeItem('islogin');
  // resetPage();
  // logOutButton.classList.add('is-hidden');
  // loginButtonToHide.classList.remove('is-hidden');
}
function onSubmit(e) {
  e.preventDefault(e);
  //   console.log(e.target);
  let email = e.currentTarget.elements.mailfield.value;
  let password = e.currentTarget.elements.passwordfield.value;
  if (e.target === createAccountButton) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...

        loginForm.insertAdjacentHTML(
          'beforeend',
          '<p class="login__ok">Account created succesfully, now LOGIN please</p>',
        );
        console.log('ok');
        notification.createUserSucces();
      })

      .catch(error => {
        notification.loginError();
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  } else if (e.target === loginButton) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...

        notification.loginSucces();
        closeModal();
        libraryButtonToShow.classList.remove('is-hidden');
        loginButtonToHide.classList.add('is-hidden');
        setStorageValue();
        getStorageValue();
      })
      .catch(error => {
        notification.loginError();
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

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
