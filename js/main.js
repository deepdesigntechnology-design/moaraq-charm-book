document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  }
  navLinks.forEach(link => {
    link.addEventListener('click', () => { if (mainNav) mainNav.classList.remove('open'); });
  });
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const y = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const h = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (y >= top && y < top + h) {
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + id) l.classList.add('active');
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  reveals.forEach(el => obs.observe(el));
});
