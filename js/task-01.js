const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.childElementCount}`);
// console.log(categoriesList.children[0]);
const itemsEl = document.querySelectorAll("#categories > .item > ul");
const items = document.querySelectorAll("#categories > .item > h2");


const categoriesFn = (e) => {
    [...e].map(el => {
        return el;
    });
    // 1
    console.log(`Category: ${items[0].textContent}`);
    console.log(`Elements: ${itemsEl[0].children.length}`);
    // 2
    console.log(`Category: ${items[1].textContent}`);
    console.log(`Elements: ${itemsEl[1].children.length}`);
    // 3
    console.log(`Category: ${items[2].textContent}`);
    console.log(`Elements: ${itemsEl[2].children.length}`);
}

const categoryEl = categoriesFn(items);


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5