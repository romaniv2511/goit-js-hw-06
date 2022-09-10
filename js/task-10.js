function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes)
destroyBtnRef.addEventListener('click', destroyBoxes)


let size = 30;

function createBoxes(amount) {
  amount = inputRef.value;
  const allDivs = [];

  for (let i = 0; i < amount; i++, size += 10) {
    const newDiv = document.createElement('div');

    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    allDivs.push(newDiv); 
  }

  boxesRef.append(...allDivs);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  size = 30;
}