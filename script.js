document.addEventListener('DOMContentLoaded', () => {
  const expand = document.querySelector('.list');
  const menuIcon = document.querySelector('.menuu');

  menuIcon.addEventListener('click', () => {
    expand.classList.toggle('expandItems');
  });
});
