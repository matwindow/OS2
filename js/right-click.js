const menu = document.getElementById('context-menu');

if (menu) {
  document.addEventListener('contextmenu', (event) => {
    // Suppress the browser's native menu everywhere in the OS UI. The desktop
    // container does not necessarily cover blank areas of the viewport.
    event.preventDefault();

    if (event.target instanceof Element && event.target.closest('#context-menu')) {
      return;
    }

    const target = event.target instanceof Element ? event.target : null;
    const isFile = Boolean(target && target.closest(
      '.file, [data-file], [data-file-id], [menu-file]'
    ));

    menu.querySelectorAll('[menu-fileonly]').forEach((item) => {
      const fileOnly = item.getAttribute('menu-fileonly') === 'true';
      item.style.display = fileOnly === isFile ? '' : 'none';
    });

    // Show first so its dimensions can be measured before positioning.
    menu.style.display = 'block';
    const bounds = menu.getBoundingClientRect();
    const margin = 8;
    const left = Math.max(margin, Math.min(event.clientX, window.innerWidth - bounds.width - margin));
    const top = Math.max(margin, Math.min(event.clientY, window.innerHeight - bounds.height - margin));

    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
  });

  document.addEventListener('pointerdown', (event) => {
    if (!(event.target instanceof Element) || !event.target.closest('#context-menu')) {
      menu.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.style.display = 'none';
    }
  });
}
