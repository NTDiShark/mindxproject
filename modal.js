const buttonLogin=document.getElementById('button');
const modalLogin=document.getElementById('id01');
buttonLogin.addEventListener('click',()=>{
    modalLogin.classList.add('show');
})

window.onclick= function(e){
    console.log(e.target);
    if(e.target==modalLogin || e.target == modalSignup){
        modalLogin.style.display='none';
    }
};
const buttonSignup=document.getElementById('button-Signup');
const modalSignup=document.getElementById('id02');
buttonSignup.addEventListener('click',()=>{
    modalSignup.classList.add('show');
});

