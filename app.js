const button = document.getElementById('theme-toggle');
function updateLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  button.setAttribute('title', `Switch to ${dark ? 'light' : 'dark'} theme`);
}
button.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('yh-theme', theme); } catch {}
  updateLabel();
});
updateLabel();
