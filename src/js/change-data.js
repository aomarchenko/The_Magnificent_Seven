import genres from './genres.json';
import movieCardTpl from '../templates/movie-card.hbs';
import {movieList} from '../js/refs/refs.js';

export default function createMovieGalleryMarkup(galleryItems) {
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
movieList.insertAdjacentHTML('beforeend', movieCardTpl(items));
}
