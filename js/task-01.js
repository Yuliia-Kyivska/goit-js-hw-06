const ulWithId = document.querySelector("#categories");
const liWithUl = ulWithId.querySelectorAll(".item");
console.log(`Number of categories: ${liWithUl.length}`);

for (let item of liWithUl) {
  let text = item.querySelector("h2").innerHTML;
  let count = item.querySelectorAll("li").length;
  console.log(`Categories: ${text}`);
  console.log(`Elements: ${count}`);
}


// В HTML есть список категорий ul#categories.
// Напиши скрипт который:

//     Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//      и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
