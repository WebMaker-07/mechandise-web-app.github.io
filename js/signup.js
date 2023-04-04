document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let useremail = document.getElementById("useremail").value;
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    // Test if usewr could pass data
        // alert(userName);
        // alert(passWord);
        // alert(email);
        // alert(confirmpassword);
    // let accountData = JSON.parse(localStorage.getItem('Account'));//get the data from the local storage


  
        let customers =[];
        
        let customer ={
            email: useremail,
            username: userName,
            password: passWord ,
            confirmpassword: confirmPassword,
        }
            customers.push(customer);

            localStorage.setItem('SukiAccount', JSON.stringify(customers));
            alert(customer.username + "Thank you For Signing up");
    // if (passWord == confirmpassworde && passWord == accountData.password) {
    //      window.location.replace("./Customers/home.html");
    // } else {
    //     alert("Invalid information");
    //     return;
    // }
  });