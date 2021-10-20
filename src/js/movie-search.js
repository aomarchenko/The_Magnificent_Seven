import {movieList, formRef} from '../js/refs/refs';
import DataBaseApi from './dataBaseApi.js';
import notification from './notification';
import createMovieGalleryMarkup from './change-data.js';

import pagination from '../js/pagination'



const debounce = require('lodash.debounce');
const dataBaseApi = new DataBaseApi();

export const onSearchResult = async (e) => {
  e.preventDefault();
  dataBaseApi.request = formRef.value.trim();

  //console.log(dataBaseApi.request);

  if (!dataBaseApi.request) return;

  let promisMoviesArray = await dataBaseApi.searchMovieFetch(dataBaseApi.request);

  console.log(promisMoviesArray.results);
    if (promisMoviesArray.results.length === 0) {
     return notification.specifyRequest()
    } else if(promisMoviesArray === undefined) {
     notification.criticalError();
   }
      movieList.innerHTML = '';
      createMovieGalleryMarkup(promisMoviesArray.results);
      pagination.reset();
  //let promisMoviesArray = dataBaseApi.searchMovieFetch(dataBaseApi.request);

  //promisMoviesArray
  ////.then(array=>{
    //if (array.length === 0) {
     // return notification.specifyRequest()
   // }
   // if (array.length >= 1) {
     // movieList.innerHTML = '';
     // createMovieGalleryMarkup(array);
     // pagination.reset();
   // }
 // })
  //  .catch(() => {
   //   notification.criticalError();
   // });
}
formRef.addEventListener('input', debounce(onSearchResult, 500));

