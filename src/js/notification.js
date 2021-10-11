import '@pnotify/core/dist/PNotify.css';
import '../sass/BrightTheme.css';
import { error, alert } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/mobile/dist/PNotifyMobile.css';

const mainSearchInput = document.querySelector('.search-input');
mainSearchInput.addEventListener('input', searchInputFilter);

function searchInputFilter(e) {
  const query = e.target.value;
  let data;
  if (query !== '1') {
    error({ text: 'There is no films exist with such name. Check your input' });
  }

  //    else if (data.status === 404) {
  //     error({ text: 'There is no films exist with such name. Check your input' });
  //   }
}
