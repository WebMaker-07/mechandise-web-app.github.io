

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
   
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    //Test if usewr could pass data
        // alert(userName);
        // alert(passWord);
    let accountData = JSON.parse(localStorage.getItem('SukiAccount'));//get the data from the local storage

    for (let i = 0; i < accountData.length; i++){
        if (userName == accountData[i].username && passWord == accountData[i].password){
            window.location.replace("./Customers/home.html");
            sessionStorage.setItem("username", userName);
        }
        else {
                alert("Invalid information");
                return;
            }
    }
 
  });
  