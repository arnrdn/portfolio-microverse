const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const textArea = inputEmail.parentNode.querySelector('textarea');

function storageAvailable(type = 'localStorage') {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22
      // Firefox
      || e.code === 1014
      // test name field too, because code might not be present
      // everything except Firefox
      || e.name === 'QuotaExceededError'
      // Firefox
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && (storage && storage.length !== 0);
  }
}

if (storageAvailable() && localStorage.getItem('formData')) {
  const formData = JSON.parse(localStorage.getItem('formData'));
  inputName.value = formData.name;
  inputEmail.value = formData.email;
  textArea.innerText = formData.msg;
}

function populateStorage() {
  if (storageAvailable()) {
    const formData = {
      name: inputName.value,
      email: inputEmail.value,
      msg: textArea.innerText,
    };
    const formDataStr = JSON.stringify(formData);
    localStorage.setItem('formData', formDataStr);
  }
}

inputName.onchange = populateStorage;
inputEmail.onchange = populateStorage;
textArea.onchange = populateStorage;
