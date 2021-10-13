const div = document.querySelector('.backdrop');
const modal = document.querySelector('.modal__window')

modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal__button-queue') {
        const id = e.target.id;

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
    } else if (e.target.className === 'modal__button-watched') {
        const id = e.target.id;

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
    }
})