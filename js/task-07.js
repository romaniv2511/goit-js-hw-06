const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSizeInput = fontSizeControlRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
}
