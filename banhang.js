
const $loginModal=document.getElementById('modal-login-container');
const $buttonLogin=document.getElementById('button-login');
$buttonLogin.addEventListener('click',()=>{
    $loginModal.classList.add('showing');
});
const $buttonCloseLogin=document.getElementById('button-login-close');
$buttonCloseLogin.addEventListener('click',()=>{
    $loginModal.classList.remove('showing');
});

const $signupModal=document.getElementById('modal-signup-container');
const $buttonSignup=document.getElementById('btn-sign-up');
$buttonSignup.addEventListener('click',()=>{
    $signupModal.classList.add('show');
});
const $buttonCloseSignup=document.getElementById('button-signup-close');
$buttonCloseSignup.addEventListener('click',()=>{
    $signupModal.classList.remove('show');
})