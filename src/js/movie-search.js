import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import notification from './notification';
import createMovieGalleryMarkup from './change-data.js';
// import pagination from '../js/pagination'


const debounce = require('lodash.debounce');
export const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');

const dataBaseApi = new DataBaseApi();

export const onSearchResult = (e) => {
  e.preventDefault();
  dataBaseApi.request = input.value.trim();
  console.log(dataBaseApi.request);
  if (!dataBaseApi.request) return;

  
  let promisMoviesArray = dataBaseApi.searchMovieFetch(dataBaseApi.request);

  promisMoviesArray
  .then(array=>{
    if (array.length === 0) {
      return notification.specifyRequest()
    }
    if (array.length >= 1) {
      movieList.innerHTML = '';
      createMovieGalleryMarkup(array);
    }

  })
    .catch(() => {
      notification.criticalError();
    });
}
input.addEventListener('input', debounce(onSearchResult, 500));
