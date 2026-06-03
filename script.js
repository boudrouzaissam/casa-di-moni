const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    if (navLinks) navLinks.classList.remove('active');
  });
});

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img src="" alt="Expanded image">';
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('img');

document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
