import genres from './genres.json';
import movieCardTpl from '../templates/movie-card.hbs';
const movieList = document.querySelector('.page-film');

export default function createMovieGalleryMarkup(galleryItems) {
  console.log(galleryItems);
  const items = galleryItems.map(galleryItem => {
    const { 
      title, 
      poster_path, 
      id, 
      original_title, 
      release_date, 
      vote_average, 
      genre_ids } =
      galleryItem;
      
    let genreName = [];
    
   if (genre_ids.length > 3) {
      genre_ids.length = 3;
      genre_ids[2] = ' Other';
  } 

   genres.map(genre => { 
      if(genre_ids.includes(Number(genre.id)))
      return genreName.push(genre.name);
      
    })
    
return galleryItem = {
  title,
  poster_path,
  id,
  original_title,
  release_date: release_date.slice(0, 4),
  vote_average,
  genre_ids: genreName
};
})
console.log(items);
movieList.insertAdjacentHTML('beforeend', movieCardTpl(items));
}
// // console.log(genres);
// const replaceData = (array => {
//     // console.log(array);
//         return array.map(el => {
//             if (el.release_date) {
//                 el.release_date = new Date(el.release_date).getFullYear();
//             }
//             el.genre_ids = getNameGenres(el);
//             return el;
//         })
//     })
//     // console.log(replaceData());
  
//   const getNameGenres= (movieArray => {
//         // console.log(movieArray);
//         if (movieArray.genre_ids.length > 3) {
//             movieArray.genre_ids.length = 3;
//             movieArray.genre_ids[2] = ' Other';
//         } 
//         // console.log(movieArray.genre_ids);
//         return movieArray.genre_ids.map((genreId, index) => {
//             // console.log(genreId);
//             // console.log(index);
//             for (const genre of genres) {
//                 // console.log(genre);
//                 // console.log(genre.name);
//                 if (genre.index === genreId) {
//                     if (index === 0) return genre.name;
                   
//                 }
//                 return genres.name;
//             }
//             // console.log(genreId);
//             return genreId;
          
//         })
         
//     })
 
  // export {createMovieGalleryMarkup}