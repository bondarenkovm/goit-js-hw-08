import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

let formData = {};
const FORM_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

setLocallyStoredDataForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  //   console.log(formData);
  form.reset();
  localStorage.removeItem(FORM_KEY);
}
function onFormInput(evt) {
  //   console.log(evt.target.name);
  //   console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}
function setLocallyStoredDataForm() {
  const locStor = JSON.parse(localStorage.getItem(FORM_KEY));
  if (locStor) {
    // formData = locStor;
    // form.elements.email.value = locStor.email;
    // form.elements.message.value = locStor.message;

    for (const key in locStor) {
      //   console.log(key);
      //   console.log(locStor[key]);
      formData[key] = locStor[key];
      form.elements[key].value = locStor[key];
    }
  }
}
