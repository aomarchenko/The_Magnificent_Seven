const itemBox = document.querySelector('.modal__content');
const watchBtm = document.querySelector('.modal__button-watched');


function getCartData() {
        const filmLocalStorage = localStorage.getItem('watch');
        if (filmLocalStorage !== null) {
            return JSON.parse(filmLocalStorage);
        }
        return [];
}

function putCartData() {
    let films = getCartData();
    let pushProduct = false;
    const index = films.indexOf(itemBox.dataset.id);
    if (index === -1) {
      films.push(itemBox.dataset.id);
      pushProduct = true;
      
        }

        localStorage.setItem('watch', JSON.stringify(films));

        return { pushProduct, films };

}

watchBtm.addEventListener('click', putCartData)