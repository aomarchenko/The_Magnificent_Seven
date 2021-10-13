import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import '@pnotify/core/dist/PNotify.css';
import '../sass/BrightTheme.css';
import pagination from '../js/pagination'
import { error, alert } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/mobile/dist/PNotifyMobile.css';

const debounce = require('lodash.debounce');
export const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');

const dataBaseApi = new DataBaseApi();

export const onSearchResult = async (event) => {
  event.preventDefault();
  dataBaseApi.request = input.value.trim();

  //console.log(event);

  dataBaseApi.clearPage();
  clearMarkup();
   if (!dataBaseApi.request) {
   alert({
    text: 'Opps! No request! Try again!',
    type: 'error',
    delay: 1000,
    hide: true,
  });
  document.querySelector('#pagination').innerHTML = '';
}
  fetchMovie();
};



async function fetchMovie(){
  const movies = await dataBaseApi.searchMovieFetch(dataBaseApi.requests);
  //console.log(movies)
  createMovieListMarckup(movies.results)
  pagination.reset(movies.total_results);

  if (movies.results.length === 0) {
    alert({
        title: "I don't know such movie.",
        text: 'Please enter a more specific query!',
        type: 'error',
        delay: 1000,
        hide: true,
      }) 
  } else if (dataBaseApi.request.length === 0) {
     alert({
    title: "Error",
    text: "There is no films exist with such name. Check your input",
    type: 'error',
    delay: 1000,
    hide: true,
  })};
}


export function createMovieListMarckup(data) {
  movieList.innerHTML = movieCardTpl(data);
}

function clearMarkup(){
  movieList.innerHTML = ('');
}


input.addEventListener('input', debounce(onSearchResult, 500))