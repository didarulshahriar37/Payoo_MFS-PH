const validPin = 5678;

// Add Money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    const availabeBalance = parseInt(document.getElementById('available-balance').innerText);

    if (bank === 'Select a bank'){
        alert("Bank field can't be empty !");
        return;
    }
    if (accountNumber.length < 11){
        alert('Please provide a valid account number !');
        return;
    }
    if (pin != validPin){
        alert("Incorrect Pin !");
        return;
    }

    const totalNewAvailableBalance = amount + availabeBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})

// Cashout Feature
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;
    const pin = parseInt(document.getElementById('withdraw-pin').value);
    const amount = parseInt(document.getElementById('withdraw-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (agentNumber.length < 11){
        alert('Enter a valid number !');
        return;
    }
    if (pin != validPin){
        alert('Incorrect Pin !');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
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

