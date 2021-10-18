import libraryMistake from '../../templates/clear-library.hbs'
import {
    galleryTps,
    pageLibaryBtn,
    watchedBtn,
    queueBtn,
} from '../refs/refs'

const watchedId = JSON.parse(localStorage.getItem('watch'));
// console.log(watchedId);

const queueId = localStorage.getItem('queue');


pageLibaryBtn.addEventListener('click', libraryRender);




function fetchFilm(id) {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa19f289e41f4e3ac70c0546f19e5928`)
    .then(res => {
      return res.json();
    });
}

function clickLibraryBtn() {
  galleryTps.innerHTML = '';
}

function refreshPage() {
  document.location.reload();
}

// function watchedRender(e) {
//   e.preventDefault(); 
//   fetchFilm(watchedId);
// }

function libraryRender(e) {  
  clickLibraryBtn();
  if (watchedId) {
    fetchFilm(watchedId);
  }
  else {
    const clearMarkup = libraryMistake();
    galleryTps.insertAdjacentHTML('beforeend', clearMarkup);
    const btnGoHome = document.querySelector('.library-button');
    btnGoHome.addEventListener('click', refreshPage);
  }
}



// function clickWatched(btnWatchedLib, btnQueueLib) {
//   btnWatchedLib.addEventListener('click', renderWatched);

//   function renderWatched() {
//     gallery.innerHTML = '';


//     addedClassButton(btnWatchedLib);
//     removedClassButton(btnQueueLib);
//     if (!watch || watch.length === 0) {
//       plugLib();
//     }
//         });
//       }
//     }
//   }
// }

// function clickQueue(btnWatchedLib, btnQueueLib) {
//   btnQueueLib.addEventListener('click', renderQueue);

//   function renderQueue() {
//     gallery.innerHTML = '';

//     if (!quene|| quene.length === 0) {
//       plugLib();
//     } 
//   }
// }

// function renderAllList() {
//   gallery.innerHTML = '';


//   if (watch.length === 0 && quene.length === 0) {
//     plugLib();
//   } 

// }

