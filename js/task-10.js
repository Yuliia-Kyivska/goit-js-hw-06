let render = document.querySelector('[data-create]');
let destroy = document.querySelector('[data-destroy]');
let boxes = document.getElementById('boxes');
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let arr = [];
  let basicSize = 30;
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");

    let colorValue = getRandomHexColor();
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${colorValue}`;
    arr.push(div);
    
  }
 boxes.append(...arr);
}

function destroyBoxes() {
 boxes.innerHTML = "";

  // ******2*********
  // boxes.querySelectorAll('div').forEach(el => el.remove());
  
// **********3*************
  // for (var i = boxes.childNodes.length - 1; i >= 0; i--) {
  //   boxes.removeChild(boxes.childNodes[i]);
  // }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

