import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {dataBaseApi} from './dataBaseApi.js';
import {createMovieListMarckup} from './movie-search'



const options = {
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);





pagination.on('beforeMove', async event => {
    const currentPage = event.page;
   
    dataBaseApi.page = currentPage;
    //console.log(dataBaseApi.page)
    const movie = await dataBaseApi.searchMovieFetch();
    //console.log(movie)
    createMovieListMarckup(movie.results)
    });
  
    
  let totalItemsFromServer;
  
 const init = async total => {
  if (total === undefined && !totalItemsFromServer)
   totalItemsFromServer = await dataBaseApi.searchMovieFetch();
  
  if (total === undefined) total = totalItemsFromServer.total_results;
  
 pagination.setTotalItems(total);
 pagination.reset();
 };
  
 init();
  
 export default {
   reset: init,
};