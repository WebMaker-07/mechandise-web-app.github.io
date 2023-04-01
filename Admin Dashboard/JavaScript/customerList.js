
const checkbox = document.querySelector('#edit');
const form = document.querySelector('#form');
const hideButton = document.querySelector('#hide_form');
const label = hideButton.textContent;
const formTable = document.querySelector('.formTable');

form.style.display = 'none';
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    form.removeAttribute('disabled');
  } else {
    form.setAttribute('disabled', true);
  }
});

hideButton.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
    hideButton.textContent = 'Hide Form';
  } else {
    form.style.display = 'none';
    hideButton.textContent = 'Add Customer';
  }
});



// ================HIDE FORM======================



// =================================
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  if (nameInput.value === "") {
    isValid = false;
    document.getElementById("name-validate").textContent =
      "Please enter a name.";
  } else {
    document.getElementById("name-validate").textContent = "";
  }

  if (numberInput.value === "" || isNaN(numberInput.value)) {
    isValid = false;
    document.getElementById("number-validate").textContent =
      "Please enter a valid number.";
  } else {
    document.getElementById("number-validate").textContent = "";
  }

  if (addressInput.value === "") {
    isValid = false;
    document.getElementById("address-validate").textContent =
      "Please enter an address.";
  } else {
    document.getElementById("address-validate").textContent = "";
  }

  if (paymentInput.value === "") {
    isValid = false;
    document.getElementById("payment-validate").textContent =
      "Please select a payment method.";
  } else {
    document.getElementById("payment-validate").textContent = "";
  }

  if (orderInput.value === "") {
    isValid = false;
    document.getElementById("order-validate").textContent =
      "Please select an order method.";
  } else {
    document.getElementById("order-validate").textContent = "";
  }

  if (loanInput.value === "") {
    isValid = false;
    document.getElementById("loan-validate").textContent =
      "Please select a loan method.";
  } else {
    document.getElementById("loan-validate").textContent = "";
  }

  if (balanceInput.value === "" || isNaN(balanceInput.value)) {
    isValid = false;
    document.getElementById("balance-validate").textContent =
      "Please enter a valid balance amount.";
  } else {
    document.getElementById("balance-validate").textContent = "";
  }

  

  if (isValid) {
    form.submit();
  }
});





  const tableRow = document.createElement('tr');
  const tableData = [
    '',
    'PMP001',
    document.querySelector('#name').value,
    document.querySelector('#number').value,
    document.querySelector('#address').value,
    document.querySelector('#payment').value,
    document.querySelector('#order').value,
    document.querySelector('#loan').value,
    document.querySelector('#balance').value,
  ];
  tableData.forEach((data) => {
    const cell = document.createElement('td');
    cell.textContent = data;
    tableRow.appendChild(cell);
  });
  formTable.querySelector('tbody').appendChild(tableRow);
  form.reset();







const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const addressInput = document.getElementById("address");
const paymentInput = document.getElementById("payment");
const orderInput = document.getElementById("order");
const loanInput = document.getElementById("loan");
const balanceInput = document.getElementById("balance");

// Add event listener to number input to restrict it to 11 digits
numberInput.addEventListener('input', () => {
  if (numberInput.value.length > 11) {
    numberInput.value = numberInput.value.slice(0, 11);
  }
    // Add "09" to beginning of input if empty
    if (numberInput.value.length === 0) {
      numberInput.value = "09";
    }
});
nameInput.addEventListener('input', () => {
  const words = nameInput.value.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  nameInput.value = words.join(' ');

  if (nameInput.value !== "") {
    document.getElementById("name-validate").textContent = "";
  }
});

numberInput.addEventListener('input', () => {
  if (numberInput.value !== "") {
    document.getElementById("number-validate").textContent = "";
  }
});

// auto capital every word
addressInput.addEventListener('input', () => {
  const words = addressInput.value.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  addressInput.value = words.join(' ');

  if (addressInput.value !== "") {
    document.getElementById("address-validate").textContent = "";
  }
});

paymentInput.addEventListener('input', () => {
  if (paymentInput.value !== "") {
    document.getElementById("payment-validate").textContent = "";
  }
});

orderInput.addEventListener('input', () => {
  if (orderInput.value !== "") {
    document.getElementById("order-validate").textContent = "";
  }
});

loanInput.addEventListener('input', () => {
  if (loanInput.value !== "") {
    document.getElementById("loan-validate").textContent = "";
  }
});

  balanceInput.addEventListener('input', () => {
  let inputValue = balanceInput.value.replace(/[^0-9]/g, '');
  if (inputValue.length > 0) {
    inputValue = parseInt(inputValue).toLocaleString();
  }
  balanceInput.value = inputValue;

  if (balanceInput.value !== "") {
    document.getElementById("balance-validate").textContent = "";
  }
  
});

const table = document.querySelector(".table");
const tableBody = table.getElementsByTagName("tbody")[0];


const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  const newRow = tableBody.insertRow();

  const checkboxCell = newRow.insertCell(0);
  const idCell = newRow.insertCell(1);
  const nameCell = newRow.insertCell(2);
  const numberCell = newRow.insertCell(3);
  const addressCell = newRow.insertCell(4);
  const paymentCell = newRow.insertCell(5);
  const orderCell = newRow.insertCell(6);
  const loanCell = newRow.insertCell(7);
  const balanceCell = newRow.insertCell(8);

  //add ID 
  const lastRow = tableBody.rows[tableBody.rows.length - 2];
  const lastId = lastRow ? parseInt(lastRow.cells[1].textContent.slice(-3)) + 1 : 1;
  const newId = `PMP${lastId.toString().padStart(3, "0")}`;

  checkboxCell.innerHTML = '<input type="checkbox">';
  idCell.textContent = newId;
  nameCell.textContent = nameInput.value;
  numberCell.textContent = numberInput.value;
  addressCell.textContent = addressInput.value;
  paymentCell.textContent = paymentInput.value;
  orderCell.textContent = orderInput.value;
  loanCell.textContent = loanInput.value;
  balanceCell.textContent = balanceInput.value;

  const newData = {
    id: newId,
    name: nameInput.value,
    number: numberInput.value,
    address: addressInput.value,
    payment: paymentInput.value,
    order: orderInput.value,
    loan: loanInput.value,
    balance: balanceInput.value,
  };
  const data = JSON.parse(localStorage.getItem("customerData")) || [];
  data.push(newData);
  localStorage.setItem("customerData", JSON.stringify(data));

  nameInput.value = "";
  numberInput.value = "";
  addressInput.value = "";
  paymentInput.value = "";
  orderInput.value = "";
  loanInput.value = "";
  balanceInput.value = "";
});

window.addEventListener("load", () => {
  const data = JSON.parse(localStorage.getItem("customerData")) || [];
  data.forEach((item) => {
    const newRow = tableBody.insertRow();
    const checkboxCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const nameCell = newRow.insertCell(2);
    const numberCell = newRow.insertCell(3);
    const addressCell = newRow.insertCell(4);
    const paymentCell = newRow.insertCell(5);
    const orderCell = newRow.insertCell(6);
    const loanCell = newRow.insertCell(7);
    const balanceCell = newRow.insertCell(8);

    checkboxCell.innerHTML = '<input type="checkbox">';
    idCell.textContent = item.id;
    nameCell.textContent = item.name;
    numberCell.textContent = item.number;
    addressCell.textContent = item.address;
    paymentCell.textContent = item.payment;
    orderCell.textContent = item.order;
    loanCell.textContent = item.loan;
    balanceCell.textContent = item.balance;
    console.log(item);
    });
    });

    const deleteButton = document.getElementById("delete");
    deleteButton.addEventListener("click", () => {
      const rows = tableBody.rows;
      for (let i = rows.length - 1; i >= 0; i--) {
        if (rows[i].cells[0].getElementsByTagName("input")[0].checked) {
          if (confirm("Are you sure you want to delete this row?")) {
            const id = rows[i].cells[1].textContent;
            const data = JSON.parse(localStorage.getItem("customerData")) || [];
            const newData = data.filter((item) => item.id !== id);
            localStorage.setItem("customerData", JSON.stringify(newData));
    
            tableBody.deleteRow(i);
          }
        }
      }
    });


    // =====================================================EDIT BUTTON================================================================
    const editButton = document.getElementById("edit");
    editButton.addEventListener("click", () => {
      const checkedRows = tableBody.querySelectorAll("tr input[type='checkbox']:checked");
      if (checkedRows.length !== 1) {
        alert("Please select one row to edit");
        return;
      }
      const row = checkedRows[0].parentNode.parentNode;
      const cells = row.cells;
      nameInput.value = cells[2].textContent;
      numberInput.value = cells[3].textContent;
      addressInput.value = cells[4].textContent;
      paymentInput.value = cells[5].textContent;
      orderInput.value = cells[6].textContent;
      loanInput.value = cells[7].textContent;
      balanceInput.value = cells[8].textContent;
      editButton.textContent = "Apply";
      editButton.removeEventListener("click", editButtonClickHandler);
      editButton.addEventListener("click", applyButtonClickHandler);
    });
    
    function applyButtonClickHandler() {
      const checkedRows = tableBody.querySelectorAll("tr input[type='checkbox']:checked");
      if (checkedRows.length !== 1) {
        alert("Please select one row to edit");
        return;
      }
      const row = checkedRows[0].parentNode.parentNode;
      const cells = row.cells;
      cells[2].textContent = nameInput.value;
      cells[3].textContent = numberInput.value;
      cells[4].textContent = addressInput.value;
      cells[5].textContent = paymentInput.value;
      cells[6].textContent = orderInput.value;
      cells[7].textContent = loanInput.value;
      cells[8].textContent = balanceInput.value;
      editButton.textContent = "Edit";
      editButton.removeEventListener("click", applyButtonClickHandler);
      editButton.addEventListener("click", editButtonClickHandler);
    }
    
    
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete all rows?")) {
        localStorage.removeItem("customerData");
        tableBody.innerHTML = "";
      }
    });
    




// ===================SEARCH=============
$(document).ready(function() {
  $("#search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("table tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
