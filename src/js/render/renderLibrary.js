import libraryMistake from '../../templates/clear-library.hbs';
import libraryCard from '../../templates/library-card.hbs';
import {
    movieList,
    pageLibaryBtn,
    watchedBtn,
    queueBtn,
    libraryBox,
} from '../refs/refs'


pageLibaryBtn.addEventListener('click', onLibraryClick);
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
function onLibraryClick() {
    const watchedId = JSON.parse(localStorage.getItem('watch'));
    const queuedId = JSON.parse(localStorage.getItem('queue'));
    clearPage();
    addLibraryBtn();
    
    if (!watchedId && !queuedId) {
            queueBtn.classList.remove('btn--is-active');
            watchedBtn.classList.remove('btn--is-active')
        onEmptyLocal();
        }
    else if (watchedId && queuedId) {
            onWatchedClick();
        }
    else if (watchedId && !queuedId) {
            onWatchedClick();
           } 
        else {
            onQueueClick();
        }
}


function onQueueClick() {
    clearPage();
        const queuedId = JSON.parse(localStorage.getItem('queue'));
        watchedBtn.classList.remove('btn--is-active');
        queueBtn.classList.add('btn--is-active');
    if (!queuedId) {
        onEmptyLocal()
        }
        else {
            for (let id of queuedId) {
                fetchMovieById(id);               
        }
        }  
}

function onWatchedClick() {
    clearPage();
    const watchedId = JSON.parse(localStorage.getItem('watch'));
    watchedBtn.classList.add('btn--is-active');
    queueBtn.classList.remove('btn--is-active');
    if (!watchedId) {
        onEmptyLocal();
    }
    else {
        for (let id of watchedId) {          
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
function onEmptyLocal() {
    const clearMarkup = libraryMistake();
    movieList.insertAdjacentHTML('beforeend', clearMarkup);
    const btnGoHome = document.querySelector('.library-button');
    btnGoHome.addEventListener('click', refreshPage);
}