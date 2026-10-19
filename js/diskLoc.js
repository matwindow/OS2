export const diskLocal = {  
get(disk){
  return localStorage.getItem("diskMATOS2_"+disk);
},
set(disk,value){
  return localStorage.setItem("diskMATOS2_"+disk,value);
}
}
