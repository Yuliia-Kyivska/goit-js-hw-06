"use strict";

let inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  if (value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
});