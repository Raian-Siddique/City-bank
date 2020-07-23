//login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


//deposit button event handler      
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    console.log("deposit click");
})