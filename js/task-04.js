"use strict";

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.querySelector('#value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.querySelector('#value').textContent = counterValue;
};

document.querySelector("[data-action='increment']").addEventListener('click', increment);
document.querySelector("[data-action='decrement']").addEventListener('click', decrement);




// 2 вариант
// let counterValue = 0;
// function change(event) {
//   // event.target
//   let action = this.getAttribute('data-action');
//   if (action === 'increment') {
//   counterValue += 1;
//   } else {
//       counterValue -= 1;

//   }
//   document.querySelector('#value').textContent = counterValue;

// }

// document.querySelector("[data-action='increment']").addEventListener('click', change);
// document.querySelector("[data-action='decrement']").addEventListener('click', change);