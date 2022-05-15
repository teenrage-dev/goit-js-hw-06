const el = {
    validationInputEl: document.querySelector("#validation-input"),
};



const dataEl = Number(el.validationInputEl.dataset.length);


function blurInputFn(event) {
        if(event.currentTarget.value.length === dataEl){
            el.validationInputEl.classList.add("valid");
            el.validationInputEl.classList.remove("invalid");
        }
        else  {
            el.validationInputEl.classList.remove("valid");
            el.validationInputEl.classList.add("invalid");
        };
    };

    const blurInput = el.validationInputEl.addEventListener("blur", blurInputFn);
