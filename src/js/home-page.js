import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import genres from './genres.json';
const movieList = document.querySelector('.page-film');
// console.log(movieList);
// console.log(genres);
const dataBaseApi = new DataBaseApi();
// console.log(homePageFetch);


function createMovieGalleryTpl(){
    const results = dataBaseApi.homePageFetch();
    results.then(array => {
        // console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
    }) 
    return
}
createMovieGalleryTpl()