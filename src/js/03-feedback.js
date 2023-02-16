import throttle from 'lodash.throttle';

const FORM_INPUT_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

function fillFormArea({ elements }) {
  const formData = JSON.parse(localStorage.getItem(FORM_INPUT_KEY));

  if (!formData) {
    return;
  }

  const keys = Object.keys(elements).filter(el => isNaN(el));

  keys.forEach(key => {
    elements[key].value = formData[key] || '';
  });
  console.log(keys);
}

function handleFormInput({ target }) {
  const { value, name } = target;

  const formData = JSON.parse(localStorage.getItem(FORM_INPUT_KEY)) || {};

  formData[name] = value;

  localStorage.setItem(FORM_INPUT_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();

  const { target } = event;
  const { email, message } = target.elements;

  const userEmail = email.value;
  const userMessage = message.value;

  console.log({ userEmail, userMessage });

  target.reset();

  localStorage.removeItem(FORM_INPUT_KEY);
}

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', throttle(handleFormInput, 500));

fillFormArea(formEl);
