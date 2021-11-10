const emailInput = document.querySelector('#email');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.patternMismatch) {
    emailInput.setCustomValidity('Email must not contain uppercase characters');
  } else {
    emailInput.setCustomValidity('');
  }
});
