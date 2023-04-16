const buttonLogin = document.getElementById('button');
const buttonSignup = document.getElementById('button-Signup');
const modalLogin = document.getElementById('id01');
const modalSignup = document.getElementById('id02');
const cancelLoginBtn = document.getElementById('cancel-login');
const cancelSignUp = document.getElementById('cancel-signup');

buttonLogin.addEventListener('click', () => {
    modalLogin.classList.add('show');
});

buttonSignup.addEventListener('click', () => {
    modalSignup.classList.add('show');
});
window.onclick = function (e) {
    if (e.target == modalLogin) {
        modalLogin.classList.remove('show');
    }
    if (e.target == modalSignup) {
        modalSignup.classList.remove('show');
    }
};

cancelLoginBtn.addEventListener('click', () => {
    modalLogin.classList.remove('show');
});

cancelSignUp.addEventListener('click', () => {
    modalSignup.classList.remove('show');
});
