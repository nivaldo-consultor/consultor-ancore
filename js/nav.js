/**
 * nav.js
 * Menu mobile com toggle acessível e fechamento ao clicar em link.
 */

export function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  const nav    = document.querySelector('.site-nav');

  if (!toggle || !links) return;

  // Toggle menu
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');
    links.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha ao clicar em qualquer link
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && links.classList.contains('is-open')) {
      toggle.classList.remove('is-open');
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Fecha com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      toggle.classList.remove('is-open');
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}
