const btnLogin = document.getElementById('btnLogin');
const txtEmailId = document.getElementById('txtEmailId');
const txtPassword = document.getElementById('txtPassword');


btnLogin.addEventListener('click', handler);

function handler() {
    const emailId = txtEmailId.value;
    const password = txtPassword.value;

    if (emailId === '' && password === '') {
        alert('invalid Email Id and Password');
    } else if (emailId === '') {
        alert('invalid EmailId');
    } else if (password === '') {
        alert('invalid Password');
    } else {
        const lenPassword = password.length;
        if (lenPassword < 8) {
            alert('password should be greater than 8 digits');
            return;
        }


        alert('Login Success');
    }
}