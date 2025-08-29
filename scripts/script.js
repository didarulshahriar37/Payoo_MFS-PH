// login button functionality
document.getElementById('loginButton').addEventListener('click', function (e){
    e.preventDefault();
    const mobileNumber = 12345678937;
    const pinNumber = 5678;
    
    const mobileNumbervalue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumbervalue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted){
        window.location.href="./pages/home.html"
    }
    else{
        alert("Invalid Credentials");
    }
})