import NProgress from 'nprogress';
// import NProgress from 'nprogress';
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
    createMovieGalleryMarkup(array);

    // movieList.insertAdjacentHTML('beforeend', movieCardTpl(array));

    NProgress.done();
    // stops spinner
    // spinner.stop();
    // ================
  });
  return;
}

createMovieGalleryTpl();

export { createMovieGalleryTpl };
