import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import {replaceData} from './change-data.js';
import '@pnotify/core/dist/PNotify.css';
import '../sass/BrightTheme.css';
// import pagination from '../js/pagination'
import { error, alert } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import notification from './notification.js'
import '@pnotify/mobile/dist/PNotifyMobile.css';

const debounce = require('lodash.debounce');
export const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');

const dataBaseApi = new DataBaseApi();

export const onSearchResult =  (e) => {
  e.preventDefault();
  dataBaseApi.request = input.value.trim();
  console.log(dataBaseApi.request);
  if (!dataBaseApi.request ) 
  return alert({
    text: 'Opps! No request! Try again!',
    type: 'error',
    delay: 1000,
    hide: true,
  }); 
  let promisMoviesArray = dataBaseApi.searchMovieFetch(dataBaseApi.request);

  promisMoviesArray
  .then(array=>{
    if (array.length === 0) {
      return alert({
          title: "I don't know such movie.",
          text: 'Please enter a more specific query!',
          type: 'error',
          delay: 1000,
          hide: true,
        });   
    }
    if (array.length >= 1) {
      movieList.innerHTML = '';
      movieList.innerHTML = movieCardTpl(replaceData(array));
    }

  })
.catch(() => {
    alert({
      title: "Error",
      text: "There is no films exist with such name. Check your input",
      type: 'error',
      delay: 1000,
      hide: true,
    })
  })

}
  


// export function createMovieListMarckup(data) {
//   movieList.innerHTML = movieCardTpl(data);
// }

// function clearMarkup(){
//   movieList.innerHTML = ('');
// }


input.addEventListener('input', debounce(onSearchResult, 500))