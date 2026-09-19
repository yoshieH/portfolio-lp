
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.reveal').forEach(el => {
  if (reduced) return el.classList.add('is-visible');
});
if (!reduced) {
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
  }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
