const API_KEY = 'aa19f289e41f4e3ac70c0546f19e5928';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendingRequest = 'trending/movie/week';


export default class DataBaseApi{
    constructor(){
    this.totalPages;
    this.totalResults;

    this.url = ''
    this.page = 1;
    this.request = '';
    }
async homePageFetch(){         
    let response = await fetch(`${BASE_URL}${trendingRequest}?api_key=${API_KEY}`);
    let data = await response.json();
        //console.log(data);   
    let result = await data.results
        //console.log(result);
        return result;
}

async searchMovieFetch(request){
    if (request && request !== '') {
        this.url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.request}&page=${this.page}`;
      } else {
        this.url = `${BASE_URL}${trendingRequest}?api_key=${API_KEY}&page=${this.page}`;
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


get requests (){
    return this.request
}

set requests (newRequest){
    this.request = newRequest
}


incrementPage(){
this.page +=1
    
}
 
clearPage(){
 this.page = 1;
}

}

export const dataBaseApi = new DataBaseApi();
