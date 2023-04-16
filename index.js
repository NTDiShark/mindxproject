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
        price: '255.000đ',
        idType: 'quan',
    },
    {
        idProduct: 2,
        productName: 'Quần tây dài',
        image: 'https://product.hstatic.net/1000096703/product/1_97e42ec95db74e9fa48e57a068f88165_master.jpg',
        price: '5.000đ',
        idType: 'quan',
    },
    {
        idProduct: 3,
        productName: 'Quần Jean rách',
        image: 'https://thoitrangngaynay.com/upload/sanpham/large/quan-jeans-nam-rach-loang-mau-thoi-trang-488-1.jpg',
        price: '350.000đ',
        idType: 'quan',
    },
    {
        idProduct: 4,
        productName: 'Giầy Kawwasaki',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzt005-3-chinh-hang.jpg',
        price: '5.000.000đ',
        idType: 'giay',
    },
    {
        idProduct: 5,
        productName: 'Giầy Lining',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat003-2-trang-den-noi-dia-trung.jpg',
        price: '500.000đ',
        idType: 'giay',
    },
    {
        idProduct: 6,
        productName: 'Giầy Yonex',
        image: 'https://shopvnb.com/uploads/gallery/giay-cau-long-lining-ayat001-2-den-noi-dia-trung.jpg',
        price: '500.000đ',
        idType: 'giay',
    },
    {
        idProduct: 7,
        productName: 'Áo cầu lông VNB',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nu-cam-ma-200-1.webp',
        price: '200.000',
        idType: 'ao',
    },
    {
        idProduct: 8,
        productName: 'Áo cầu lông Lining',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-yonex-nu-xanh-bien-ma-746-1.webp',
        price: '400.000đ',
        idType: 'ao',
    },
    {
        idProduct: 9,
        productName: 'Áo cầu lông',
        image: 'https://shopvnb.com/uploads/san_pham/ao-cau-long-vnb-nam-trang-ma-753-1.webp',
        price: '200.000đ',
        idType: 'ao',
    },
]

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
            console.log(checkType);
            const _renderProduct = _productList.map(({ idProduct, productName, image, price }) => {
                return `
                <div class="aProduct">
                    <img class="imgProduct" src=${image} id=${idProduct}/>
                        <div class="detailsProduct">
                            <h5>${productName}</h5>
                            <div class="priceProduct">${price}</div>
                            <div class="buyProduct">Mua</div>
                        </div>
                </div>
                `
            }).join('');
            container.innerHTML = _renderProduct;
        });
    });
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

function searchProduct() {
    let keySearch = document.getElementById("searchProduct").value;
    keySearch = formatString(keySearch);
    let searchList = [];
    PRODUCTS.forEach(aProduct => {
        const temp = formatString(aProduct.productName);
        if (temp.indexOf(keySearch) != -1) searchList.push(aProduct);
    })
    if (searchList == null) container.innerHTML = "Không có sản phẩm bạn cần tìm";
    else {
        const _renderSearched = searchList.map(({ idProduct, productName, image, price }) => {
            return `
            <div class="aProduct">
                <img class="imgProduct" src=${image} id=${idProduct}/>
                    <div class="detailsProduct">
                        <h5>${productName}</h5>
                        <div class="priceProduct">${price}</div>
                        <div class="buyProduct">Mua</div>
                    </div>
            </div>
            `
        }).join('');
        container.innerHTML = _renderSearched;
    }
}

document.getElementById('searchBut').addEventListener('click', searchProduct);
document.getElementById("searchProduct").addEventListener('keydown', searchProduct);
document.getElementById("searchProduct").addEventListener('keyup', searchProduct);
