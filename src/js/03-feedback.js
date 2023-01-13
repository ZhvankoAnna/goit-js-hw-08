import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const submitEl = document.querySelector('button')

let formData = {}


if(localStorage.getItem("feedback-form-state")) {
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"))
    const input = formEl.elements

    input.email.value = savedData.email || '';
    input.message.value = savedData.message || '';

    formData = savedData
}

function handleFormInput (e) {
    formData[e.target.name] = e.target.value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function handleBtnSubmit (e) {
    e.preventDefault()
    if(formEl.elements.email.value === '' || formEl.elements.message.value === '') {
        return alert("Заповніть, будь ласка, всі поля")
    }

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))

    localStorage.removeItem("feedback-form-state")
    formEl.reset()
}

formEl.addEventListener('input', throttle(handleFormInput, 500));
submitEl.addEventListener('click', handleBtnSubmit)