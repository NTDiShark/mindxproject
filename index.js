const container = document.getElementById('container');

const TYPES = [
    {
        id: 'quan',
        name: 'Quần'
    },
    {
        id: 'ao',
        name: 'Áo'
    },
]

const renderFilterMenu = (menu) => {
    const menuItems = menu.map(item => {
        return `
            <span class="box" id="${item.id}"}>${item.name}</span>
        `;
    }).join('');

    const _menu = document.getElementById('menu-wrapper');
    _menu.innerHTML = menuItems;

    menu.forEach(item => {
        document.getElementById(item.id).addEventListener('click', () => {
            container.innerHTML = `Đây là những sản phẩm thuộc loại ${item.name}`;
        });
    });
}

renderFilterMenu(TYPES);