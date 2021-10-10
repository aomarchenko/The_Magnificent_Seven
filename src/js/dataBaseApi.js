

const API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendingRequest = 'trending/movie/week';




export default async function homePageFetch(){         
    let response = await fetch(`${BASE_URL}${trendingRequest}?api_key=${API_KEY}`);
    let data = await response.json();
        // console.log(data);
    let result = await data.results
        // console.log(result);
    let img = await result.poster_path
    console.log(result.poster_path);   
        return result;
}


