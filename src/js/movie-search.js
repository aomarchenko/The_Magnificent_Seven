import createMovieGalleryTpl from './home-page';
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
      
    })
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

function createCountryListMarckup(array) {
      refs.countryList.innerHTML = countriesTpl(array);
}

function createCountryDataMarckup(array) {
  refs.countryData.innerHTML = countryTpl(array[0]);
}
function clearMarckup(marckup, value){
  marckup.innerHTML = value;

}

input.addEventListener('input', debounce(onSearchResult, 500))