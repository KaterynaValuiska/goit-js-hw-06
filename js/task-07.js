const slider = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


const onSizeText = (event) => {
    console.log(slider.value);
   spanText.style.fontSize = slider.value + 'px'; 
 
};



slider.addEventListener("input", onSizeText);