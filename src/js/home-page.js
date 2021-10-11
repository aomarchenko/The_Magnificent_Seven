import movieCardTpl from '../templates/movie-card.hbs';
import dataBaseApi from './searchApi.js';
import genres from './genres.json';
const movieList = document.querySelector('.page-film');
// console.log(movieList);
// console.log(genres);
const {homePageFetch } = dataBaseApi;
// console.log(homePageFetch);

function createMovieGalleryTpl(){
    const results = homePageFetch();
    results.then(array => {
        console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
    }) 
    return
}
createMovieGalleryTpl()