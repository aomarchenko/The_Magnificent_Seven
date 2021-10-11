import filmCardTmpl from '../templates/modal-window-tpl.hbs'

const closeModalBtn = document.querySelector('.modal__button-close');
const modalWindow = document.querySelector('.backdrop');
const aboutFilmContainer = document.querySelector('.modal__content')




closeModalBtn.addEventListener('click', closeModalFn);

function closeModalFn  () {
    modalWindow.classList.add('is-hidden')
 }


fetch(`https://api.themoviedb.org/3/movie/11?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
.then(res => {return res.json()})
.then(film=> {
    const markup = filmCardTmpl(film);
    aboutFilmContainer.innerHTML = markup;
})

// fetch(`https://api.themoviedb.org/3/configuration?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
// .then(res => {return res.json()})
// .then(film=> {
//     console.log(film);
// })

