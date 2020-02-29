const loginBtn = document.getElementById("login");

// login button lisner
loginBtn.addEventListener('click',function() {

    document.getElementById('login-area').style.display = "none";
    document.getElementById('main-aria').style.display = "block";
     
})

// add dipojit
const addDipojitbtn = document.getElementById('addDipojit');
addDipojitbtn.addEventListener('click', function(){
    const amount = getInput("dipojit");
    updateAmount("dipojitAmount", amount )
    updateAmount("totalBalance", amount )

})
//withdraw balance
const withdraw = document.getElementById('withdrawamout');
withdraw.addEventListener('click', function(){
    const amount = getInput("withdraw");
    updateAmount("withdrawAmount", amount )
    updateAmount("totalBalance", -1 * amount )

})

// get input value 
function getInput(id) {
    const val = document.getElementById(id).value
    document.getElementById(id).value=""
    return Math.floor(val)
}


// updateBalance
function updateAmount(id, amount) {
    const currentAmount = document.getElementById(id);
    const totalAmout = Math.floor(currentAmount.innerText) + amount;
    currentAmount.innerText = totalAmout

}