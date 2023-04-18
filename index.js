const TYPES = [
    {
        id: 'all',
        name: 'Tất cả sản phẩm'
    },
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

const PRODUCTS = [
    {
        idProduct: 1,
        productName: 'Quần Hiddy',
        image: 'https://bizweb.dktcdn.net/100/399/392/files/ten-goi-cac-loai-quan-nam.jpg?v=1657302603507',
        price: '255000',
        idType: 'quan',
    },
    {
        idProduct: 2,
        productName: 'Quần tây dài',
        image: 'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5000',
        idType: 'quan',
    },
    {
        idProduct: 3,
        productName: 'Quần Jean rách',
        image: 'https://thoitrangngaynay.com/upload/sanpham/large/quan-jeans-nam-rach-loang-mau-thoi-trang-488-1.jpg',
        price: '350000',
        idType: 'quan',
    },
    {
        idProduct: 4,
        productName: 'Giầy Kawwasaki',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzt005-3-chinh-hang.jpg',
        price: '5000000',
        idType: 'giay',
    },
    {
        idProduct: 5,
        productName: 'Giầy Lining',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat003-2-trang-den-noi-dia-trung.jpg',
        price: '500000',
        idType: 'giay',
    },
    {
        idProduct: 6,
        productName: 'Giầy Yonex',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat001-2-den-noi-dia-trung.jpg',
        price: '500000',
        idType: 'giay',
    },
    {
        idProduct: 7,
        productName: 'Áo cầu lông VNB',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nu-cam-ma-200-1.webp',
        price: '200000',
        idType: 'ao',
    },
    {
        idProduct: 8,
        productName: 'Áo cầu lông Lining',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-yonex-nu-xanh-bien-ma-746-1.webp',
        price: '400000',
        idType: 'ao',
    },
    {
        idProduct: 9,
        productName: 'Áo cầu lông',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nam-trang-ma-753-1.webp',
        price: '200000',
        idType: 'ao',
    },
    {
        idProduct: 10,
        productName: 'Áo thun xanh Lining',
        image: 'https://shopvnb.com/uploads/gallery/ao-cau-long-yonex-a327-nam-trang-xanh.jpg',
        price: '166000',
        idType: 'ao',
    },
    {
        idProduct: 11,
        productName: 'Quần felet',
        image: 'https://shopvnb.com/uploads/gallery/quan-cau-long-felet-cm202b-blk-chinh-hang.jpg',
        price: '300000',
        idType: 'quan',
    },
    {
        idProduct: 12,
        productName: 'Giầy Lining trắng',
        image: 'https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayat003-3-trang-noi-dia-trung.jpg',
        price: '400000',
        idType: 'giay',
    },
    {
        idProduct: 13,
        productName: 'Giầy kawasaki trắng',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-kawasaki-a3311-3-trang-vien-hong-noi-dia-trung.jpg',
        price: '1500000',
        idType: 'giay',
    },
    {
        idProduct: 14,
        productName: 'Áo yonex đỏ',
        image: 'https://shopvnb.com/uploads/gallery/ao-cau-long-yonex-6267-nam-den.jpg',
        price: '300000',
        idType: 'ao',
    },
    {
        idProduct: 15,
        productName: 'Quần xanh đen',
        image: 'https://shopvnb.com/uploads/gallery/quan-cau-long-victec-qv001-nu-den-trang.jpg',
        price: '210000',
        idType: 'quan',
    },
    {
        idProduct: 16,
        productName: 'Quần ngắn Kumpo',
        image: 'https://shopvnb.com/uploads/san_pham/quan-cau-long-thun-du-kamito-ruso-xam-1.webp',
        price: '177000',
        idType: 'quan',
    },
    {
        idProduct: 17,
        productName: 'Giầy Lining AYT',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzt005-4-chinh-hang.webp',
        price: '200000',
        idType: 'giay',
    },
    {
        idProduct: 18,
        productName: 'Áo khoát cầu lông',
        image: 'https://shopvnb.com/img/300x300/uploads/san_pham/ao-cau-long-tay-dai-yonex-316-nam-vang-1.webp',
        price: '600000',
        idType: 'ao',
    },
    {
        idProduct: 19,
        productName: 'Quần xanh tím',
        image: 'https://shopvnb.com/uploads/san_pham/quan-cau-long-yonex-9636-xanh-1.webp',
        price: '166000',
        idType: 'quan',
    },
    {
        idProduct: 20,
        productName: 'Giầy promax',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-promax-07122-do-den-chinh-hang.jpg',
        price: '400000',
        idType: 'giay',
    },
    {
        idProduct: 21,
        productName: 'Giầy kawa 3309',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-kawasaki-3307-den-chinh-hang_1.jpg',
        price: '640000',
        idType: 'giay',
    },
    {
        idProduct: 22,
        productName: 'Áo xanh Victor',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-yonex-a285-nam-xanh-1.webp',
        price: '2150000',
        idType: 'ao',
    },
    {
        idProduct: 23,
        productName: 'Quần nữ thể thao',
        image: 'https://shopvnb.com/uploads/san_pham/quan-cau-long-yonex-nu-den-ma-403-1.webp',
        price: '200000',
        idType: 'quan',
    },

]

let carts = [];

const container = document.getElementById("product-list");

const renderFilterMenu = (menu) => {
    const menuItems = menu.map(item => {
        return `
            <div class="menu-item" id="${item.id}"><img src="./icon/${item.id}.png" class="iconType"> ${item.name}</div>
        `;
    }).join('');
    const _menu = document.getElementById('menu');
    _menu.innerHTML = menuItems;



    menu.forEach(typeProduct => {
        document.getElementById(typeProduct.id).addEventListener('click', () => {
            const checkType = (_product) => {
                if (typeProduct.id === 'all') return true;
                return _product.idType === typeProduct.id;
            };

            const menuItem = document.getElementById(typeProduct.id);
            const activeList = document.getElementsByClassName('menu-item-active');
            for (const element of activeList) {
                element.classList.remove('menu-item-active');
            }
            menuItem.classList.add('menu-item-active');

            const _productList = PRODUCTS.filter(checkType);
            const _renderProduct = _productList.map(({ idProduct, productName, image, price }) => {
                return `
                <div class="aProduct">
                    <img class="imgProduct" src=${image} id=${idProduct}/>
                        <div class="detailsProduct">
                            <h5>${productName}</h5>
                            <div class="priceProduct">${Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</div>
                            <div id="buy-${idProduct}" class="buyProduct">Mua</div>
                        </div>
                </div>
                `
            }).join('');
            container.innerHTML = _renderProduct;

            _productList.forEach(item => {
                document.getElementById(`buy-${item.idProduct}`).addEventListener('click', () => {
                    carts.push(item);
                    updateNumberOfCart();
                });
            });
        });
    });

    document.getElementById('all').click();
}

renderFilterMenu(TYPES);

function formatString(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

let timeoutId = null;

function searchProduct() {
    let keySearch = document.getElementById("searchProduct").value;
    keySearch = formatString(keySearch);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        let searchList = [];
        PRODUCTS.forEach(aProduct => {
            const temp = formatString(aProduct.productName);
            if (temp.indexOf(keySearch) != -1) searchList.push(aProduct);
        })
        if (searchList === []) container.innerHTML = "Không có sản phẩm bạn cần tìm";
        else {
            const _renderSearched = searchList.map(({ idProduct, productName, image, price }) => {
                return `
                <div class="aProduct">
                    <img class="imgProduct" src=${image} id=${idProduct}/>
                        <div class="detailsProduct">
                            <h5>${productName}</h5>
                            <div class="priceProduct">${Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</div>
                            <div class="buyProduct">Mua</div>
                        </div>
                </div>
                `
            }).join('');
            container.innerHTML = _renderSearched;
        }
    }, 400);

}

function updateNumberOfCart() {
    document.getElementById('number-of-cart').innerHTML = carts.length;
}

document.getElementById('searchBut').addEventListener('click', searchProduct);
document.getElementById("searchProduct").addEventListener('keydown', searchProduct);
document.getElementById("searchProduct").addEventListener('keyup', searchProduct);

const cartIcon = document.getElementById('cart-icon');
const cartElement = document.getElementById('cart');
const showCart = document.getElementById('show-cart');

function updateTotal_product_price() {
    document.getElementById('totalProduct').innerHTML = carts.length;
    console.log(carts.length);
    const tempArr = carts.map(product => product.price);
    let sum = tempArr.reduce(function (a,b) {return Number.parseFloat(a)+Number.parseFloat(b)}, 0);
    document.getElementById('totalPrice').innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sum)
}

function renderCart() {
    if(carts.length == 0) {
        showCart.innerHTML = "Chưa có món hàng nào";
        updateTotal_product_price();
    }
    else {
        const _renderCart = carts.map(({ idProduct, productName, image, price }) => {
            return `
            <li>
                <img class="cart-img-product" src="${image}">
                <div class="cart-name-product">${productName}</div>
                <div class="cart-price-product">${Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</div>
                <div class="cart-quantity-product">1</div>
                <div class="cart-total-product">${Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</div>
                <div class="cart-delete-product" id="delete-${idProduct}">Xóa sản phẩm</div>
            </li>
            `
        }).join('');
        showCart.innerHTML = _renderCart;
        
        carts.forEach(item => {
            document.getElementById(`delete-${item.idProduct}`).addEventListener('click', () => {
                carts = carts.filter(product => product.idProduct != item.idProduct); //lọc sản phẩm có id khác với id cần xóa
                renderCart();
                updateNumberOfCart();
                
            });
        });

        updateTotal_product_price();
    }
}

cartIcon.addEventListener('click', () => {
    renderCart();
    cartElement.style.display = 'block';
    
});

window.onclick = function(event) {
    if (event.target == cartElement) {
        cartElement.style.display = 'none';
    }
}
