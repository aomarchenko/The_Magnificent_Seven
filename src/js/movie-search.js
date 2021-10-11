import createMovieGalleryTpl from './home-page';
import dataBaseApi from './searchApi.js';
const movieList = document.querySelector('.page-film');
const input = document.querySelector('.search-input');
const {searchMovieFetch } = dataBaseApi;


