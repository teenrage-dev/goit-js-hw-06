let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

const onDecrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue -= 1;
};

const onIncrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue += 1;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
