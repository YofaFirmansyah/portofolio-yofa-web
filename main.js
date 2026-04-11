import './style.css'

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let menuOpen = false;

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden');

    // Animate hamburger to X
    if (menuOpen) {
      bar1.style.transform = 'rotate(45deg) translate(5px, 5px)';
      bar2.style.opacity = '0';
      bar3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bar1.style.transform = 'none';
      bar2.style.opacity = '1';
      bar3.style.transform = 'none';
    }
  });

  // Close mobile menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.add('hidden');
      bar1.style.transform = 'none';
      bar2.style.opacity = '1';
      bar3.style.transform = 'none';
    });
  });
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    navbar.classList.add('shadow-brutal-sm');
  } else {
    navbar.classList.remove('shadow-brutal-sm');
  }

  lastScroll = currentScroll;
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply reveal to sections and cards
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll(
    'section > div > .grid > *, section > div > div:first-child'
  );

  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });

  // Add the animate-in class styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});

// ===== YouTube Lazy-Load Embed =====
// Replaces thumbnail with iframe on click for performance
window.loadYouTube = function(container) {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/P0u2aDA-STY?autoplay=1&rel=0';
  iframe.title = 'Video Editing Project';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'absolute inset-0 w-full h-full';

  // Remove thumbnail, overlay, and play button
  const thumb = container.querySelector('#yt-thumb');
  const overlay = container.querySelector('#yt-overlay');
  const playBtn = container.querySelector('#yt-play-btn');
  if (thumb) thumb.remove();
  if (overlay) overlay.remove();
  if (playBtn) playBtn.remove();

  container.appendChild(iframe);
  container.style.cursor = 'default';
  container.onclick = null;
};
