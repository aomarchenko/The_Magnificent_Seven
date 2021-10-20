import libraryMistake from '../../templates/clear-library.hbs';
import libraryCard from '../../templates/library-card.hbs';
import {
    movieList,
    pageLibaryBtn,
    watchedBtn,
    queueBtn,
    libraryBox,
} from '../refs/refs'


pageLibaryBtn.addEventListener('click', onWatchedClick);
watchedBtn.addEventListener('click', onWatchedClick);
queueBtn.addEventListener('click', onQueueClick);



function fetchMovieById(id) {
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
    .then(res => {
    return res.json();
})
    .then(film => {
    const markup = libraryCard(film);
        console.log(markup);
        movieList.insertAdjacentHTML('beforeend', markup);
        
    });
}
function onWatchedClick() {
    clearPage();
    addLibraryBtn();
    queueBtn.classList.remove('btn--is-active');
    watchedBtn.classList.add('btn--is-active')
    const watchedId = JSON.parse(localStorage.getItem('watch'));
    
        if (!watchedId) {
        const clearMarkup = libraryMistake();
        movieList.insertAdjacentHTML('beforeend', clearMarkup);
        const btnGoHome = document.querySelector('.library-button');
        btnGoHome.addEventListener('click', refreshPage);
        }
        else {
            for (let id of watchedId) {
                fetchMovieById(id);
                
        }
        }
}
function onQueueClick() {
    clearPage();
        watchedBtn.classList.remove('btn--is-active');
        queueBtn.classList.add('btn--is-active');
    const queuedId = JSON.parse(localStorage.getItem('queue'));
    if (!queuedId) {
        const clearMarkup = libraryMistake();
        movieList.insertAdjacentHTML('beforeend', clearMarkup);
        const btnGoHome = document.querySelector('.library-button');
        btnGoHome.addEventListener('click', refreshPage);
        }
        else {
            for (let id of queuedId) {
                fetchMovieById(id);               
        }
        }  
}


function addLibraryBtn() {
    libraryBox.classList.remove('display-none');
}

function clearPage() {
    movieList.innerHTML = '';
}

function refreshPage() {
  document.location.reload();
}