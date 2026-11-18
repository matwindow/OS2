window.ThisOS ??= {};
window.ThisOS.taskbar ??= {};
window.ThisOS.taskbar.icons = [{ icon: '/OS2/svg/extra/start.svg' }];

const iconContainer = document.querySelector('.taskbar .icons');

if (iconContainer) {
  for (const taskbarIcon of window.ThisOS.taskbar.icons) {
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.style.setProperty('--bg-image', `url("${taskbarIcon.icon}")`);
    iconContainer.appendChild(icon);
  }
}
