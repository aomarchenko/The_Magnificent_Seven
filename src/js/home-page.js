import movieCardTpl from '../templates/movie-card.hbs';
import homePageFetch from './dataBaseApi.js';

const movieList = document.querySelector('.page-film');
// console.log(movieList);




function createMovieGalleryTpl(){
    const results = homePageFetch();
    results.then(array => {
        // array.forEach(result =>{
            console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
    }) 
    // })
    return
}
createMovieGalleryTpl()