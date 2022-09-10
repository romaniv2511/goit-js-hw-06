const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    if (!elements.email.value || !elements.password.value) {
        return alert('Все поля для ввода должны быть заполнены!')
    }

    const formData = {
        email: elements.email.value,
        password: elements.password.value,
    }

    event.currentTarget.reset();
    
    return formData;

}
