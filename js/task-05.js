const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');


const changeName = nameInputRef.addEventListener('input', (event) => {
    nameOutputRef.textContent = event.currentTarget.value;
    
    if (!event.currentTarget.value) {
        nameOutputRef.textContent = 'Anonymous';
    }
});


