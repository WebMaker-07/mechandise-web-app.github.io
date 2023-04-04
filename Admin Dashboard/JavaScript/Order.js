const orders = [{
    ProductName: 'Hard Copy',
    Quantity:'100',
    Price: '250',
    Status: 'Stock Enough',
    
},
{
    ProductName: 'Hard Copt',
    Quantity:'100',
    Price: '250',
    Status: 'Stock Enough',
},
{
    ProductName: 'Hard Copt',
    Quantity:'100',
    Price: '250',
    Status: 'Stock Enough',
},
{
    ProductName: 'Hard Copt',
    Quantity:'100',
    Price: '250',
    Status: 'Stock Enough',
}
]
if (orders) {
    const tbody = document.querySelector('.table1 tbody');
    
    for (let i = Math.max(0, orders.length - 4); i < orders.length; i++) {
      const customer = orders[i];
      const tr = document.createElement('tr');
      
      const nameTd = document.createElement('td');
      nameTd.textContent = customer.ProductName;
      tr.appendChild(nameTd);
      
      const quantitytd = document.createElement('td');
      contactTd.textContent = customer.Quantity;
      tr.appendChild(quantitytd);
      
      const paymentTd = document.createElement('td');
      paymentTd.textContent = customer.Price;
      tr.appendChild(paymentTd);

      const statusTd = document.createElement('td');
      paymentTd.textContent = customer.Status;
      tr.appendChild(statusTd);
    
      tbody.appendChild(tr);
    }
  }