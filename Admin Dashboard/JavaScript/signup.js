const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const cnameInput = document.getElementById('cname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');
const errorElements = document.querySelectorAll('form span');
const submitButton = document.querySelector('form button[type="submit"]');

errorElements.forEach(errorElement => {
  errorElement.classList.add('error-message');
});

function validateFormInputs() {
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    errorElements[0].innerText = 'Username is required';
    isValid = false;
  } else {
    errorElements[0].innerText = '';
  }

  if (cnameInput.value.trim() === '') {
    errorElements[1].innerText = 'Complete name is required';
    isValid = false;
  } else {
    errorElements[1].innerText = '';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errorElements[2].innerText = 'Invalid email format';
    isValid = false;
  } else {
    errorElements[2].innerText = '';
  }

  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (passwordValue !== confirmPasswordValue) {
    errorElements[3].innerText = 'Passwords do not match';
    isValid = false;
  } else {
    errorElements[3].innerText = '';
  }

  if (!passwordRegex.test(passwordValue)) {
    errorElements[4].innerText = 'Password must contain at least one number and one capital letter, and be at least 8 characters long';
    isValid = false;
  } else {
    errorElements[4].innerText = '';
  }

  return isValid;
}

function saveFormData() {
  const formData = {
    username: usernameInput.value,
    cname: cnameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateFormInputs()) {
    saveFormData();
    form.submit();
  }
});

usernameInput.addEventListener('input', validateFormInputs);
cnameInput.addEventListener('input', validateFormInputs);
emailInput.addEventListener('input', validateFormInputs);
passwordInput.addEventListener('input', validateFormInputs);
confirmPasswordInput.addEventListener('input', validateFormInputs);

usernameInput.addEventListener('blur', () => {
  usernameInput.value = usernameInput.value.toUpperCase();
});

cnameInput.addEventListener('blur', () => {
  cnameInput.value = cnameInput.value.toUpperCase();
});
