import NProgress from 'nprogress';
import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import genres from './genres.json';
const movieList = document.querySelector('.page-film');
// console.log(movieList);
// console.log(genres);
const dataBaseApi = new DataBaseApi();
// console.log(homePageFetch);


function createMovieGalleryTpl() {
        NProgress.start();
    NProgress.configure({ ease: 'ease', speed: 800 });
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 });
    const results = dataBaseApi.homePageFetch();
    results.then(array => {
        // console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
         NProgress.done();
    }) 
    return
}
createMovieGalleryTpl()
export {
    createMovieGalleryTpl,
}