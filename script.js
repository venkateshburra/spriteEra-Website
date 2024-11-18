document.addEventListener('DOMContentLoaded', () => {
  const expand = document.querySelector('.list');
  const menuIcon = document.querySelector('.menuu');

  menuIcon.addEventListener('click', () => {
    expand.classList.toggle('expandItems');
  });
});

document.querySelector('header').addEventListener('wheel', (event) => {
  event.preventDefault();
});
