
const button = document.querySelector('.lang-toggle');
const label = document.querySelector('[data-lang-label]');
button?.addEventListener('click', () => {
  document.body.classList.toggle('lang-en');
  const isEn = document.body.classList.contains('lang-en');
  label.textContent = isEn ? 'JP' : 'EN';
  document.documentElement.lang = isEn ? 'en' : 'ja';
});
