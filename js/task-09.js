function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const el = {
  changeColorBtn: document.querySelector(".change-color"),
  textColor: document.querySelector(".color"),
};

el.changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const style = window.document.body.style.backgroundColor = getRandomHexColor();
  el.textColor.textContent = style;
};