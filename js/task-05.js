const textInputEl = document.querySelector("#name-input");
const ouputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
    if (textInputEl.value === '') {
        return ouputEl.textContent = "Anonymous";
    };
    ouputEl.textContent = event.currentTarget.value;
});



