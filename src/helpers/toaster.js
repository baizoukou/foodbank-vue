import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const toast = (message, type) => {
  let color;
  if(type === 'error') color = 'linear-gradient(to right, #ed213a, #93291e)';
  if(type === 'success') color = 'linear-gradient(to right, #00b09b, #96c93d)';
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: 'center',
    backgroundColor: color,
    stopOnFocus: true,
    onClick: function(){}
  }).showToast();
}