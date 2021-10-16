import markupAuth from '../../partials/auth.html';



const basicLightbox = require('basiclightbox');
// openUp auth modal

class AuthUser {
  constructor() {
    this.userId = localStorage.getItem('userId');
    this.token = localStorage.getItem('token');
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

const authUser = new AuthUser();
export default authUser;


  //sighnin


  //registration
