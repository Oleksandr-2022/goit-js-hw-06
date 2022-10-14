const nameInputEl = document.querySelector('#name-input');
const textOutputEl = document.querySelector('#name-output');
  
  nameInputEl.addEventListener('input', changeName);
  
  function changeName(event) {
    event.currentTarget.value !== ""
      ? (textOutputEl.textContent = event.currentTarget.value)
      : (textOutputEl.textContent = "Anonymous");
  }








