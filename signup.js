const form = document.querySelector('form');
const usernameInput = document.getElementById('uName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('cPass');
const errorElements = document.querySelectorAll('form span');
const submitButton = document.querySelector('form button[type="submit"]');

errorElements.forEach(errorElement => {
  errorElement.classList.add('error-message');
});

function capitalizeUsername() {
  const words = usernameInput.value.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  usernameInput.value = words.join(' ');
}

function validateFormInputs() {
  let isValid = true;
  let dataExists = false;

  const storedData = JSON.parse(localStorage.getItem('customerSignInData')) || [];
  for (let i = 0; i < storedData.length; i++) {
    const data = storedData[i];

    if (data.email === emailInput.value) {
      errorElements[1].innerText = 'Email already exists';
      isValid = false;
      dataExists = true;
    }
    if (data.username === usernameInput.value) {
      errorElements[0].innerText = 'Username already exists';
      isValid = false;
      dataExists = true;
    }
  }

  if (!dataExists) {
    if (usernameInput.value.trim() === '') {
      errorElements[0].innerText = 'Username is required';
      isValid = false;
    } else {
      errorElements[0].innerText = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorElements[1].innerText = 'Invalid email format';
      isValid = false;
    } else {
      errorElements[1].innerText = '';
    }

    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (passwordValue !== confirmPasswordValue) {
      errorElements[2].innerText = 'Passwords do not match';
      isValid = false;
    } else {
      errorElements[2].innerText = '';
    }

    if (!passwordRegex.test(passwordValue)) {
      errorElements[3].innerText = 'Password must contain one number, one capital letter, and be at least 8 characters long.';
      isValid = false;
    } else {
      errorElements[3].innerText = '';
    }
  }

  return isValid;
}

function saveFormData() {
  const formData = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  const storedData = JSON.parse(localStorage.getItem('customerSignInData')) || []; 
  storedData.push(formData); 

  localStorage.setItem('customerSignInData', JSON.stringify(storedData)); 

  const message = `Thank you ${formData.username}! Your account has been successfully created. Click OK to Sign In`;
  alert(message);

  window.location.href = "index.html";
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateFormInputs()) {
    saveFormData();
  }
});

usernameInput.addEventListener('input', validateFormInputs);
emailInput.addEventListener('input', validateFormInputs);
passwordInput.addEventListener('input', validateFormInputs);
confirmPasswordInput.addEventListener('input', validateFormInputs);

usernameInput.addEventListener('blur', () => {
    usernameInput.value = usernameInput.value.toUpperCase();
  });
  