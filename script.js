const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section-card');

const activateLink = () => {
  const marker = window.scrollY + 140;
  let currentId = sections[0]?.id || '';

  sections.forEach((section) => {
    if (marker >= section.offsetTop) currentId = section.id;
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });
};

activateLink();
window.addEventListener('scroll', activateLink, { passive: true });
