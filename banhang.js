
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

const dataPants=[
    {
        idProduct: 1,
        productName:'Quần tây dài',
        image:'https://cf.shopee.vn/file/1895d6c9310fb46e43db0e39516e884b',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 2,
        productName:'Quần tây dài',
        image:'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 3,
        productName:'Quần tây dài',
        image:'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 4,
        productName:'Quần tây dài',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOBnaXvwJvDavW-NWZzH0RZkoyHTphpmn5A&usqp=CAU',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 5,
        productName:'Quần tây dài',
        image:'https://menfit.vn/uploads/m/a/9/U/-/I4PFf_quan-tay-nam-9065-cuongstore.jpg',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 6,
        productName:'Quần tây dài',
        image:'https://img.cdn.vncdn.io/cdn-pos/492284-9176/ps/20210206_fSWZ7VWFrwRkPC6GjvawOw7M.jpg',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 7,
        productName:'Quần tây dài',
        image:'https://dony.vn/wp-content/uploads/2022/03/quan-cau-long-nam-dep-ban-chay-1.jpg',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 8,
        productName:'Quần tây dài',
        image:'https://www.mendaily.vn/images/thumbs/2020/11/quan-kaki-tron-can-ban-qk004-mau-den-15675-slide-products-5f9fd1219ab12.png',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 9,
        productName:'Quần tây dài',
        image:'https://www.mendaily.vn/images/thumbs/2020/11/quan-kaki-tron-can-ban-qk004-mau-den-15675-slide-products-5f9fd1219ab12.png',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 10,
        productName:'Quần tây dài',
        image:'https://cf.shopee.vn/file/1895d6c9310fb46e43db0e39516e884b',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 11,
        productName:'Quần tây dài',
        image:'https://cf.shopee.vn/file/1895d6c9310fb46e43db0e39516e884b',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 12,
        productName:'Quần tây dài',
        image:'https://cf.shopee.vn/file/1895d6c9310fb46e43db0e39516e884b',
        price: '5.000.000đ',
        idType:'Quần',

    },
]
console.log(dataPants);
const $productContainer= document.getElementsByClassName('col-3');
console.log($productContainer);

const test=[`
âlka
sdkldjskldj
fgg`,`dsklfjdsklfj
sdfljl
thu 3`,`thu 4 thu 5`];

const test2=[`
thu 2
thu 3
 thu 4
 `];
 console.log(test)
test.join()
console.log(test.join(''))

const $pantList=document.getElementById('pantsList')
console.log($pantList);
const htmlPanlist=dataPants.map(function({idProduct,productName,image,price,idType}){
    return `
    <div class="col-3">
    <div class="card">
      <img
        class="card-img-top"
        src=${image}
        alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">${productName}</h4>
        <p class="card-text">${price}</p>
        <a href="#" class="btn btn-primary">Mua</a>
      </div>
    </div>
  </div>
    `
}).join('');
console.log(htmlPanlist);
$pantList.innerHTML=htmlPanlist;

