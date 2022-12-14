const bodyRef = document.querySelector('body');
const textColorRef = document.querySelector('.color');
const buttonChangeColorRef = document.querySelector('.change-color');

buttonChangeColorRef.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  textColorRef.textContent = randomColor;
}
