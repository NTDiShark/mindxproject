
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
        productName:'Quần Hiddy',
        image:'https://bizweb.dktcdn.net/100/399/392/files/ten-goi-cac-loai-quan-nam.jpg?v=1657302603507',
        price: '255.000đ',
        idType:'Quần',

    },
    {
        idProduct: 2,
        productName:'Quần tây dài',
        image:'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5.000đ',
        idType:'Quần',

    },
    {
        idProduct: 3,
        productName:'Quần Jean rách',
        image:'https://thoitrangngaynay.com/upload/sanpham/large/quan-jeans-nam-rach-loang-mau-thoi-trang-488-1.jpg',
        price: '350.000đ',
        idType:'Quần',

    },
    {
        idProduct: 4,
        productName:'Quần Jean xanh',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOBnaXvwJvDavW-NWZzH0RZkoyHTphpmn5A&usqp=CAU',
        price: '5.000.000đ',
        idType:'Quần',

    },
    {
        idProduct: 5,
        productName:'Quần tây xám',
        image:'https://menfit.vn/uploads/m/a/9/U/-/I4PFf_quan-tay-nam-9065-cuongstore.jpg',
        price: '500.000đ',
        idType:'Quần',

    },
    {
        idProduct: 6,
        productName:'Quần tây đen',
        image:'https://img.cdn.vncdn.io/cdn-pos/492284-9176/ps/20210206_fSWZ7VWFrwRkPC6GjvawOw7M.jpg',
        price: '500.000đ',
        idType:'Quần',

    },
    {
        idProduct: 7,
        productName:'Quần Jean trắng',
        image:'https://thoitrangngaynay.com/upload/sanpham/large/quan-jeans-nam-thiet-ke-o-mau-bam-lo-thoi-trang-801-1.jpg',
        price: '200.000',
        idType:'Quần',

    },
    {
        idProduct: 8,
        productName:'Quần Kaki',
        image:'https://www.mendaily.vn/images/thumbs/2020/11/quan-kaki-tron-can-ban-qk004-mau-den-15675-slide-products-5f9fd1219ab12.png',
        price: '400.000đ',
        idType:'Quần',

    },
    {
        idProduct: 9,
        productName:'Quần thun đen',
        image:'https://lzd-img-global.slatic.net/g/shop/0502b57e666ecb076b30e2438b6cb390.png_1200x1200q80.png_.webp',
        price: '200.000đ',
        idType:'Quần',

    },
    {
        idProduct: 10,
        productName:'Quần short jean',
        image:'https://menfit.vn/uploads/m/8/O/m/i/PdX1q_thoi-trang-nam-2000-quan-jeans-lung.jpg',
        price: '300.000đ',
        idType:'Quần',

    },
    {
        idProduct: 11,
        productName:'Quần Jean kem',
        image:'https://vn-live-01.slatic.net/original/c504268d9247efe88483c63a3a772348.jpg',
        price: '500.000đ',
        idType:'Quần',

    },
    {
        idProduct: 12,
        productName:'Quần tây kiểu',
        image:'https://down-vn.img.susercontent.com/file/ed5eed48abd4f589078c73bf5a076a6c_tn',
        price: '500.000đ',
        idType:'Quần',

    },
]
console.log(dataPants);
const $productContainer= document.getElementsByClassName('col-3');
console.log($productContainer);


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

