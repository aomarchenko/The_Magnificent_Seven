// import NProgress from 'nprogress';
import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import {replaceData} from './change-data.js';
// import { opts, spinner, target } from './spinner';
const movieList = document.querySelector('.page-film');
// console.log(movieList);
// console.log(genres);
const dataBaseApi = new DataBaseApi();
// console.log(dataBaseApi);
// console.log(dataBaseApi.getMovieObjectForRender());



function createMovieGalleryTpl() {
  // runs spinner
  // spinner.spin(target);
  //   =======================
  // NProgress.start();
  // NProgress.configure({ ease: 'ease', speed: 800 });
  // NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 });
  const results = dataBaseApi.homePageFetch();
  // console.log(results);
  results.then(array => {
  // const newData = replaceGenres(array)
    movieList.insertAdjacentHTML('beforeend', movieCardTpl(replaceData(array)))
    
    // NProgress.done();
    // stops spinner
    // spinner.stop();
    // ================
  })
  return;
}

createMovieGalleryTpl();

export { createMovieGalleryTpl };
