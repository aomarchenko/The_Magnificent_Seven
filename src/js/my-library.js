const library = document.querySelector('.library-js');



library.addEventListener("click", onClick);

function onClick(params) {
    library.classList.add('library_current');
}