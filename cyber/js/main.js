/* ============================================
   LOADER
============================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 800);
});

/* ============================================
   PARTICLES GENERATOR
============================================ */
(function generateParticles() {
  const container = document.getElementById('particles');
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left       = Math.random() * 100 + '%';
    p.style.animationDuration  = (8 + Math.random() * 12) + 's';
    p.style.animationDelay     = (Math.random() * 15) + 's';
    p.style.width  = (Math.random() > 0.5 ? 2 : 3) + 'px';
    p.style.height = p.style.width;
    if (i % 3 === 0) p.style.background = '#9b30ff';
    else if (i % 3 === 1) p.style.background = '#0066ff';
    container.appendChild(p);
  }
})();

/* ============================================
   NAVBAR: Scroll behavior + Active link
============================================ */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* ============================================
   BACK TO TOP
============================================ */
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   MOBILE MENU
============================================ */
document.getElementById('navBurger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mobileClose').addEventListener('click', closeMobile);
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================
   SCROLL REVEAL — IntersectionObserver
============================================ */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ============================================
   ANIMATED COUNTERS
============================================ */
function animateCounter(el) {
  const target  = parseInt(el.dataset.target);
  const suffix  = el.dataset.suffix || '';
  const duration = 1800;
  const start    = performance.now();

  function update(timestamp) {
    const elapsed  = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + (progress === 1 ? suffix : '');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterEls = document.querySelectorAll('.counter-num[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObserver.observe(el));

/* ============================================
   SMOOTH SCROLL for all anchor links
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================
   SUBTLE PARALLAX on Hero Visual
============================================ */
const heroVisual = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
  if (!heroVisual) return;
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
  }
}, { passive: true });

/* ============================================
   MOUSE GLOW EFFECT on phase cards
============================================ */
document.querySelectorAll('.phase-inner, .tool-card, .counter-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
});

/* ============================================
   TYPING EFFECT on Hero Badge text
============================================ */
(function typingEffect() {
  const texts = [
    'تسجيل الدفعة الجديدة متاح الآن',
    'انضم إلى آلاف المحترفين',
    'ابدأ رحلتك في الأمن السيبراني'
  ];
  const badgeText = document.querySelector('.hero-badge');
  if (!badgeText) return;
  let textIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const dot = badgeText.querySelector('.dot');
  let currentSpan = document.createElement('span');
  badgeText.appendChild(currentSpan);

  function type() {
    const text = texts[textIdx];
    if (!deleting) {
      currentSpan.textContent = text.slice(0, ++charIdx);
      if (charIdx === text.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      currentSpan.textContent = text.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        textIdx = (textIdx + 1) % texts.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  badgeText.childNodes.forEach(n => { if (n !== dot && n !== currentSpan) badgeText.removeChild(n); });
  setTimeout(type, 1500);
})();
