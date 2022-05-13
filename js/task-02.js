const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");
// console.log(ingredientsList);
const foodIngredients = ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  console.log(item);
  item.classList.add("item");
  item.innerHTML = ingredient;
  return ingredientsList.append(item);
});

console.log(foodIngredients);