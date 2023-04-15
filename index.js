
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
});

const TYPES = [
    {
        id: 'quan',
        name: 'Quần'
    },
    {
        id: 'ao',
        name: 'Áo'
    },
    {
        id: 'giay',
        name: 'Giày'
    }
];

const _container = document.getElementById("product-list");

const renderFilterMenu = (menu) => {
    const menuItems = menu.map(item => {
        return `
            <div class="menu-item" id="${item.id}">${item.name}</div>
        `;
    }).join('');
    const _menu = document.getElementById('menu');
    console.log(menuItems)
    _menu.innerHTML = menuItems;

    menu.forEach(typeProduct => {
        document.getElementById(typeProduct.id).addEventListener('click', () => {
            
            const _product = 
            _container.innerHTML = `Đây là những sản phẩm thuộc loại ${item.name}`;
        });
    });
}

renderFilterMenu(TYPES);


