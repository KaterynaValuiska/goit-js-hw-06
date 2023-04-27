const form = document.querySelector('#name-input');
const userName = document.querySelector("#name-output");

const nameInput = (event) => {
    userName.textContent = form.value; 

 if (form.value === "") {
        userName.textContent = "Anonymous";
};
};

form.addEventListener("input", nameInput);
 



