////////////////////імпорти///////////
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {formRef} from '../js/refs/refs';
import {dataBaseApi} from './dataBaseApi.js';
import createMovieGalleryMarkup from './change-data.js';
/////////////////// налаштування///////////
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

export const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);


///////////////////основні функції///////////


pagination.on('beforeMove', async event => {
    const currentPage = event.page;
    dataBaseApi.request = formRef.value.trim();
    dataBaseApi.page = currentPage;
    
    //console.log(dataBaseApi.request)
    //console.log(dataBaseApi.totalPages)
    //console.log(dataBaseApi.page)
    const movie = await dataBaseApi.searchMovieFetch(dataBaseApi.request);
    
    //console.log(dataBaseApi.request)
    dataBaseApi.totalPages = movie.total_pages
    //console.log(movie.total_pages)
    //console.log(movie.results)
    createMovieGalleryMarkup(movie.results)
    });
  
    
  let totalItems;
  
const init = async total => {
  if (total === undefined && !totalItems)
   totalItems = await dataBaseApi.searchMovieFetch();
  
 if (total === undefined) total = totalItems.total_pages;

 //console.log(total)
  
 pagination.setTotalItems(total);
 pagination.reset();
};
  
 init();
  
//////експорт для ресета сторінок/////// 
 export default {
   reset: init,
};