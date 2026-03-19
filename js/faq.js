/**
 * faq.js
 * Accordion acessível para o FAQ.
 * Usa aria-expanded no <details>-like pattern com <button>.
 */

export function initFaq() {
  const items = document.querySelectorAll('.faq__item');

  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector('.faq__question');

    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('aria-expanded') === 'true';

      // Fecha todos
      items.forEach((i) => {
        i.setAttribute('aria-expanded', 'false');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado (se estava fechado)
      if (!isOpen) {
        item.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Suporte a teclado: Enter e Space já são nativos em <button>
  });
}
