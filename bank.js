document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositamount = document.getElementById('deposit-amount');
    const deposit = depositamount.value;

    // update deposit
    const depositshow = document.getElementById('deposit-total');
    const depositTotal = depositshow.innerText;
    const newdeposit = parseFloat(deposit) + parseFloat(depositTotal);
    depositshow.innerText = newdeposit;
    depositamount.value = '';

    //update balance
    const balanceshow = document.getElementById('balance-total');
    const balanceTotal = balanceshow.innerText;
    const newbalance = parseFloat(deposit) + parseFloat(balanceTotal);
    balanceshow.innerText = newbalance;

});

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawamount = document.getElementById('withdraw-amount');
    const withdraw = withdrawamount.value;

    // update withdraw
    const withdrawshow = document.getElementById('withdraw-total');
    const withdrawTotal = withdrawshow.innerText;
    const newwithdraw = parseFloat(withdraw) + parseFloat(withdrawTotal);
    withdrawshow.innerText = newwithdraw;
    withdrawamount.value = '';

    //update balance
    const balanceshow = document.getElementById('balance-total');
    const balanceTotal = balanceshow.innerText;
    const newbalance = parseFloat(balanceTotal) - parseFloat(withdraw);
    balanceshow.innerText = newbalance;

});