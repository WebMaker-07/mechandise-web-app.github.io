const customerData = JSON.parse(localStorage.getItem('customerData'));

console.log(customerData.loan);

// let customerName = "Fanner Lhastly";

if (customerData) {
//   customerData = customerData.filter(customer => customer.name === customerName ); 
  customerData.sort((a, b) => (a.name > b.name ? 1 : -1));
  customerData.forEach(customer => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${customer.id}</td>
      <td>${customer.name}</td>
      <td>${customer.balance}</td>
      <td>${customer.order}</td>
      <td>${customer.loan}</td>
      <td>
        <button class="btn btn-sm btn-success">View Details</button>
      </td>
    `;
    document.getElementById('customer-data').appendChild(row);
  });
}
