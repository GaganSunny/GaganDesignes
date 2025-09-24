// Portfolio Popup
const popupModal = document.getElementById('popup-modal');
const popupImg = document.querySelector('.popup-img');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.grid-item img').forEach(img => {
  img.addEventListener('click', () => {
    popupModal.style.display = 'flex';
    popupImg.src = img.src;
    popupImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
});
window.addEventListener('click', e => {
  if(e.target === popupModal) popupModal.style.display = 'none';
});

// Mobile Navbar Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
