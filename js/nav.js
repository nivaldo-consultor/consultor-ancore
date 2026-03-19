/**
 * nav.js
 * Menu mobile acessível.
 *
 * Estratégia: o <ul class="nav__links"> original fica oculto em mobile.
 * Criamos um <div class="nav-drawer"> clonado direto no <body> para
 * escapar de qualquer stacking context do <header> (causado por
 * backdrop-filter, transform, etc.) que quebra o position:fixed.
 */

export function initNav() {
  const toggle   = document.querySelector('.nav__toggle');
  const srcLinks = document.querySelector('.nav__links');
  const nav      = document.querySelector('.site-nav');

  if (!toggle || !srcLinks || !nav) return;

  /* ── Cria o drawer no body ── */
  const drawer = document.createElement('div');
  drawer.className  = 'nav-drawer';
  drawer.id         = 'nav-drawer';
  drawer.setAttribute('aria-label', 'Menu de navegação');

  // Clona os itens internos (links + botão CTA)
  srcLinks.querySelectorAll('li').forEach((li) => {
    drawer.appendChild(li.cloneNode(true));
  });

  document.body.appendChild(drawer);

  /* ── Helpers ── */
  function isMobile() {
    return window.innerWidth <= 960;
  }

  function openMenu() {
    drawer.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-controls', 'nav-drawer');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function isOpen() {
    return drawer.classList.contains('is-open');
  }

  /* ── Toggle ao clicar no botão ── */
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen() ? closeMenu() : openMenu();
  });

  /* ── Fecha ao clicar em qualquer link do drawer ── */
  drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  /* ── Fecha ao clicar fora ── */
  document.addEventListener('click', (e) => {
    if (isOpen() && !nav.contains(e.target) && !drawer.contains(e.target)) {
      closeMenu();
    }
  });

  /* ── Fecha com Escape ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  /* ── Fecha se viewport crescer além do breakpoint ── */
  window.addEventListener('resize', () => {
    if (!isMobile() && isOpen()) {
      closeMenu();
    }
  });
}