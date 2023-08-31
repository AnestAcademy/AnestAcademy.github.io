/*!
 * js
 */

(() => {
  'use strict'

  /**
   * Set theme ---------------------------------------------------------------------------
   */

  const getStoredTheme = () => localStorage.getItem('data-theme');

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
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

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  })

  const showActiveTheme = (theme) => {
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('pressed');
    })

    const btnToActive = document.querySelector(`[data-bs-theme-value='${theme}']`);
    btnToActive.classList.add('pressed');
  }


  /**
   * Set color ---------------------------------------------------------------------------
   */

  let storedColor = localStorage.getItem('data-color');

  const getPreferredColor = () => {
    return storedColor ? storedColor : 'tan';
  }

  const setColor = function(color) {
    document.documentElement.setAttribute('data-color', color);
  }

  setColor(getPreferredColor());

  const showActiveColor = (color) => {
    document.querySelectorAll('[data-bs-color-value').forEach(element => {
      element.classList.remove('pressed');
    })

    const btnToActive = document.querySelector(`[data-bs-color-value='${color}']`);
    btnToActive.classList.add('pressed');
  }


  /**
   * Event -------------------------------------------------------------------------------
   */
  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme());
    showActiveColor(getPreferredColor());

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          localStorage.setItem('data-theme', theme);
          setTheme(theme);
          showActiveTheme(theme);
        })
      });

    document.querySelectorAll('[data-bs-color-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const color = toggle.getAttribute('data-bs-color-value');
          localStorage.setItem('data-color', color);
          setColor(color);
          showActiveColor(color);
        })
      });
  })
})()