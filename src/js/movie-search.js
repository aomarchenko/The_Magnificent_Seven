import createMovieGalleryTpl from './home-page';
import dataBaseApi from './searchApi.js';
const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');
const {searchMovieFetch } = dataBaseApi;


const onSearchResault = () => {
    let query = input.value.trim();
    console.log(query);
    if (!query ) return;
     
    let promisMoviesArray = searchMovieFetch(query);
    promisMoviesArray
      .then(res => {
        if (res.status === 404) {
          return alert({
            title: "I don't know such country.",
            text: 'Please ask something more simple.',
            type: 'error',
            delay: 3000,
            hide: true,
          });
        } else {
          return res.json();
        }
      })
      .then(array => {
          console.log(array);
        movieList.insertAdjacentHTML('beforeend', movieCardTpl(array))
        return
    })     
      .catch(() => {
        alert({
          title: "Error",
          text: "Something went wrong",
          type: 'error',
          delay: 3000,
          hide: true,
        })
      })
     
  };
  console.log(onSearchResault());
//   function createCountryListMarckup(array) {
//         refs.countryList.innerHTML = countriesTpl(array);
//   }
  
//   function createCountryDataMarckup(array) {
//     refs.countryData.innerHTML = countryTpl(array[0]);
//   }
//   function clearMarckup(marckup, value){
//     marckup.innerHTML = value;
  
//   }
  
  input.addEventListener('input', onSearchResault)
