import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  
};
const formData = {
    email: '',
    message: '',
};
const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
onStorageData(); 

function onInput(event) {
    //   console.log(e.target.name);
    //   console.log(e.target.value);

    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();

    console.log('Форма отправлена!');
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};
function onStorageData() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const savedDataJson = JSON.parse(savedData);
    if (savedDataJson) {
        returnDataInput(savedDataJson);
  }
}

function returnDataInput(data) {
  formData.email = data.email;
  formData.message = data.message;
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}