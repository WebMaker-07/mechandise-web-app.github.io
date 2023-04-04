// Get form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table');

// Load saved data from local storage
const savedData = JSON.parse(localStorage.getItem('productData')) || [];

// Display saved data in table
for (let data of savedData) {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  cell1.textContent = data.productCode;
  cell2.textContent = data.productName;
  cell3.textContent = data.quantity;
  cell4.textContent = data.price;
}

// Add submit event listener to form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form input values
  const productCode = document.getElementById('productCode').value;
  const productName = document.getElementById('productName').value;
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;
  
  // Create data object and add to saved data
  const data = { productCode, productName, quantity, price };
  savedData.push(data);
  
  // Save data to local storage
  localStorage.setItem('productData', JSON.stringify(savedData));
  
  // Display new data in table
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  cell1.textContent = productCode;
  cell2.textContent = productName;
  cell3.textContent = quantity;
  cell4.textContent = price;
  
  // Reset form
  form.reset();
});
