const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];



let greatGalery = document.querySelector(".gallery");

for (let image of images) {
  let liHtml = `<li class="list-item"><img src="${image.url}" alt="${image.alt}" width = 200 height = 150 class="centerImg"/></li>`;
  greatGalery.insertAdjacentHTML("beforeend", liHtml)
}





// let liCreate = document.createElement('li');
    
// markupLis.insertAdjacentHTML("afterbegin", markupLis);
// markupLis.setAttribute("style", "list-style-type:none; display: flex;");

// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// for (let image of images) {
//   let liCreate = document.createElement('li');
// liCreate.
// }

// вставляти строку в стріми це гонево
