import genres from './genres.json';

export default class DataBaseApi{
    constructor(){
this.API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
this.BASE_URL = 'https://api.themoviedb.org/3/';
this.trendingRequest = 'trending/movie/week';
this.keyWordRequest = 'search/movie';
this.page = 1;
this.request = '';
this.genres = genres;
    }
async homePageFetch(){
    try{
    let response = await fetch(`${this.BASE_URL}${this.trendingRequest}?api_key=${this.API_KEY}`);
    let data = await response.json();
    let result = await data.results;
        return result; 
    }     
    catch (error){
        alert({
            text: 'error',
            delay: 1000,
            hide: true,
            }); 
    }    
    
}

async searchMovieFetch(){         
   try{
    let response = await fetch(`${this.BASE_URL}${this.keyWordRequest}?api_key=${this.API_KEY}&query=${this.request}`)
    let data = await response.json();
    let result = await data.results
           return result;
   }
   catch (error){
    alert({
        text: 'error',
        delay: 1000,
        hide: true,
        }); 
}    
}

clearPage(){
    
}
getMovieGenreIds(id) {
    console.log(id);
    const genreArray = id.map(id_genre => {
         const genre = this.genres.find(genre => id_genre === genre.id);
        if (genre === undefined) return;
             return genre.name;   
    })
     if (genreArray.length > 2) {
         return genreArray.slice(0, 2).join(', ') + ', ' + 'Other';
     }
     if (genreArray.includes(undefined)) {
         return genreArray.join('');
     } else {
         return genreArray.join(', ');
     }

 }

getMovieObjectForRender(MovieData) {
    if (!MovieData) {return}
    return {
        poster_path: MovieData.poster_path || MovieData.backdrop_path,
        title: MovieData.title || MovieData.original_name,
        genres: MovieData.genres ?
            MovieData.genres.map(genre => genre.name).join(', ') : this.getGenreById(MovieData.genre_ids),
        year: MovieData.release_date === undefined ? MovieData.first_air_date === undefined ? 'Год не указан' : MovieData.first_air_date.slice(0, 4) :  MovieData.release_date.slice(0, 4),
        // vote_average: MovieData.vote_average.toFixed(1),
        // overview: MovieData.overview,
        // popularity: MovieData.popularity.toFixed(1),
        // vote_count: MovieData.vote_count,
        // original_title: MovieData.original_title,
        id: MovieData.id
    }

}
}
