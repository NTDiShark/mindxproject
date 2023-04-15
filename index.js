
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

const PRODUCTS=[
    {
        idProduct: 1,
        productName:'Quần Hiddy',
        image:'https://bizweb.dktcdn.net/100/399/392/files/ten-goi-cac-loai-quan-nam.jpg?v=1657302603507',
        price: '255.000đ',
        idType:'quan',
    },
    {
        idProduct: 2,
        productName:'Quần tây dài',
        image:'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5.000đ',
        idType:'quan',
    },
    {
        idProduct: 3,
        productName:'Quần Jean rách',
        image:'https://thoitrangngaynay.com/upload/sanpham/large/quan-jeans-nam-rach-loang-mau-thoi-trang-488-1.jpg',
        price: '350.000đ',
        idType:'quan',
    },
    {
        idProduct: 4,
        productName:'Giầy Kawwasaki',
        image:'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzt005-3-chinh-hang.jpg',
        price: '5.000.000đ',
        idType:'giay',
    },
    {
        idProduct: 5,
        productName:'Giầy Lining',
        image:'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat003-2-trang-den-noi-dia-trung.jpg',
        price: '500.000đ',
        idType:'giay',
    },
    {
        idProduct: 6,
        productName:'Giầy Yonex',
        image:'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat001-2-den-noi-dia-trung.jpg',
        price: '500.000đ',
        idType:'giay',
    },
    {
        idProduct: 7,
        productName:'Áo cầu lông VNB',
        image:'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nu-cam-ma-200-1.webp',
        price: '200.000',
        idType:'ao',
    },
    {
        idProduct: 8,
        productName:'Áo cầu lông Lining',
        image:'https://shopvnb.com/uploads/san_pham/ao-cau-long-yonex-nu-xanh-bien-ma-746-1.webp',
        price: '400.000đ',
        idType:'ao',
    },
    {
        idProduct: 9,
        productName:'Áo cầu lông',
        image:'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nam-trang-ma-753-1.webp',
        price: '200.000đ',
        idType:'ao',
    },  
]

const _container = document.getElementById("product-list");

const renderFilterMenu = (menu) => {
    const menuItems = menu.map(item => {
        return `
            <div class="menu-item" id="${item.id}">${item.name}</div>
        `;
    }).join('');
    const _menu = document.getElementById('menu');
    _menu.innerHTML = menuItems;

    const allProduct = PRODUCTS.map(({idProduct,productName,image,price})=>{
        return `
        <div class="aProduct">
                <img
                  class="imgProduct"
                  src=${image} id=${idProduct}/>
                <div class="title-pant-card">${productName}</div>
                <div class="price-pant-card">${price}</div>
                <button>Mua</button>
              </div>
        `
    }).join('');
    _container.innerHTML = allProduct;

    menu.forEach(typeProduct => {
        document.getElementById(typeProduct.id).addEventListener('click', () => {
            const checkType = (_type) => {
                return _type.idType === typeProduct.id;
            };
            const _productList = PRODUCTS.filter(checkType);
            const _renderProduct = _productList.map(({idProduct,productName,image,price})=>{
                return `
                <div class="aProduct">
                        <img class="imgProduct" src=${image} id=${idProduct}/>
                        <div class="title-pant-card">${productName}</div>
                        <div class="price-pant-card">${price}</div>
                        <button>Mua</button>
                </div>
                `
            }).join('');
            _container.innerHTML = _renderProduct;
        });
    });
}

renderFilterMenu(TYPES);


