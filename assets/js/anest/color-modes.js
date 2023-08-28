/*!
 * js
 */

(() => {
  "use strict"

  let storeTheme = localStorage.getItem("data-theme");
  let color = localStorage.getItem("color-theme");

  // Set theme
  const getPreferredTheme = () => {
    if (storeTheme) {
      return storeTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const setTheme = function(theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme) => {
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('pressed');
    })

    btnToActive.classList.add('pressed');
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  })

  // Set color
  const changeThemeToTan = () => {
    document.documentElement.setAttribute("color-theme", "tan");
    localStorage.setItem("color-theme", "tan");
  }

  const changeThemeToYellow = () => {
    document.documentElement.setAttribute("color-theme", "yellow");
    localStorage.setItem("color-theme", "yellow");
  }

  const changeThemeToOrange = () => {
    document.documentElement.setAttribute("color-theme", "orange");
    localStorage.setItem("color-theme", "orange");
  }

  const changeThemeToRed = () => {
    document.documentElement.setAttribute("color-theme", "red");
    localStorage.setItem("color-theme", "red");
  }

  const changeThemeToGreen = () => {
    document.documentElement.setAttribute("color-theme", "green");
    localStorage.setItem("color-theme", "green");
  }

  const changeThemeToTeal = () => {
    document.documentElement.setAttribute("color-theme", "teal");
    localStorage.setItem("color-theme", "teal");
  }

  const changeThemeToCyan = () => {
    document.documentElement.setAttribute("color-theme", "cyan");
    localStorage.setItem("color-theme", "cyan");
  }

  if (color === null) color = "tan";

  if (color === "tan") changeThemeToTan();
  if (color === "yellow") changeThemeToYellow();
  if (color === "orange") changeThemeToOrange();
  if (color === "red") changeThemeToRed();
  if (color === "green") changeThemeToGreen();
  if (color === "teal") changeThemeToTeal();
  if (color === "cyan") changeThemeToCyan();

  // event
  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]")
      .forEach(toggle => {
        toggle.addEventListener("click", () => {
          const theme = toggle.getAttribute("data-bs-theme-value");
          localStorage.setItem('data-theme', theme);
          setTheme(theme);
          showActiveTheme(theme);
        })
      })

    document.querySelectorAll("[data-bs-color-value]")
      .forEach(toggle => {
        toggle.addEventListener("click", () => {
          const color = toggle.getAttribute("data-bs-color-value")
          if (color === "tan") {
            changeThemeToTan();
          } else if (color === "yellow") {
            changeThemeToYellow();
          } else if (color === "orange") {
            changeThemeToOrange();
          } else if (color === "red") {
            changeThemeToRed();
          } else if (color === "green") {
            changeThemeToGreen();
          } else if (color === "teal") {
            changeThemeToTeal();
          } else if (color === "cyan") {
            changeThemeToCyan();
          }
        })
      })
  })
})()