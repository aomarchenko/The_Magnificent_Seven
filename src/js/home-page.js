import NProgress from 'nprogress';
<<<<<<< Updated upstream
// import NProgress from 'nprogress';
=======
import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import genres from './genres.json';
>>>>>>> Stashed changes
// import { opts, spinner, target } from './spinner';
import DataBaseApi from './dataBaseApi.js';
import createMovieGalleryMarkup from './change-data.js';

const dataBaseApi = new DataBaseApi();

function createMovieGalleryTpl() {
  // runs spinner
  // spinner.spin(target);
  //   =======================
  NProgress.start();
  NProgress.configure({ ease: 'ease', speed: 800 });
  NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 });
  const results = dataBaseApi.homePageFetch();
  results.then(array => {
<<<<<<< Updated upstream
    createMovieGalleryMarkup(array);
    // const markup = getNewDataMarkup(array);
    // console.log(markup);
    // movieList.insertAdjacentHTML('beforeend', movieCardTpl(markup));
    
=======
    movieList.insertAdjacentHTML('beforeend', movieCardTpl(array));
>>>>>>> Stashed changes
    NProgress.done();
    // stops spinner
    // spinner.stop();
    // ================
  });
  return;

}

createMovieGalleryTpl();

export { createMovieGalleryTpl };

