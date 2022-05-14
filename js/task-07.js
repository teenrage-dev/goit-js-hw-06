const el = {
    inputFontSizeControl: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
};


el.inputFontSizeControl.addEventListener("input", controlFn);


function controlFn() {
    el.spanText.style.fontSize = el.inputFontSizeControl.value + "px";
    
};
