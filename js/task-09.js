let button = document.querySelector('.change-color');
let color = document.querySelector('.color');

button.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}



