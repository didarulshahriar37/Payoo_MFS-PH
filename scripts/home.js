const validPin = 5678;

// Re-usable functions
function getInputValueNumber (id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value);

    return inputFieldValueNumber;
}

function getInputValue(id){
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}

function getInnerTextNumber(id){
    const innerTextNumber = parseInt(document.getElementById(id).innerText);

    return innerTextNumber;
}

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance').innerText = value;

    return availableBalanceElement;
}

// Add Money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number');
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');
    const availabeBalance = getInnerTextNumber('available-balance');

    if (bank === 'Select a bank'){
        alert("Bank field can't be empty !");
        return;
    }
    if (accountNumber.length < 11 || accountNumber.length > 11){
        alert('Please provide a valid account number !');
        return;
    }
    if (pin != validPin){
        alert("Incorrect Pin !");
        return;
    }
    
    const totalNewAvailableBalance = amount + availabeBalance;

    setInnerText(totalNewAvailableBalance);
})

// Cashout Feature
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = getInputValue('agent-number');
    const pin = getInputValueNumber('withdraw-pin');
    const amount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInnerTextNumber('available-balance');

    if (agentNumber.length < 11){
        alert('Enter a valid number !');
        return;
    }
    if (pin != validPin){
        alert('Incorrect Pin !');
        return;
    }

    
    if (amount <= availableBalance ){
        const totalNewAvailableBalance = availableBalance - amount;

        setInnerText(totalNewAvailableBalance);
    }
    else{
        alert("Insufficient Balance ! :(");
    }
})

// toggling feature
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
    document.getElementById('transactions-parent').style.display = 'none';
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
    document.getElementById('transactions-parent').style.display = 'none';
})

document.getElementById('transfer-money-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'block';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
    document.getElementById('transactions-parent').style.display = 'none';
})

document.getElementById('get-bonus-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'block';
    document.getElementById('pay-bill-parent').style.display = 'none';
    document.getElementById('transactions-parent').style.display = 'none';
})

document.getElementById('pay-bill-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'block';
    document.getElementById('transactions-parent').style.display = 'none';
})

document.getElementById('transactions-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'none';
    document.getElementById('transactions-parent').style.display = 'block';
})