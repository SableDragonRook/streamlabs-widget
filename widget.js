window.addEventListener('onWidgetLoad', function (obj) {
  // Widget loaded
});

window.addEventListener('onMessage', function (obj) {
  const message = obj.detail.message;
  
  if (message.startsWith('!')) {
    // Grab the username after the !
    const username = message.slice(1).split(' ')[0];
    
    const box = document.getElementById('usernameBox');
    box.textContent = username;
  }
});
