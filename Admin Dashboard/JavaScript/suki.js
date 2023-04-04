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
  
  const firstname = document.getElementById("Firstname");
  const middlename = document.getElementById("Middlename");
  const lastname = document.getElementById("Lastname");
  const location = document.getElementById("customer-location");
  const phone = document.getElementById("customer-phone");
  const credit = document.getElementById("customer-credit");

  const addButton = document.getElementById("addCustom");

// Adding Customer
  addButton.addEventListener("click", () => {
//   const newRow = tableBody.insertRow();

//   const checkboxCell = newRow.insertCell(0);
//   const idCell = newRow.insertCell(1);
//   const nameCell = newRow.insertCell(2);
//   const numberCell = newRow.insertCell(3);
//   const addressCell = newRow.insertCell(4);
//   const paymentCell = newRow.insertCell(5);
 

//   //add ID 
//   const lastRow = tableBody.rows[tableBody.rows.length - 2];
//   const lastId = lastRow ? parseInt(lastRow.cells[1].textContent.slice(-3)) + 1 : 1;
//   const newId = `PMPC${lastId.toString().padStart(3, "0")}`;

//   checkboxCell.innerHTML = '<input type="checkbox">';
//   idCell.textContent = newId;
//   nameCell.textContent = `${firstname.value} ${middlename.value} ${lastname.value}` ;
//   numberCell.textContent = phone.value;
//   addressCell.textContent = location.value;
//   paymentCell.textContent = credit.value;
alert(firstname.value);
//   const newData = {
//     id: newId,
//     firstname: firstname.value,
//     middlename: middlename.value,
//     lastname: lastname.value,
//     address: location.value,
//     contact: phone.value,
//     creditLimit: credit.value,
    
//   };
//   const data = JSON.parse(localStorage.getItem("CustomerSuki")) || [];
//   data.push(newData);
//   localStorage.setItem("CustomerSuki", JSON.stringify(data));

//   nameInput.value = "";
//   numberInput.value = "";
//   addressInput.value = "";
//   paymentInput.value = "";
//   orderInput.value = "";
//   loanInput.value = "";
//   balanceInput.value = "";
});