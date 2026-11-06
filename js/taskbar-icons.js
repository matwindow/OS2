window.ThisOS.taskbar={}
window.ThisOS.taskbar.icons=[{icon:'/OS/svg/extra/start'}]
window.ThisOS.taskbar.iconcon=document.querySelector('.taskbar .icons');
for (let This_Icon_Id of window.ThisOS.taskbar.icons){
  const This_icon=document.createElement('div');
  This_icon.classList.add('icon');
  This_icon.style.setProperty('--bg-image', 'url("'+This_Icon_Id.icon+'")');
  window.ThisOS.taskbar.iconcon.appendChild(This_icon);
}
