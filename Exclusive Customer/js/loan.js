let dispPaid = document.getElementById("paid");
let dispBalance = document.getElementById("balance");
let btnPaid = document.getElementById("btnPaid");
let btnBalance = document.getElementById("btnBalance");

function balance()
    {
        dispPaid.style.display="none";
        alert("display Attempt!");
        btnPaid.classList.remove("active");
        btnBalance.classList.add("active");
        dispBalance.style.display="block";
    }
function paid()
    {
        dispBalance.style.display="none";
        alert("display Attempt!");
        btnBalance.classList.remove("active");
        btnPaid.classList.add("active");
        dispPaid.style.display="block";
    }