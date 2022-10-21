const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulWithId = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  let li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  // li.innerHTML = ingredient;
  // li.append(document.createTextNode(ingredient));

  ulWithId.append(li);
  
}
