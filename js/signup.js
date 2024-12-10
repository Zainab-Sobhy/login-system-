
var nameInput = document.querySelector("#user")
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpBtn = document.querySelector("#signup")
var error = document.querySelector(".error");
var success = document.querySelector(".success");
var userData = [];


function signUp() {
    var userInfo = {
        userName: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        error.innerHTML = `All Inputs required`;
        error.classList.remove("d-none");
        success.classList.add('d-none');
        return;
    }
    else {
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].email === emailInput.value) {
                error.innerHTML = `email is elready exist`;
                error.classList.remove("d-none");
                success.classList.add('d-none');
                return;
            }
        }
    }
    userData.push(userInfo);
    localStorage.setItem('user', JSON.stringify(userData));
    success.classList.remove('d-none');
    error.classList.add("d-none");
    clearInputs();
}

function clearInputs() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}


signUpBtn.addEventListener('click', signUp);

export {
    signUp, userData, nameInput, emailInput, passwordInput,error,signUpBtn

}
