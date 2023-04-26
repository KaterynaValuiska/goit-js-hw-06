const computer = document.querySelector("#value");
const btnDecrement = document.querySelector("#counter").firstElementChild;
const btnIncrement = document.querySelector("#counter").lastElementChild;

let counterValue = 0;

const reduceClick = () => {
    counterValue -= 1;
    computer.textContent = counterValue;
};
btnDecrement.addEventListener("click", reduceClick);
const addClick = () => {
    counterValue += 1;
    computer.textContent = counterValue;
};
btnIncrement.addEventListener("click", addClick);

