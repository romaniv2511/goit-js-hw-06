let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const decrementValueEvent = decrementBtnRef.addEventListener('click', decrementValue);
const incrementValueEvent = incrementBtnRef.addEventListener('click', incrementValue);

function decrementValue() {
    counterValue -= 1
    return valueRef.textContent = counterValue;
}

function incrementValue() {
    counterValue += 1
    return valueRef.textContent = counterValue;
}

