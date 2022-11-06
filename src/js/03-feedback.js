let throttle = require('lodash.throttle');

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const LS = localStorage;

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

MessageOutput();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  LS.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  LS.removeItem(STORAGE_KEY);
}

function MessageOutput() {
  if (LS.getItem(STORAGE_KEY)) {
    formData = JSON.parse(LS.getItem(STORAGE_KEY));
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
}
