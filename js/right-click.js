const menu = document.getElementById('context-menu');
const targetElement = document.querySelector('.desktop');

targetElement.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let [x, y] = [e.clientX, e.clientY];

  const isFile = e.composedPath().some(el => el instanceof Element && el.id && !el.closest('#context-menu') && el !== menu);
  
  menu.querySelectorAll('[menu-fileonly]').forEach(el => {
    el.style.display = (el.getAttribute('menu-fileonly') === 'true') === isFile ? 'block' : 'none';
  });

  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.display = 'block';
});

document.addEventListener('click', () => {
  menu.style.display = 'none';
});
