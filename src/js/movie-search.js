import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import '@pnotify/core/dist/PNotify.css';
import '../sass/BrightTheme.css';
import { error, alert } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/mobile/dist/PNotifyMobile.css';

const debounce = require('lodash.debounce');
const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');

const dataBaseApi = new DataBaseApi();

const onSearchResult = () => {
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
  // console.log(promisMoviesArray)
  promisMoviesArray
 .then(array=>{
      console.log(array)
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
          clearMarkup(movieList, '')
          createMovieListMarckup(movieList, array)
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
   
};

function createMovieListMarckup(markup, array) {
  markup.innerHTML = movieCardTpl(array);
}
function clearMarkup(markup, value){
  markup.innerHTML = value;
}
input.addEventListener('input', debounce(onSearchResult, 500))