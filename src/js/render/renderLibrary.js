import libraryRender from '../../templates/clear-library.hbs'
import {
    galleryTps,
    pageLibaryBtn,
} from '../refs/refs'

function refreshPage() {
  document.location.reload();
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

pageLibaryBtn.addEventListener('click', plugLib);
function clickLibraryBtn() {
    galleryTps.innerHTML = '';
}

function plugLib() {
clickLibraryBtn()
  const clearMarkup = libraryRender();

  galleryTps.insertAdjacentHTML('beforeend', clearMarkup);

  const btnGoHome = document.querySelector('.library-button');
  btnGoHome.addEventListener('click', refreshPage);
}