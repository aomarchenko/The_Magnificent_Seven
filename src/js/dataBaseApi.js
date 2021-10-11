const API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendingRequest = 'trending/movie/week';


export default class DataBaseApi{
    constructor(){
this.page = 1;
this.request = '';
    }
async homePageFetch(){         
    let response = await fetch(`${BASE_URL}${trendingRequest}?api_key=${API_KEY}`);
    let data = await response.json();
        // console.log(data);
    let result = await data.results
        // console.log(result);
        return result;
}

async searchMovieFetch(){         
    let response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.request}`)
    let data = await response.json();
    let result = await data.results
    //     // console.log(data);
    //     //     console.log(result);
    //     // this.incrementPage()
        return result;
}
// incrementPage(){
//     this.page +=1
    
// }
 
// clearPage(){
//     return this.page = 1;
// }

}
