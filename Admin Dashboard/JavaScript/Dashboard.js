const sideMenu = document.querySelector("aside");
const mainBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

console.log(sideMenu);

mainBtn.addEventListener('click', () => { 
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',  () => {
    sideMenu.style.display = 'none';
})

// ==================THEME MODE==================

const themeToggler = document.querySelector(".theme-toggler");
console.log(themeToggler)

themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active')
    
})

// ======================= ORDER IN TABLE==================

const customerData = JSON.parse(localStorage.getItem('customerData'));

console.log(customerData.name)

// Get the <div> and <p> elements
const messageDiv = document.querySelector(".message");
const messageP = messageDiv.querySelector("p");

// Display the name, payment, and balance in the <p> element
messageP.textContent = `Name: ${customerData.name}, Payment: ${customerData.payment}, Balance: ${customerData.balance}`;

if (customerData) {
  const tbody = document.querySelector('.table1 tbody');
  
  for (let i = Math.max(0, customerData.length - 4); i < customerData.length; i++) {
    const customer = customerData[i];
    const tr = document.createElement('tr');
    
    const nameTd = document.createElement('td');
    nameTd.textContent = customer.name;
    tr.appendChild(nameTd);
    
    const contactTd = document.createElement('td');
    contactTd.textContent = customer.number;
    tr.appendChild(contactTd);
    
    const paymentTd = document.createElement('td');
    paymentTd.textContent = customer.payment;
    tr.appendChild(paymentTd);
    
    const orderTd = document.createElement('td');
   
    tr.appendChild(orderTd);
    
    const balanceTd = document.createElement('td');
    balanceTd.textContent = customer.balance;
    tr.appendChild(balanceTd);
    
    tbody.appendChild(tr);
  }
}

// =======================RECENT UPDATE==============================


const signinData = JSON.parse(localStorage.getItem('signinData'));
const username = signinData.username;

const pUsername = document.getElementById('pusername');
pUsername.innerHTML = username;



let totalBalance = 0;
customerData.forEach(function(customer) {
  totalBalance += customer.balance;
});

document.getElementById('cSales').textContent = '$' + totalBalance.toFixed(2);