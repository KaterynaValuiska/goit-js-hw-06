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
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = i * 10 + 30 + 'px';
    box.style.height = i*10 + 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    console.log(box); 
    boxes.append(box);
  } 
}

function onCreateBoxes() {
  let amount = input.value;
  createBoxes(amount);
}

btnCreate.addEventListener("click", onCreateBoxes);

function onDestroyBoxes() {
  input.value = 0
  boxes.innerHTML = "";
  console.log(boxes);
}
btnDestroy.addEventListener("click", onDestroyBoxes);



 
