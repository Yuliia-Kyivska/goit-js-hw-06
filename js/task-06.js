"use strict";

let textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", (event) => {
  let input = event.currentTarget;
  let value = input.value;
  let dataLength = input.getAttribute('data-length');

  if (dataLength == value.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});


