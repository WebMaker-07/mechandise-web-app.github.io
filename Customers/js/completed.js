
const customerData = JSON.parse(localStorage.getItem("customerData")) || [];
// const newData = data.filter((item) => item.name === "Proffer");

// alert(data);

let customerName = "Fanner Lhastly";

if (customerData) {
  // const customer = customerData.filter(customer => customer.name === "Proffer" ); 
// alert(customerData.name[1]);
  // customerData.sort((a, b) => (a.name > b.name ? 1 : -1));
  customerData.forEach(customer => {
    // alert(customer.name)
  
    if(customer.name === "Proffer" && customer.loan === "Completed"){
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
    }
    else{
      document.write("No Data");
    }

  });
}
