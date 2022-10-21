const ulWithId = document.querySelector("#categories");
const liWithUl = ulWithId.querySelectorAll(".item");
console.log(`Number of categories: ${liWithUl.length}`);

for (let item of liWithUl) {
  let text = item.querySelector("h2").innerHTML;
  let count = item.querySelectorAll("li").length;
  console.log(`Categories: ${text}`);
  console.log(`Elements: ${count}`);
}
