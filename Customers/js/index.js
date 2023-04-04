document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    
const Account = JSON.parse(localStorage.getItem("Account")) || [];

// const newData = data.filter((item) => item.name === "Proffer");

// alert(data);

let customerName = "Fanner Lhastly";

if (customerData) {
  // const customer = customerData.filter(customer => customer.name === "Proffer" ); 
// alert(customerData.name[1]);
  // customerData.sort((a, b) => (a.name > b.name ? 1 : -1));
  customerData.forEach(customer => {
    // alert(customer.name)
  
    if(customer.name === "Proffer" && customer.loan === "Unpaid"){
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
