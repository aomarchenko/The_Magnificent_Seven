// import NProgress from 'nprogress';
import genres from './genres.json';
// import NProgress from 'nprogress';
import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
// import { replaceData } from './change-data.js';
// import { opts, spinner, target } from './spinner';
const movieList = document.querySelector('.page-film');
// console.log(movieList);

const dataBaseApi = new DataBaseApi();
// console.log(dataBaseApi);
// console.log(dataBaseApi.getMovieObjectForRender());

// console.log(genres);
function createMovieGalleryTpl() {
  // runs spinner
  // spinner.spin(target);
  //   =======================
  // NProgress.start();
  // NProgress.configure({ ease: 'ease', speed: 800 });
  // NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 });
  const results = dataBaseApi.homePageFetch();
  // console.log(results);
  results.then(array => {
    const markupData = createMovieGalleryMarkup(array);
console.log(markupData);
    // const newData = replaceGenres(array)
    movieList.insertAdjacentHTML('beforeend', movieCardTpl(markupData));

    // NProgress.done();
    // stops spinner
    // spinner.stop();
    // ================
  });
  return;
}

createMovieGalleryTpl();

export { createMovieGalleryTpl };

function createMovieGalleryMarkup(galleryItems) {
  const item = galleryItems.map(galleryItem => {
    const { title, poster_path, id, original_title, release_date, vote_average, genre_ids } =
      galleryItem;
    let genreName = [];
    // const date = release_date.slice(0, 4);
    release_date.slice(0, 4);
   if (genre_ids.length > 3) {
      genre_ids.length = 3;
      genre_ids[2] = ' Other';
  } 

   genres.map(genre => { 
      if(genre_ids.includes(Number(genre.id)))
      return genreName.push(genre.name);
      
    })
//  return 
// return `<li class='movie__item' data-id=${id}>
// <a class='movie__link' href='./' data-id=${id}>
//   <div class='movie__thumb'>
//     <img
//       class='movie__img'
//       src='https://image.tmdb.org/t/p/w500${poster_path}'
//       alt='${title}'
//       width='274'
//       height='398'
//       data-id='${id}''
//     />
//   </div>
//   <div class='movie__text'>
//     <h2 class='movie__title'>${original_title}</h2>
//     <p class='movie__genre'>${genreName} | ${date}</p>
//   </div>
//   <div class='one-card_overlay'>
//     <div class='one-card__rate'>${vote_average}</div>
//     <button type='button' class='btn_one-card' data-action=''>Add to watched</button>
//     <button type='button' class='btn_one-card' data-action=''>Add to queque</button>
//   </div>
// </a>
// </li>`;

  })

  // movieList.innerHTML = item.join('');
}