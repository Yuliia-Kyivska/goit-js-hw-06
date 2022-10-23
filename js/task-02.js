const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulWithId = document.querySelector("#ingredients");
const arr = [];
for (let ingredient of ingredients) {
  let li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  arr.push(li);
}

 ulWithId.append(...arr);