// Codigo js para la pagina de inicio

// Generar tarjetas de productos en la página de inicio
const cs2ProductsContainer = document.querySelector('.cs2-products');
const rustProductsContainer = document.querySelector('.rust-products');
const dota2ProductsContainer = document.querySelector('.dota2-products');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('popular-product-card');
    card.innerHTML = `
    <div class="card-header">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    </div>
    <div class="card-footer">
        <input type="number" id="${product.id}" hidden>
        <button class="card-btn-secondary js-cart-btn"><i class="bi bi-cart-plus"></i></button>
        <button class="card-btn-primary js-buy-btn">Comprar</button>
    </div>
    `;
    return card;
}

function appendProductCard(container, product) {
    const card = createProductCard(product);
    container.appendChild(card);
}

// Implementacion de la funcion para agregar productos a los contenedores de cada juego
appendProductCard(cs2ProductsContainer, {
    id: 1,
    name: 'Skin de ejemplo',
    price: '$9.99',
    image: '/assets/img/skins/cs2/AK-47-The Oligarch.webp'
});
appendProductCard(rustProductsContainer, {
    id: 2,
    name: 'Skin de ejemplo',
    price: '$9.99',
    image: '/assets/img/skins/rust/Heat-Seeker-AR.webp'
});
appendProductCard(dota2ProductsContainer, {
    id: 3,
    name: 'Skin de ejemplo',
    price: '$9.99',
    image: '/assets/img/skins/dota2/Capa-del-Artificio-Oscuro.webp'
});
// Fin de la implementacion de la funcion para agregar productos a los contenedores de cada juego

