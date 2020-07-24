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
    transactionArea.style.display = "block"; // we display the initial hide component from the css .if click then unhide from  
})




//8888888888888888        deposit button event handler        888888888888888888888

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");
    //getInputNumber() is a function to take the new input from the user.
    //and return the num value, to further add or subtract it with the old value.

    updateSpanText("currentDeposit", depositNumber);
    //with updateSpanText() we ate calling the function and  passing an id in the function

    updateSpanText("currentBalance", depositNumber);
    // in terms of balance passing currentBalance, for Deposit Passing currentDeposit

    document.getElementById("depositAmount").value = ""; // just reloading the empty string
})

//88888888888888888888888     Withdraw button event handler    8888888888888888888888888888

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber); //it will subtract if we withdraw amount.
    document.getElementById("withdrawAmount").value = "" //it will reload auto after we put a value.thats why put an empty string

})

//888888888888888888888    Function section   888888888888888888888888888


//this function is for taking input in the function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount); //we are putting value as a string and parseFloat() is converting it in a number.
    return amountNumber;
    // we are returning it bcoz if the rest amount should be shown in the balance . withdraw 500 from 1500 then return na hole 1000 pabo na.
    // so we have to sore the rest of amount and pass it in the id. 

}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}