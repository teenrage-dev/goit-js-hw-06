function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
}
refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", onDestroyBtn);

function onDestroyBtn() {
  const removeBoxes =  document.querySelectorAll("#boxes > div");
  console.dir(removeBoxes);
}

function onCreateBtn() {
  const total = refs.input.value;
  createBoxes(total);
};

function createBoxes(amount) {
  const boxSize = 30;
  for(let i = 0; i < amount; i += 1){
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${boxSize + i * 10}px`;
    newBoxes.style.height = `${boxSize + i * 10}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(newBoxes);
  };
};


// for(let i = 0; i <= amount; i += 1){
//   const newEl = refs.boxes.insertAdjacentHTML("afterbegin", `<div></div>`);
//   newEl.style.backgroundColor = getRandomHexColor();
//   return i = newEl;
// };