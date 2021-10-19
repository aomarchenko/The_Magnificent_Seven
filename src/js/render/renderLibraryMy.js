import libraryMistake from '../../templates/clear-library.hbs';
import libraryitem from '../../templates/library-item.hbs';
import movieCard from '../../templates/movie-card.hbs';
import {
    galleryTps,
    pageLibaryBtn,
    movieList,
    watchedBtn,
    queueBtn,
} from '../refs/refs'


const watchedId = JSON.parse(localStorage.getItem('watch'));
for (let id of watchedId) {
   getMovieById(id)
}


function getMovieById(id) {
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
    .then(res => {
    return res.json();
})
    .then(film => {
    const markup = libraryitem(film);
        console.log(markup);
        galleryTps.insertAdjacentHTML('beforeend', markup);
    });
    } 