import movieCardTpl from '../templates/movie-card.hbs';
import dataBaseApi from './searchApi.js';

const movieList = document.querySelector('.page-film');
const {genreFetch} = dataBaseApi
console.log(genreFetch());
