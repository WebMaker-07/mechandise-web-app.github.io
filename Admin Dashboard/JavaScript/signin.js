document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = JSON.parse(localStorage.getItem('formData')); 
    const usernameOrEmail = document.getElementById('uname').value;
    const password = document.getElementById('pwd').value;
  
    for (const data of formData) {
      if ((data.email === usernameOrEmail || data.username === usernameOrEmail) && data.password === password) {
        window.location.href = 'dashboard.html'; 
        return;
      }
    }
    alert('Invalid username/email or password'); 
  });
  