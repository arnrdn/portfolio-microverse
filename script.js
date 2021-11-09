const openBtn = document.querySelector('.ham-icon');
const popup = document.querySelector('#popup-1');
const closeBtn = document.querySelector('.close-btn');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav-menu-modal a');
const close = () => {
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
  body.style.overflow = 'auto';
};

openBtn.addEventListener('click', () => {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', close);

links.forEach((link) => {
  link.addEventListener('click', close);
});
