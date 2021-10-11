import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
const debounce = require('lodash.debounce');
const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');

const dataBaseApi = new DataBaseApi();

const onSearchResult = () => {
  dataBaseApi.request = input.value.trim();
  console.log(dataBaseApi.request);
  if (!dataBaseApi.request ) return;
  let promisMoviesArray = dataBaseApi.searchMovieFetch(dataBaseApi.request);
  // console.log(promisMoviesArray)
  promisMoviesArray
  .then(array=>{
      console.log(array)
     clearMarkup(movieList, '')
     createMovieListMarckup(movieList, array)
    })
    return
    // .then(array => {
    //   console.log(array);
    //   if (array.length > 10 || array.length === 0) {
    //     return alert({
    //       title: 'Too many matches found.',
    //       text: ' Please enter a more specific query!',
    //       type: 'error',
    //       delay: 3000,
    //       hide: true,
    //     });
    //   }
    //   if (array.length > 1 && array.length <= 10) {
    //     createCountryListMarckup(array);
    //     clearMarckup(refs.countryData, '');
    //   }
    //   if (array.length === 1) {
    //     createCountryDataMarckup(array);
    //     clearMarckup(refs.countryList, '');
    //   }
    
    }
//     )
    
    
//     .catch(() => {
//       alert({
//         title: "Error",
//         text: "Something went wrong",
//         type: 'error',
//         delay: 3000,
//         hide: true,
//       })
//     })
   
// };

function createMovieListMarckup(markup, array) {
  markup.innerHTML = movieCardTpl(array);
}
function clearMarkup(markup, value){
  markup.innerHTML = value;
}
input.addEventListener('input', debounce(onSearchResult, 500))