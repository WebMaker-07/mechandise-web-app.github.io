// Select the form and table elements
const form = document.querySelector('#customer-form');
const table = document.querySelector('#customer-table tbody');

// Add an event listener to the form submission
form.addEventListener('submit', function(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  
  // Get the form data
  const firstName = document.querySelector('#fname').value;
  const lastName = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  
  // Create an object to store the form data
  const customer = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  };
  
  // Check if local storage already has data
  let customers = [];
  if (localStorage.getItem('customers')) {
    customers = JSON.parse(localStorage.getItem('customers'));
  }
  
  // Add the new customer data to the array and save to local storage
  customers.push(customer);
  localStorage.setItem('customers', JSON.stringify(customers));
  
  // Clear the form inputs
  form.reset();
  
  // Display the customer data in the table
  displayCustomers();
});

// Function to display the customer data in the table
function displayCustomers() {
  // Get the customer data from local storage
  let customers = [];
  if (localStorage.getItem('customers')) {
    customers = JSON.parse(localStorage.getItem('customers'));
  }
  
  // Clear the table body
  table.innerHTML = '';
  
  // Loop through the customer data and create a row for each one
  customers.forEach(function(customer) {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const lastNameCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    firstNameCell.innerHTML = customer.firstName;
    lastNameCell.innerHTML = customer.lastName;
    emailCell.innerHTML = customer.email;
    phoneCell.innerHTML = customer.phone;
  });
}

// Call the displayCustomers function to display any existing data on page load
displayCustomers();
