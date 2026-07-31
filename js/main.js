// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Scroll reveal (progressive enhancement) ----------
// Elements are visible by default (see CSS). Only when we're confident
// IntersectionObserver will fire do we "arm" them (hide, then fade in).
// A safety timeout guarantees everything is visible even if something
// goes wrong, so content is never permanently hidden.
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window && revealEls.length) {
  revealEls.forEach((el) => el.classList.add('reveal-armed'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));

  // Safety net: force-reveal anything the observer missed.
  window.setTimeout(() => {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }, 4000);
}

// ---------- Contact form: opens a pre-filled email draft ----------
// No backend on this static site — this simply builds a mailto: link.
// Swap CONTACT_EMAIL below for Safha Labs' real address, or replace this
// handler with a call to Formspree / Getform / your own API route.
const CONTACT_EMAIL = 'hello@safhalabs.id';
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const nama = data.get('nama') || '';
    const kontak = data.get('kontak') || '';
    const kebutuhan = data.get('kebutuhan') || '';
    const pesan = data.get('pesan') || '';

    const subject = `Proyek baru: ${kebutuhan} — ${nama}`;
    const body =
      `Nama: ${nama}\n` +
      `Kontak: ${kontak}\n` +
      `Kebutuhan: ${kebutuhan}\n\n` +
      `Pesan:\n${pesan}`;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
