const conteinet = document.querySelector('.page-film');

conteinet.addEventListener('click', e => {
                const id = e.target.id;    
    if (e.target.classList.contains('js-watch')) {

        function getCartData() {
        const filmLocalStorage = localStorage.getItem('watch');
        if (filmLocalStorage !== null) {
            return JSON.parse(filmLocalStorage);
        }
        return [];
}

        let films = getCartData();
        let pushProduct = false;
        const index = films.indexOf(id);
        if (index === -1) {
            films.push(id);
            pushProduct = true;

            localStorage.setItem('watch', JSON.stringify(films));

            return { pushProduct, films };

        }
    } else if (e.target.classList.contains('js-queque')) {
        function getCartData() {
        const filmLocalStorage = localStorage.getItem('queue');
        if (filmLocalStorage !== null) {
            return JSON.parse(filmLocalStorage);
        }
        return [];
}

        let films = getCartData();
        let pushProduct = false;
        const index = films.indexOf(id);
        if (index === -1) {
            films.push(id);
            pushProduct = true;

            localStorage.setItem('queue', JSON.stringify(films));

            return { pushProduct, films };

        }
    }
})