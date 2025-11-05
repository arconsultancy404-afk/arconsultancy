// Scroll reveal animation
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  menuBtn.querySelector('i').classList.toggle('fa-bars');
  menuBtn.querySelector('i').classList.toggle('fa-xmark');
});
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('show'));
});

// Hero Image Slider
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
function showNextSlide() {
  slides[currentSlide].classList.remove('opacity-100');
  slides[currentSlide].classList.add('opacity-0');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.remove('opacity-0');
  slides[currentSlide].classList.add('opacity-100');
}
setInterval(showNextSlide, 3000);
