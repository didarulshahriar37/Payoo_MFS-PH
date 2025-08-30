const validPin = 5678;
const transactionData = [];

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

function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for (const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

function activeButton(id){
    const formBtns = document.getElementsByClassName('form-btn');

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
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
    if (amount <= 0){
        alert('Invalid Amount !');
        return;
    }
    if (pin != validPin){
        alert("Incorrect Pin !");
        return;
    }
    
    const totalNewAvailableBalance = amount + availabeBalance;

    setInnerText(totalNewAvailableBalance);

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    };

    transactionData.push(data);
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

    
    if (amount != 0 && amount <= availableBalance ){
        const totalNewAvailableBalance = availableBalance - amount;

        setInnerText(totalNewAvailableBalance);

        const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    };

    transactionData.push(data);
    }
    else{
        alert("Invalid Amount ! :(");
    }
})

// Transactions part 
document.getElementById('transactions-button').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';

    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-[#f4f5f7]">
                            <img src="../assets/wallet1.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>

                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
        transactionContainer.appendChild(div);
    }
})

// toggling feature
document.getElementById('add-button').addEventListener('click', function(){
    handleToggle('add-money-parent');
    activeButton('add-button');
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    handleToggle('cash-out-parent');
    activeButton('cash-out-button');
})

document.getElementById('transfer-money-button').addEventListener('click', function(){
    handleToggle('transfer-money-parent');
    activeButton('transfer-money-button');
})

document.getElementById('get-bonus-button').addEventListener('click', function(){
    handleToggle('get-bonus-parent');
    activeButton('get-bonus-button');
})

document.getElementById('pay-bill-button').addEventListener('click', function(){
    handleToggle('pay-bill-parent');
    activeButton('pay-bill-button');
})

document.getElementById('transactions-button').addEventListener('click', function(){
    handleToggle('transactions-parent');
    activeButton('transactions-button');
})