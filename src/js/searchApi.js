const API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendingRequest = 'trending/movie/week';
const movieRequest = 'search/movie';
const genreRequest = 'genre/movie/list';
const page = 1;

export default {
async homePageFetch(){         
    let response = await fetch(`${BASE_URL}${trendingRequest}?api_key=${API_KEY}`);
    let data = await response.json();
        // console.log(data);
    let result = await data.results
        // console.log(result);
    // let img = await result.poster_path
    // console.log(result.poster_path);   
        return result;
},

async searchMovieFetch(){         
    let response = await fetch(`${BASE_URL}${movieRequest}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`)
    let data = await response.json();
        // console.log(data);
    let result = await data.results
        // console.log(result);
    
        return result;
},

async genreFetch(){
    let response = await fetch(`${BASE_URL}${genreRequest}?api_key=${API_KEY}&language=en-US`)
    let data = await response.json();
        console.log(data);
    let result = await data.genres
        console.log(result);
    
        return result; 
}


}

// console.log(searchMovieFetch());