const el = {
    form: document.querySelector(".login-form"),
}

el.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const pass = formEl.password.value;
    const isValidStr = (email, pass) => {
        if(email === "" || pass === ""){
            alert("Всі поля повинні бути заповнені!")
        }
        else{
            const result = {
                mail: `Це email: ${email}`,
                pass: `Це pass: ${pass}`,
            };
            console.log(result.mail, result.pass);
        };
    };
    isValidStr(email, pass);
    event.currentTarget.reset();
};

