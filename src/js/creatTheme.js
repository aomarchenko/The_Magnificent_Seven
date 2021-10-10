const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const footer = document.querySelector('footer');
const footertext = document.querySelector('.js-footer');
const footertextlink = document.querySelector('.js-footer-link');
const footercolor = document.querySelector('.js-footer-color')
const change = document.getElementById('theme-switch-toggle');
const linkGoit = document.querySelector('.js-goit')

change.addEventListener('change', changeTheme);
savedTheme();

function changeTheme(e) {
    e.currentTarget.checked ? changeThemeDark() : changeThemeLight();
};

function changeThemeDark() {
  footer.classList.add(Theme.DARK);
  footer.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  footertext.classList.add(Theme.DARK)
  footertext.classList.remove(Theme.LIGHT)
  footertextlink.classList.add(Theme.DARK)
  footertextlink.classList.remove(Theme.LIGHT)
  footercolor.classList.add(Theme.DARK)
  footercolor.classList.remove(Theme.LIGHT)
  linkGoit.classList.add(Theme.DARK)
  linkGoit.classList.remove(Theme.LIGHT);
  localStorage.setItem('toggle', Theme.DARK);
  change.checked = true;
};

function changeThemeLight() {
  footer.classList.add(Theme.LIGHT)
  footer.classList.remove(Theme.DARK)
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  footertext.classList.add(Theme.LIGHT)
  footertext.classList.remove(Theme.DARK)
  footertextlink.classList.add(Theme.LIGHT)
  footertextlink.classList.remove(Theme.DARK)
  footercolor.classList.add(Theme.LIGHT)
  footercolor.classList.remove(Theme.DARK)
  linkGoit.classList.add(Theme.LIGHT)
  linkGoit.classList.remove(Theme.DARK);
  localStorage.setItem('toggle', Theme.LIGHT);
  change.checked = false;
}

function savedTheme() {
  const current = localStorage.getItem('toggle');
  if (current === Theme.LIGHT) {
      changeThemeLight();
    return;
  }

  if (current === Theme.DARK) {
      changeThemeDark();
    return;
  }
}
savedTheme();