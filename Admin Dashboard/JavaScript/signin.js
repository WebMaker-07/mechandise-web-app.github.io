document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const formData = JSON.parse(localStorage.getItem('formData')); 
  const usernameOrEmail = document.getElementById('uname').value;
  const password = document.getElementById('pwd').value;

  // Check if username is all caps
  if (usernameOrEmail.indexOf('@') === -1) {
    if (usernameOrEmail.toUpperCase() !== usernameOrEmail) {
      alert('Please enter your username in all capital letters.');
      return;
    }
  }

  // Check if username/email and password match
  let matchedData = null;
  for (const data of formData) {
    if ((data.email === usernameOrEmail || data.username === usernameOrEmail) && data.password === password) {
      matchedData = data;
      break;
    }
  }

  // Handle error
  if (!matchedData) {
    alert('Invalid username/email or password');
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    let countdown = 5;
    const countdownInterval = setInterval(() => {
      submitButton.textContent = `Try Again in ${countdown--}s`;
      if (countdown === -1) {
        clearInterval(countdownInterval);
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
      }
    }, 1000);
    return;
  }

  // Successful login
  localStorage.setItem('signinData', JSON.stringify(matchedData));
  window.location.href = 'dashboard.html'; 
});
