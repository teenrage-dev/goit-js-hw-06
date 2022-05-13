const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.childElementCount}`);
// console.log(categoriesList.children[0]);

const categoriesFn = (e) => {
    return [...e].map(el => el );
}
// 1
const items = document.querySelectorAll("h2");
const categoryEl = categoriesFn(items);
console.log(`Category: ${categoryEl[0].textContent}`);

const itemsEl = document.querySelectorAll(".item > ul");
console.log(`Elements: ${itemsEl[0].children.length}`);
// 2
console.log(`Category: ${categoryEl[1].textContent}`);
console.log(`Elements: ${itemsEl[1].children.length}`);
// 3
console.log(`Category: ${categoryEl[2].textContent}`);
console.log(`Elements: ${itemsEl[2].children.length}`);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5