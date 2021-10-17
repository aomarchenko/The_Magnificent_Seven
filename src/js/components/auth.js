import markupAuth from '../../partials/auth.html';
import { onOpenModal } from '../components/auth-modal';
import settings from './settings';
import { onError, onInfo } from '../components/notifications'

const { DB_AUTH_URL, DB_API } = settings;


const basicLightbox = require('basiclightbox');

// openUp auth modal


const authUser = new AuthUser();
export default authUser;


  //registration
  class AuthUser {
  constructor() {
    this.userId = localStorage.getItem('userId');
    this.token = localStorage.getItem('token');
  }
 async signUp(email, password) {
    let err = '';
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const url = `${DB_AUTH_URL}signUp?key=${DB_API}`;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => (err = data.error));

    if (err) {
      if (err.message === 'MISSING_PASSWORD') {
        onError('ENTER PASSWORD');
      }
      if (err.message === 'EMAIL_EXISTS') {
        onError('A USER WITH SUCH EMAIL ALREADY EXISTS');
      }
      if (err.message === 'INVALID_EMAIL') {
        onError('WRONG EMAIL');
      }
      if (
        err.message ===
        'WEAK_PASSWORD : Password should be at least 6 characters'
      ) {
        onError('PASSWORD MUST BE AT LEAST 6 CHARACTERS');
      }
    } else {
      onInfo('YOU ARE SUCCESSFULLY REGISTERED');
      this.signIn(email, password);
    }
}

 //sighnin

    signIn(email, password) {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const url = `${DB_AUTH_URL}signInWithPassword?key=${DB_API}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          document.location.reload();
          return response.json();
        }
      })
      .then(data => {
        if (data.idToken) {
          this.token = data.idToken;
          this.userId = data.localId;
          localStorage.setItem('token', data.idToken);
          localStorage.setItem('userId', data.localId);

          onInfo('YOU HAVE SUCCESSFULLY LOGGED IN');
          document.querySelector('#js-form__input--email').value = '';
          document.querySelector('#js-form__input--password').value = '';
        } else {
          if (data.error.message === 'INVALID_EMAIL') {
            onError('WRONG EMAIL');
          }
          if (data.error.message === 'EMAIL_NOT_FOUND') {
            onError('YOU ARE NOT REGISTERED');
          }
          if (data.error.message === 'INVALID_PASSWORD') {
            onError('ENTER CORRECT PASSWORD');
          }

          if (data.error.message === 'MISSING_PASSWORD') {
            onError('ENTER PASSWORD');
          }
        }
      })
      .catch(error => console.log('error', error));
    }

      //modal opening

    openModalAuth() {
    onOpenModal(markupAuth);
    const btnSignInRef = document.querySelector('.js-modal__btn--signin');
    const btnSignUpRef = document.querySelector('.js-modal__btn--signup');
    const inputEmailRef = document.querySelector('#js-form__input--email');
    const inputPasswordRef = document.querySelector(
      '#js-form__input--password',
    );
btnSignInRef.addEventListener('click', () => {
      if (inputEmailRef.value === '' && inputPasswordRef.value === '') return;
      const email = inputEmailRef.value;
      const password = inputPasswordRef.value;
      this.signIn(email, password);
    });

    btnSignUpRef.addEventListener('click', () => {
      if (inputEmailRef.value === '' && inputPasswordRef.value === '') return;
      const email = inputEmailRef.value;
      const password = inputPasswordRef.value;
      this.signUp(email, password);
    });
  }
}
