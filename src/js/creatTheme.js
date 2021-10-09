const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

const change = document.getElementById('theme-switch-toggle');

change.addEventListener('change', changeTheme);
savedTheme();

function changeTheme(e) {
    e.currentTarget.checked ? changeThemeDark() : changeThemeLight();
};

function changeThemeDark() {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    localStorage.setItem('toggle', Theme.DARK)
    change.checked = true;
};

function changeThemeLight() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK)    
    localStorage.setItem('toggle', Theme.LIGHT);
    change.checked = false
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