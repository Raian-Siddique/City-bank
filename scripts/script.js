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
const loginBtn = document.getElementById("login"); //this means when press the loginBtn fins the login-area and add an event listener
loginBtn.addEventListener("click", function () { // so we add click event listener and creat an open function
    const loginArea = document.getElementById("login-area"); //after finding  login-area, put it in a var 
    loginArea.style.display = "none"; // we style the the var to display none so it wont display, when first load the page second page / transaction page  display will be hidden.
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
}) //as soon as we click in the button the transaction area display will be block. and the login area will be display none.





//8888888888888888        deposit button event handler        888888888888888888888

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount"); // took the amount from the user using this function getInputNumber()
    //getInputNumber() is a function to take the new input from the user.
    //and return the num value, to further add or subtract it with the old value.

    updateSpanText("currentDeposit", depositNumber);
    //balance will be addeed and same amount will be added in the current balance
    //with updateSpanText() we ate calling the function and  passing an id in the function

    updateSpanText("currentBalance", depositNumber);
    //same addition as like deposit amount,
    // just previous balance different bot no worry function will calculate it automatically
    // in terms of balance passing currentBalance, for Deposit Passing currentDeposit
    // both same amount addition

    document.getElementById("depositAmount").value = ""; // just reloading the empty string
})

//88888888888888888888888     Withdraw button event handler    8888888888888888888888888888

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");


    updateSpanText("currentWithdraw", withdrawNumber);
    //
    updateSpanText("currentBalance", -1 * withdrawNumber);
    // because withdrawing so passing negative amount using -1 .
    //it will subtract if we withdraw amount.
    document.getElementById("withdrawAmount").value = ""
    //it will reload auto after we put a value.thats why put an empty string

})

//888888888888888888888    Function section   888888888888888888888888888


//this function is for taking input in the function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    // value take the input value put in the user box..
    // as soon we pass an id of thar box in this function the value take only that input text value 
    //and convert it in a number and return the value. 
    const amountNumber = parseFloat(amount);
    //we are putting value as a string and parseFloat() is converting it in a number.
    return amountNumber;
    // we are returning it bcoz if the rest amount should be shown in the balance .
    // withdraw 500 from 1500 then return na hole 1000 pabo na.
    // so we have to sore the rest of amount and pass it in the id. 

}
// second step is to update the user input/ value, in the box. this function do this for us.
function updateSpanText(id, addedNumber) { // when pass the id , it will find the span using that id and will updated its inner text.
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber; // then will add the current amount with the previous amount .
    document.getElementById(id).innerText = totalAmount;
    // using this line we update or pass the total amount and change the inner text
    // with the total amount after the user pass a input value 
}