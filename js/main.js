const $ = (_querySelector) => { return document.querySelector(_querySelector); };

let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(isDarkMode)
  $('body').classList.add('darkMode');

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
  if (event.matches) {
    $('body').classList.add('darkMode');

    isDarkMode = true;
  } else {
    $('body').classList.remove('darkMode');

    isDarkMode = false;
  }
});

$('.toggleColorScheme').addEventListener('click', () => {
  if (!isDarkMode) {
    $('body').classList.add('darkMode');

    isDarkMode = true;
  } else {
    $('body').classList.remove('darkMode');

    isDarkMode = false;
  }
});