"use strict";

let formProces = document.querySelector('.login-form');
formProces.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
   const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert('Please fill in all the fields!');
    return;
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

















// function handleSubmit1(event) {
//   event.preventDefault();

//   var emptyEl = Object.values(event.currentTarget.elements).filter(a => a === '');

//   if (emptyEl.length > 0) {
//    alert ('Please fill in all the fields!');
// }

//   console.log(`Email: ${event.currentTarget.elements.email.value}, Password: ${event.currentTarget.elements.password.value}`);
//   event.currentTarget.reset();
// }
