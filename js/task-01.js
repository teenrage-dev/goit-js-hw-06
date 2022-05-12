const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.childElementCount}`);
console.log(categoriesList.children[0].textContent);
console.log(categoriesList.children.length);

const items = document.querySelector(".item > h2");
console.log(`Category: ${items.textContent}`);


const itemsEl = document.querySelector(".item > ul");
console.log(`Elements: ${itemsEl.childElementCount}`);