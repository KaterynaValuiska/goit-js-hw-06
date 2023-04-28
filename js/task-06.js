const inputBox = document.querySelector('#validation-input');

inputBox.addEventListener("blur", () => {
    
    if (inputBox.value.length == inputBox.getAttribute("data-length")) {
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
    }
    else if (inputBox.value.length === 0) {
        inputBox.classList.remove("valid");
        inputBox.classList.remove("invalid");
        
    } else {
        inputBox.classList.add("invalid");
        inputBox.classList.remove("valid");
    }         

    });



 

