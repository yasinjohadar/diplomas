/* CYBER PHASE PAGES - SHARED JS */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  const btn = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      const spans = btn.querySelectorAll('span');
      if (menu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else { spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; }); }
    });
  }

  document.querySelectorAll('.code-copy').forEach(b => {
    b.addEventListener('click', () => {
      const code = b.closest('.code-block').querySelector('.code-content');
      if (code) { navigator.clipboard.writeText(code.textContent).then(() => { b.textContent = 'Copied!'; setTimeout(() => b.textContent = 'Copy', 2000); }); }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const t = document.querySelector(href);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
