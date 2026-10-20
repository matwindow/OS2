const keysToWatch = ["user_settings", "game_score", "inventory"];
const currentStorageState = {};
let ignoreNextCheck = {};

keysToWatch.forEach(key => {
  currentStorageState[key] = localStorage.getItem(key);
  ignoreNextCheck[key] = false;
});

const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  if (keysToWatch.includes(key)) {
    ignoreNextCheck[key] = true;
    currentStorageState[key] = String(value);
  }
  originalSetItem.apply(this, arguments);
};

setInterval(() => {
  keysToWatch.forEach(key => {
    const newValue = localStorage.getItem(key);
    
    if (newValue !== currentStorageState[key]) {
      if (ignoreNextCheck[key]) {
        ignoreNextCheck[key] = false;
        return;
      }
      
      currentStorageState[key] = newValue;
      let a557ul=comfirm('Do You Want To Refresh Page To Save Changes?');
      if (a557ul){
        location.reload();
      }
      
    }
  });
}, 500);
