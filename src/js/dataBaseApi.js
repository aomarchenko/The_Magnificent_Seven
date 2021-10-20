import genres from './genres.json';
import NProgress from 'nprogress';
export default class DataBaseApi{
    constructor(){
this.API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
this.BASE_URL = 'https://api.themoviedb.org/3/';
this.trendingRequest = 'trending/movie/week';
this.keyWordRequest = 'search/movie';
this.page = 1;
this.request = '';
this.genres = genres;
//Для пагінації//
this.totalPages;
this.totalResults;
this.url = ''
    }
    async homePageFetch() {
     NProgress.start();
    NProgress.configure({ ease: 'ease', speed: 800 });
        NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 })
         NProgress.done();
    try {
        
    let response = await fetch(`${this.BASE_URL}${this.trendingRequest}?api_key=${this.API_KEY}`);
    let data = await response.json();
        let result = await data.results;
    //  console.log(result);
        return result; 
    }     
    
    catch (error){
        alert({
            text: 'error',
            delay: 1000,
            hide: true,
            }); 
    }    
     NProgress.done();

}

//////////Додав fetch для пагінації щоб можна було дістати сторінки(Богдан)////////
async searchMovieFetch(request){
    if (request && request !== '') {
        this.url = `${this.BASE_URL}${this.keyWordRequest}?api_key=${this.API_KEY}&query='${this.request}&page=${this.page}`;}
        else {
        this.url = `${this.BASE_URL}${this.trendingRequest}?api_key=${this.API_KEY}&page=${this.page}`;
    }  
    try{ 
    const response = await fetch(this.url);
    const data = await response.json();
    
    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;

    this.page = data.page;
    
    //console.log(data.page)
    //console.log(data.total_pages);
    //console.log(data);
    return data;
    }catch (error) {
        console.log(error);
    }

}
////////////////////////////////////////////////////////////////////

//async searchMovieFetch(){         
  // try{
   // let response = await fetch(`${this.BASE_URL}${this.keyWordRequest}?api_key=${this.API_KEY}&query='${this.request}'`)
    //let data = await response.json();
   // let result = await data.results
   
         // return result;
  // }
  // catch (error){
    //alert({
       // text: 'error',
       // delay: 1000,
       // hide: true,
       // }); 
//}    
//}

// async getGenresList() {
//     try{
//     let response = await fetch(`${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}&language='en'`)
//     let data = await response.json();
//     console.log(data);
//             return data;
//     }
//     catch (error){
//         alert({
//             text: 'error',
//             delay: 1000,
//             hide: true,
//             }); 
//     }    
// }

// getMovieGenreIds(id) {
//     console.log(id);
//     this.homePageFetch()
//     .then(array=>{array.map (arr => const id=arr.genres_ids )})
//     const genreArray = id.map(id_genre => {
//          const genre = this.genres.find(genre => id_genre === genre.id);
//         if (genre === undefined) return;
//              return genre.name;   
//     })
//      if (genreArray.length > 2) {
//          return genreArray.slice(0, 2).join(', ') + ', ' + 'Other';
//      }
//      if (genreArray.includes(undefined)) {
//          return genreArray.join('');
//      } else {
//          return genreArray.join(', ');
//      }

//  }

// getMovieObjectForRender(movieArray) {
//     console.log(movieArray.genres);
//     if (!movieArray) {return}
//     return {
//         poster_path: movieArray.poster_path || movieArray.backdrop_path,
//         title: movieArray.title || movieArray.original_name,
//         genres: movieArray.genres ?
//             movieArray.genres.map(genre => genre.name).join(', ') : this.getMovieGenreIds(movieArray.genre_ids),
//         year: movieArray.release_date === undefined ? movieArray.first_air_date === undefined ? 'Год не указан' : movieArray.first_air_date.slice(0, 4) :  movieArray.release_date.slice(0, 4),
//         id: movieArray.id,
//         vote_average: filmData.vote_average.toFixed(1),
//     }

// // }


get requests (){
    return this.request
}

set requests (newRequest){
    this.request = newRequest
}


//incrementPage(){
//this.page +=1
    
//}
 


}
/////Додав для зручності експорту/////
export const dataBaseApi = new DataBaseApi();