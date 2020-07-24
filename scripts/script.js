// //login button event handler

// const loginBtn = document.getElementById("login");
// loginBtn.addEventListener("click", function () {
//     const loginArea = document.getElementById("login-area");
//     loginArea.style.display = "none";
//     const transactionArea = document.getElementById("transaction-area");
//     transactionArea.style.display = "block";
// })


// //deposit button event handler      
// const depositBtn = document.getElementById("addDeposit");
// depositBtn.addEventListener("click", function () {
//     const previousDepositAmount = document.getElementById("depositAmount").Value;
//     const depositNumber = parseFloat(previousDepositAmount);

//     const currentDepositAmount = document.getElementById("currentDeposit").innerText;
//     const currentDepositNumber = parseFloat(currentDepositAmount);
//     const totalDeposit = depositNumber + currentDepositNumber;

//     document.getElementById("currentDeposit").innerText = totalDeposit;



// })





// login button event handler
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
    const depositNumber = getInputNumber("depositAmount");


    // const previousDepositAmount = document.getElementById("depositAmount").Value;
    // const depositNumber = parseFloat(previousDepositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})
//Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber);

})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;


}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}