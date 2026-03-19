/**
 * main.js — Entry point
 * Importa e inicializa todos os módulos JS.
 * Usando ES Modules nativos (type="module" no HTML).
 */

import { initNav }          from './nav.js';
import { initFaq }          from './faq.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initCounters }     from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFaq();
  initScrollReveal();
  initCounters();
});
