import genres from './genres.json';

const replaceData = (array => {
    console.log(array);
        return array.map(el => {
            if (el.release_date) {
                el.release_date = new Date(el.release_date).getFullYear();
            }
            el.genre_ids = getNameGenres(el);
            return el;
        })
    })
    // console.log(replaceYear());
  
  const getNameGenres = (movieArray => {
        console.log(movieArray);
        if (movieArray.genre_ids.length > 3) {
            movieArray.genre_ids.length = 3;
            movieArray.genre_ids[2] = ' Other';
        }
        return movieArray.genre_ids.map((genreId, id) => {
            for (const num of genres) {
                if (num.id === genreId) {
                    if (id === 0) 
                    return num.name;
                    
                }
            }
            return genreId;
        })
    })
  // console.log(replaceGenres(movieArray));
  export {replaceData, getNameGenres}