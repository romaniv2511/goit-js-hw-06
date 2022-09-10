const validationInputRef = document.querySelector('#validation-input');

const changeBorderColor = validationInputRef.addEventListener('blur', (event) => {
    if (+event.currentTarget.value.length <= validationInputRef.dataset.length) {
        return validationInputRef.classList.add('valid');
    }
    return validationInputRef.classList.add('invalid');
}
)