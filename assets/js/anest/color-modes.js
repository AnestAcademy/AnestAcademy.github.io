/*!
 * js
 */

(() => {
  'use strict'

  let theme = localStorage.getItem('data-theme');
  //const checkbox = document.getElementById("switch");

  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    //checkbox.checked = true;
  }

  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", 'light');
    //checkbox.checked = false;
  }

  if (theme === null) {
    theme = 'dark';
  }

  if (theme === 'dark') {
    changeThemeToDark();
  }

  if (theme === 'light') {
    changeThemeToLight();
  }

  // checkbox.addEventListener('change', () => {
  //   let theme = localStorage.getItem('data-theme');
  //   if (theme === 'dark') {
  //     changeThemeToLight();
  //   } else {
  //     changeThemeToDark();
  //   }
  // });

  window.addEventListener('DOMContentLoaded', () => {
    //showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          console.log(theme);
        })
      })
  })
})()