let dispPending = document.getElementById("pending");
let dispCompleted = document.getElementById("completed");
let dispCancelled = document.getElementById("cancelled");
let btnPending = document.getElementById("btnPending");
let btnCompleted = document.getElementById("btnCompleted");
let btnCancelled = document.getElementById("btnCancelled");

function completed()
    {
        dispPending.style.display="none";
        dispCancelled.style.display="none";
        alert("Display attempt");
        dispCompleted.style.display="block";
        btnPending.classList.remove("active");
        btnCancelled.classList.remove("active");
        btnCompleted.classList.add("active");
    }
function cancelled()
    {
        dispPending.style.display="none";
        dispCompleted.style.display="none";
        alert("Display Attempt");
        dispCancelled.style.display="block";
        btnCompleted.classList.remove("active");
        btnPending.classList.remove("active");
        btnCancelled.classList.add("active");
    }
function pending()
    {
        dispCancelled.style.display="none";
        dispCompleted.style.display="none";
        alert("Display Attempt");
        dispPending.style.display="block";
        btnCancelled.classList.remove("active");
        btnCompleted.classList.remove("active");
        btnPending.classList.add("active");
    }