const el = {
    validationInputEl: document.querySelector("#validation-input"),
}



const dataEl = Number(el.validationInputEl.dataset.length);
    console.log(dataEl);


function blurInputFn(event) {
        if(event.currentTarget.value.length === dataEl){
            console.log(el.validationInputEl.classList.add("valid"));
            
        }
        else  {
            el.validationInputEl.classList.add("invalid");
        };
    };

    const blurInput = el.validationInputEl.addEventListener("blur", blurInputFn);

console.log(typeof dataEl);