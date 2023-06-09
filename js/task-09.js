function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

btnColor.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
}
