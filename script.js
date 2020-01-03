document.documentElement.dataset.scroll = 0;

document.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY;
});
