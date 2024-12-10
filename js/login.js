
import * as all from "./signup.js";
var loginBtn = document.querySelector("#login");
var arr = JSON.parse(localStorage.getItem('user'));
var welcomePage = document.querySelector('a');
var uName='';
// ---------------------

function login() {
    if (all.emailInput.value === '' || all.passwordInput.value === '') {
        all.error.innerHTML = `All Inputs required`;
        all.error.classList.remove("d-none");
        return;
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].email === all.emailInput.value && arr[i].password === all.passwordInput.value) {
                uName=arr[i].userName;
                welcomePage.setAttribute('href', 'logout.html');
                return;
            }
        }

        all.error.innerHTML = `incorrect email or password`;
        all.error.classList.remove("d-none");
    }

}

loginBtn.addEventListener('click', login);
welcomePage.setAttribute('href', '#')
export {
    uName,
    arr,
    login,
    welcomePage,
    loginBtn,
}



