ThisOS.taskbar.icons=[{icon:'/OS/svg/extra/start'}]
ThisOS.taskbar.iconcon=document.querySelector('.taskbar .icons');
for (let This_Icon_Id of ThisOS.taskbar.icons){
  const This_icon=document.createElement('div');
  This_icon.classList.add('icon');
  This_icon.style.setProperty('--bg-image', 'url("'+This_Icon_Id.icon+'")');
  ThisOS.taskbar.iconcon.appendChild(This_icon);
}
