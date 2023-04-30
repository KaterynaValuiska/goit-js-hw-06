function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');



function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = i * 10 + 30 + 'px';
    box.style.height = i*10 + 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    console.log(box); 
    boxes.before(box);
  } 
}

btnCreate.addEventListener("click", createBoxes);


btnDestroy.addEventListener("click", () => {
  
  btnDestroy.removeEventListener("click", createBoxes);
  box.remove();
});




