const sideMenu = document.querySelector("aside");
const mainBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

console.log(sideMenu);

mainBtn.addEventListener('click', () => { 
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',  () => {
    sideMenu.style.display = 'none';
})

// ==================THEME MODE==================

const themeToggler = document.querySelector(".theme-toggler");
console.log(themeToggler)

themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active')
    
})

// ======================= ORDER IN TABLE==================

orders.forEach(Order => {
    const tr = document.createElement('tr');
    const trContent =`
                        <td>${Order.customerName}</td>
                        <td>${Order.customerNumber}</td>
                        <td>${Order.payment}</td>
                        <td class="${Order.balance > 
                        0 ? 'danger' : Order.
                        balance === '0'? 'success'
                        : 'primary'}">${Order.status}</td>
                        <td class="primary">Details</td>
                        `;
                        console.log(Order.costumerName)

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})