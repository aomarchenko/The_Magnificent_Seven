import libaryHeader from '../templates/header-libary.hbs'
const inputRef = document.querySelector('.search-form');
const pageHomeBtn = document.querySelector('.js-button-home')
const pageLibaryBtn = document.querySelector('.js-button-libary')
const headerRef = document.querySelector('.header');
const formRef = document.querySelector('.search-input');
const buttonSearchRef = document.querySelector('.search-button');


const renderLibary = e => {
    e.preventDefault();

    const markUp = libaryHeader();

    inputRef.insertAdjacentHTML('beforebegin', markUp);
    headerRef.classList.add('header-library')
    pageHomeBtn.classList.remove('current');
    pageLibaryBtn.classList.add('library_current')
    pageLibaryBtn.classList.add('animation')
    formRef.classList.add('opacity')
    buttonSearchRef.classList.add('display-none')
    inputRef.classList.add('display-none')

    pageLibaryBtn.removeEventListener('click', renderLibary);
};

function removeEvent(e) {
    pageLibaryBtn.removeEventListener('click', renderLibary);
}


function renderPageLibary(e){
    if (headerRef.classList.contains('header-library')) {
        e.preventDefault();
        return;
    }
    renderLibary(e);
    removeEvent(e);
}
pageLibaryBtn.addEventListener('click', renderPageLibary)