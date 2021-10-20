import { createMovieGalleryTpl } from '../home-page';
import NProgress from 'nprogress';
import {
    inputRef,
    pageHomeBtn,
    pageLibaryBtn,
    headerRef,
    formRef,
    buttonSearchRef,
    headerLogoBtn,
} from '../refs/refs'

const renderLibary = e => {
    NProgress.start();
    NProgress.configure({ ease: 'ease', speed: 800 });
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 })
    e.preventDefault();
    
    // const markUp = libaryHeader();

    // inputRef.insertAdjacentHTML('beforebegin', markUp);
    headerRef.classList.add('header-library')
    pageHomeBtn.classList.remove('current');
    pageLibaryBtn.classList.add('library_current')
    pageLibaryBtn.classList.add('animation')
    formRef.classList.add('opacity')
    buttonSearchRef.classList.add('display-none')
    inputRef.classList.add('display-none')

    pageLibaryBtn.removeEventListener('click', renderLibary);
    NProgress.done();
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
};

pageLibaryBtn.addEventListener('click', renderPageLibary)
 

function renderHomePage() {

    createMovieGalleryTpl()
    pageHomeBtn.classList.add('header-home-page');
    pageHomeBtn.removeEventListener('click', renderHomePage);

}

function removeEventHome() {
    pageHomeBtn.removeEventListener('click', renderHomePage)
}

function renderHome(e) {
    
     if (pageHomeBtn.classList.contains('.header-home-page')) {
        e.preventDefault();
        return;
    }
    renderHomePage(e);
    removeEventHome(e);
    
}
pageHomeBtn.addEventListener('click', renderHome);

function renderHomeLogo() {
    e.preventDefault()
    createMovieGalleryTpl()
    headerLogoBtn.classList.add('header-home-page');
    headerLogoBtn.removeEventListener('click', renderHomePage);
}

function removeEventLogo() {
    headerLogoBtn.removeEventListener('click', renderHomePage)
}

function renderPageLogo(e) {

    if (headerLogoBtn.classList.contains('header-home-page')) {
        e.preventDefault();
        return;
    }
    renderHomeLogo(e)
    removeEventLogo(e)
}

headerLogoBtn.addEventListener('click', renderPageLogo);





