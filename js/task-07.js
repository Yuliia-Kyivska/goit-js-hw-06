"use strict";

let inputChange = document.querySelector("#font-size-control");
let inputText = document.querySelector("#text");
inputChange.addEventListener("input", handleInput);

function handleInput(event) {
  inputText.style.fontSize = event.currentTarget.value + "px";
}
