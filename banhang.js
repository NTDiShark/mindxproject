const $signUp= document.getElementById('btn-sign-up');
console.log($signUp)
const modalBox1= document.getElementById('modal-container')
console.log(modalBox1);
$signUp.addEventListener('click',()=>{
    modalBox1.classList.add('show');
})

const buttonClose= document.getElementById('button-close')
console.log(buttonClose)
buttonClose.addEventListener('click',()=>{
    modalBox1.classList.remove('show');
});