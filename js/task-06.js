const validationInputRef = document.querySelector('#validation-input');

const changeBorderColor = validationInputRef.addEventListener('blur', (event) => {
    if (Number(event.currentTarget.value.length) === Number(validationInputRef.dataset.length)) {
        validationInputRef.classList.remove('invalid');
        return validationInputRef.classList.add('valid');
    }

    validationInputRef.classList.remove('valid');
    return validationInputRef.classList.add('invalid');
}
)