import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const submitEl = document.querySelector('button')
const formData = {}

if(localStorage.getItem("feedback-form-state")) {
    const savedData = localStorage.getItem("feedback-form-state")
    const parsedData = JSON.parse(savedData)

    formEl.elements.email.value = parsedData.email
    formEl.elements.message.value = parsedData.message
}

function handleFormInput (e) {
    formData[e.target.name] = e.target.value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function handleBtnSubmit (e) {
    e.preventDefault()

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))

    localStorage.removeItem("feedback-form-state")
    formEl.reset()
}

formEl.addEventListener('input', throttle(handleFormInput, 500));
submitEl.addEventListener('click', handleBtnSubmit)