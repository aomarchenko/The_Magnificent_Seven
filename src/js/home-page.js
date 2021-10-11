import movieCardTpl from '../templates/movie-card.hbs';
import dataBaseApi from './searchApi.js';
const movieList = document.querySelector('.page-film');
// console.log(movieList);

const {homePageFetch } = dataBaseApi;
// console.log(homePageFetch);


function createMovieGalleryTpl(){
    const results = homePageFetch();
    results.then(array => {
        // array.forEach(result =>{
            // console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
    }) 
    // })
    return
}
createMovieGalleryTpl()