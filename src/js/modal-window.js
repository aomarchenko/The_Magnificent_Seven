import filmCardTmpl from '../templates/modal-window-tpl.hbs'

const closeModalBtn = document.querySelector('.modal__button-close');
const modalWindow = document.querySelector('.backdrop');
const aboutFilmContainer = document.querySelector('.modal__content')
const filmsContainer = document.querySelector('.page-film');


filmsContainer.addEventListener('click', modalOpener)

closeModalBtn.addEventListener('click', closeModalFn);
document.addEventListener("keydown", (evt) =>{
    if(!modalWindow.classList.contains("is-hidden") || evt.code === "Escape"){
        closeModalFn()
    }
});

function closeModalFn  () {
    modalWindow.classList.add('is-hidden');
    aboutFilmContainer.innerHTML = ""
 }

function modalOpener(e) {
    e.preventDefault()
    const id = e.target.dataset.id;

    if(e.target.tagName === 'IMG') {
        modalWindow.classList.remove('is-hidden');
        fetchFilm(id);
    }
    
}

function fetchFilm(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
    .then(res => {return res.json()})
    .then(film=> {
        const markup = filmCardTmpl(film);
        aboutFilmContainer.innerHTML = markup;
    })
}

// const fetchFilmDetails = async (id) => {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa19f289e41f4e3ac70c0546f19e5928`);
//     const film = await res.json;
//     return film
// }
