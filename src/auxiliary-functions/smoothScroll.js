export default function smoothScroll(selector, topOffset) {
  const anhor = document.querySelector(`${selector}`);
  if (anhor !== null)
    return window.scrollBy({
      top: anhor.getBoundingClientRect().top - topOffset,
      behavior: 'smooth',
    });
  return window.scrollBy(0, 0);
}
