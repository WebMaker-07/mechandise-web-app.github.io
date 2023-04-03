let dispSupplier = document.getElementById("list");
let dispHistory = document.getElementById("history");
let dispProduct = document.getElementById("product");
let btnList = document.getElementById("btnList");
let btnHistory = document.getElementById("btnHistory");
let btnProduct = document.getElementById("btnProduct");

function history()
    {
        dispSupplier.style.display="none";
        dispProduct.style.display="none";
        alert("Display Attempt");
        dispHistory.style.display="block";
        btnList.classList.remove("active");
        btnProduct.classList.remove("active");
        btnHistory.classList.add("active");
    }
function product()
    {
        dispSupplier.style.display="none";
        dispHistory.style.display="none";
        alert("Display Attempt");
        dispProduct.style.display="block";
        btnList.classList.remove("active");
        btnHistory.classList.remove("active");
        btnProduct.classList.add("active");
    }
function list()
    {
        dispProduct.style.display="none";
        dispHistory.style.display="none";
        alert("Display Attempt");
        dispSupplier.style.display="block";
        btnHistory.classList.remove("active");
        btnProduct.classList.remove("active");
        btnList.classList.add("active");
    }