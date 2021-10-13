const itemBox = document.querySelector('.modal__content');
const queueBtm = document.querySelector('.modal__button-queue');

function getCartData() {
        const filmLocalStorage = localStorage.getItem('queue');
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

        localStorage.setItem('queue', JSON.stringify(films));

        return { pushProduct, films };

}

queueBtm.addEventListener('click', putCartData)