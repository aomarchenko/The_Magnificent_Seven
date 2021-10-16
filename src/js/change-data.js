import genres from './genres.json';

// console.log(genres);
const replaceData = (array => {
    // console.log(array);
        return array.map(el => {
            if (el.release_date) {
                el.release_date = new Date(el.release_date).getFullYear();
            }
            el.genre_ids = getNameGenres(el);
            return el;
        })
    })
    // console.log(replaceData());
  
  const getNameGenres= (movieArray => {
        // console.log(movieArray);
        if (movieArray.genre_ids.length > 3) {
            movieArray.genre_ids.length = 3;
            movieArray.genre_ids[2] = ' Other';
        } 
        // console.log(movieArray.genre_ids);
        return movieArray.genre_ids.map((genreId, index) => {
            // console.log(genreId);
            // console.log(index);
            for (const genre of genres) {
                // console.log(genre);
                // console.log(genre.name);
                if (genre.index === genreId) {
                    if (index === 0) return genre.name;
                   
                }
                return genres.name;
            }
            // console.log(genreId);
            return genreId;
          
        })
         
    })
 
  export {replaceData, getNameGenres}