const menu = document.getElementById('context-menu'); 

targetElement.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let [x, y] = [e.clientX, e.clientY];

  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.display = 'block';
});

document.addEventListener('click', () => {
  menu.style.display = 'none';
});
