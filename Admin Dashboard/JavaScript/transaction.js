const form = document.querySelector('form');
const transactionId = document.getElementById('transaction-id');
const customerName = document.getElementById('customer-name');
const customerEmail = document.getElementById('customer-email');
const customerPhone = document.getElementById('customer-phone');
const transactionType = document.getElementById('transaction-type');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productQuantity = document.getElementById('product-quantity');
const transactionDate = document.getElementById('transaction-date');
const transactionAmount = document.getElementById('transaction-amount');
const transactionStatus = document.getElementById('transaction-status');
form.addEventListener('submit', function(event) {
  const requiredFields = [
  'transaction-id', 
  'customer-name', 
  'customer-email', 
  'customer-phone', 
  'transaction-type', 
  'product-name', 
  'product-price', 
  'product-quantity', 
  'transaction-date', 
  'transaction-amount', 
  'transaction-status'];

  let isFormValid = true;
  requiredFields.forEach(function(field) {
    const inputField = document.getElementById(field);
    const label = document.querySelector(`label[for=${field}]`);
    
    if (inputField.value === '') {
      isFormValid = false;
      label.style.color = 'red';
    } else {
      label.style.color = 'initial';
    }
    
    inputField.addEventListener('input', function() {
      if (inputField.value === '') {
        label.style.color = 'red';
      } else {
        label.style.color = 'initial';
      }
    });
  });

  if (!isFormValid) {
    alert('Please fill out the required fields in red.');
    event.preventDefault();
  }

  if (isFormValid) {
    // Create object containing form data
    const transaction = {
      id: transactionId.value,
      name: customerName.value.replace(/\b\w/g, c => c.toUpperCase()),
      email: customerEmail.value,
      phone: customerPhone.value.substr(0, 11), 
      type: transactionType.value,
      productName: productName.value.replace(/\b\w/g, c => c.toUpperCase()), 
      price: productPrice.value,
      quantity: productQuantity.value,
      date: transactionDate.value,
      amount: transactionAmount.value,
      status: transactionStatus.value
    };
    
    // Get existing transactions from localStorage or initialize empty array
    let transactions = JSON.parse(localStorage.getItem('transData')) || [];
    
    // Add new transaction to array
    transactions.push(transaction);
    
    // Save array back to localStorage
    localStorage.setItem('transData', JSON.stringify(transactions));
    
    // Clear form inputs
    form.reset();
    
    alert('Transaction saved!');
  }
  
  event.preventDefault();

  const selectedDate = new Date(transactionDate.value);
    const today = new Date();
    const nextFewDays = new Date().setDate(today.getDate() + 30); //change 3 to the number of next days you want to allow
    if (selectedDate < today || selectedDate > nextFewDays) {
      alert("Please select a date from today until the 30 days only.");
      event.preventDefault();
    }
});

function generateTransactionId(transactions) {
    let idPrefix = "PMP";
    let idNumber = 1;
    if (transactions.length > 0) {
      let lastTransactionId = transactions[transactions.length - 1].id;
      let lastIdNumber = parseInt(lastTransactionId.substring(3, 6));
      if (!isNaN(lastIdNumber)) {
        idNumber = lastIdNumber + 1;
      }
    }
    let idSuffix = "T";
    let transactionId = idPrefix + idNumber.toString().padStart(3, "0") + idSuffix;
    return transactionId;
  }
  


const tbody = document.querySelector('tbody');
let transactions = JSON.parse(localStorage.getItem('transData')) || [];

transactions.forEach(function(transaction) {
  let row = document.createElement('tr');
  let checkboxCell = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);
  row.innerHTML += `<td>${transaction.id}</td>
                    <td>${transaction.name}<br>${transaction.email}<br>${transaction.phone}</td>
                    <td>${transaction.type}</td>
                    <td>${transaction.productName}<br>$${transaction.price}<br>${transaction.quantity} units</td>
                    <td>${transaction.date}</td>
                    <td>$${transaction.amount}</td>
                    <td>${transaction.status}</td>`;
  tbody.appendChild(row);
});

const deleteButton = document.querySelector('input[name=Delete]');
deleteButton.addEventListener('click', function(event) {
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  if (checkboxes.length === 0) {
    alert('Please select at least one transaction to delete.');
  } else {
    const confirmDelete = confirm('Are you sure you want to delete the selected transactions?');
    if (confirmDelete) {
      checkboxes.forEach(function(checkbox) {
        const row = checkbox.parentNode.parentNode;
        row.parentNode.removeChild(row);
        

        let transactions = JSON.parse(localStorage.getItem('transData')) || [];
        
        transactions = transactions.filter(function(transaction) {
          return transaction.id !== row.cells[1].textContent;
        });
        
        localStorage.setItem('transData', JSON.stringify(transactions));
      });
      alert('Selected transactions have been deleted.');
    }
  }
  event.preventDefault();
});

const clearAllButton = document.querySelector('button');
clearAllButton.addEventListener('click', function(event) {
  const confirmClearAll = confirm('Are you sure you want to delete all transactions?');
  if (confirmClearAll) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    localStorage.removeItem('transData');
    alert('All transactions have been deleted.');
  }
  event.preventDefault();
});


function editRow() {
    const checkbox = document.querySelector('tbody tr td input[type="checkbox"]:checked');
    if (!checkbox) {
      alert('Please select a row to edit.');
      return;
    }
  
    document.querySelector('#name').disabled = false;
    document.querySelector('#number').disabled = false;
    document.querySelector('#address').disabled = false;
    document.querySelector('#payment').disabled = false;
    document.querySelector('#order').disabled = false;
    document.querySelector('#loan').disabled = false;
    document.querySelector('#balance').disabled = false;
  
    const row = checkbox.parentElement.parentElement;
    const id = row.cells[1].textContent;
    const name = row.cells[2].textContent;
    const number = row.cells[3].textContent;
    const address = row.cells[4].textContent;
    const payment = row.cells[5].textContent;
    const order = row.cells[6].textContent;
    const loan = row.cells[7].textContent;
    const balance = row.cells[8].textContent;
  
    document.querySelector('#name').value = name;
    document.querySelector('#number').value = number;
    document.querySelector('#address').value = address;
    document.querySelector('#payment').value = payment;
    document.querySelector('#order').value = order;
    document.querySelector('#loan').value = loan;
    document.querySelector('#balance').value = balance;
  
    localStorage.setItem('editId', id);
  }
  