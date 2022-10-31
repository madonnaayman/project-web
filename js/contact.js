let nameInput = document.getElementById('nameInput');
let namealert = document.getElementById('namealert');

let emailInput = document.getElementById('emailInput');
let emailalert = document.getElementById('emailalert');

let phoneInput = document.getElementById('phoneInput');
let phonealert = document.getElementById('phonealert');

let ageInput = document.getElementById('ageInput');
let agealert = document.getElementById('agealert');

let passwordalert = document.getElementById('passwordalert');
let repasswordalert = document.getElementById('repasswordalert');

let repasswordInput = document.getElementById('repasswordInput')
let passwordInput = document.getElementById('passwordInput')


function validateName(){
    let regexName = /^[a-zA-z ]{3,}$/;
    if(regexName.test(nameInput.value) == true){
       
       
        namealert.classList.add("d-none");
        namealert.classList.remove("d-block");
        submitBtn.disabled = false;

        return true;
                
    }
    else {

        namealert.classList.add("d-block");
        namealert.classList.remove("d-none");
    
        submitBtn.disabled = true;
    
        return false;
    };
    
}

nameInput.addEventListener("keyup", validateName);

function validateEmail() {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            
                if(regex.test(emailInput.value) == true)
                {
                    emailalert.classList.add("d-none");
                    emailalert.classList.remove("d-block");

                    submitBtn.disabled = false;

                    return true;
                
                } else {
            
                    emailalert.classList.add("d-block");
                    emailalert.classList.remove("d-none");

                    submitBtn.disabled = true;
            
                    return false;
                };
}

emailInput.addEventListener("keyup", validateEmail);

function validatePhone() {
    let regexPhone = /^(010|011|012|015)[0-9]{8}$/;
            
                if(regexPhone.test(phoneInput.value) == true)
                {
                    phonealert.classList.add("d-none");
                    phonealert.classList.remove("d-block");

                    submitBtn.disabled = false;

                    return true;
                
                } else {
            
                    phonealert.classList.add("d-block");
                    phonealert.classList.remove("d-none");

                    submitBtn.disabled = true;
            
                    return false;
                };
}

phoneInput.addEventListener("keyup", validatePhone);


function validateAge() {
    let regexAge = /^[1-9][8-9]$/;
            
                if(regexAge.test(ageInput.value) == true)
                {
                    agealert.classList.add("d-none");
                    agealert.classList.remove("d-block");

                    submitBtn.disabled = false;

                    return true;
                
                } else {
            
                    agealert.classList.add("d-block");
                    agealert.classList.remove("d-none");

                    submitBtn.disabled = true;
            
                    return false;
                };
}

ageInput.addEventListener("keyup", validateAge);

function validatePassword() {
    let regePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            
                if(regePassword.test(passwordInput.value) == true)
                {
                    passwordalert.classList.add("d-none");
                    passwordalert.classList.remove("d-block");

                    submitBtn.disabled = false;

                    return true;
                
                } else {
            
                    passwordalert.classList.add("d-block");
                    passwordalert.classList.remove("d-none");

                    submitBtn.disabled = true;
            
                    return false;
                };
}

passwordInput.addEventListener("keyup", validatePassword);

function matchPassword() {  
    let pw1 = passwordInput.value; 
    let pw2 = repasswordInput.value;  
    if(pw1 != pw2) {
        repasswordalert.classList.add("d-none");
        repasswordalert.classList.remove("d-block");
        submitBtn.disabled = false;

        return true;
    } 
  
else {

    repasswordalert.classList.add("d-block");
    repasswordalert.classList.remove("d-none");

    submitBtn.disabled = true;

    return false;
};

}
repasswordInput.addEventListener("keyup", matchPassword);

