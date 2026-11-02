let theme = localStorage.getItem('theme') || 'normal';

function updateCSS() {
  document.documentElement.style.setProperty('--OS-theme', `"${theme}"`);
}

updateCSS();

window.addEventListener('storage', (event) => {
  if (event.key === 'theme') {
    theme = event.newValue || 'normal';
    updateCSS();
  }
});

function changeOSTheme(newTheme) {
  theme = newTheme;
  updateCSS();
  localStorage.setItem('theme', theme);
}
