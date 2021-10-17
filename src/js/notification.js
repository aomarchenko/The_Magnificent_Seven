import '@pnotify/core/dist/PNotify.css';
import '../sass/BrightTheme.css';
import { alert } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/mobile/dist/PNotifyMobile.css';

export default {
  emptyInput() {
    alert({
      text: 'Opps! No request! Try again!',
      type: 'error',
      delay: 1000,
      hide: true,
    });
  },
  specifyRequest() {
    alert({
      title: "I don't know such movie.",
      text: 'Please enter a more specific query!',
      type: 'error',
      delay: 1000,
      hide: true,
    });
  },
  criticalError() {
    alert({
      title: 'Error',
      text: 'Critical error has occured. Please, try your request later',
      type: 'error',
      delay: 1000,
      hide: true,
    });
  },
};
