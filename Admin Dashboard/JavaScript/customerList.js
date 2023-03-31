let dataStore = []

const addData = (event) =>{
    event.preventDefault();
    const data = {
        id: Date.now(),
        CustomerName: document.getElementById("name").value,
        CustomerNumber: document.getElementById("number").value,
        Payment: document.getElementById("payment").value,
        Balance: document.getElementById("balance").value,
    }
    dataStore.push(data);


    localStorage.setItem("data", JSON.stringify(dataStore));    
}
let add = document.getElementById('add');
    add.addEventListener("click", addData)

    function addDataValue(event){
        event.preventDefault();
        let addValue = []
        let data = JSON.parse(localStorage.getItem("data"));
        for(let i = 0; i < data.length; i++){
            addValue.push(data[i].CustomerName);
            addValue.push(data[i].CustomerNumber);
            addValue.push(data[i].Payment);
            addValue.push(data[i].Balance);
            }
            document.getElementById("tableData").value = addValue.join("\n");
            
    }

let edit = document.getElementById('edit')
    edit.addEventListener('click', dataStore)