
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
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
});






// Get form input elements
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const addressInput = document.getElementById("address");
const paymentInput = document.getElementById("payment");
const orderInput = document.getElementById("order");
const loanInput = document.getElementById("loan");
const balanceInput = document.getElementById("balance");


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
    const id = rows[i].cells[1].textContent;
    const data = JSON.parse(localStorage.getItem("customerData")) || [];
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("customerData", JSON.stringify(newData));

    tableBody.deleteRow(i);
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
    
    
    localStorage.removeItem("customerData");
    tableBody.innerHTML = "";
    });
}
}
});



// ===================HIDE AND EDIT=============

