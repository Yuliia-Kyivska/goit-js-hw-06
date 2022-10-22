"use strict";

let formProces = document.querySelector('.login-form');
formProces.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
   const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   alert ('Please fill in all the fields!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
















// а если elements будет массивом, то сработает вот это:
// function handleSubmit1(event) {
//   event.preventDefault();

//   var emptyEl = elements.filter(a => a === '');

//   if (emptyEl.length > 0) {
//    alert ('Please fill in all the fields!');
// }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
