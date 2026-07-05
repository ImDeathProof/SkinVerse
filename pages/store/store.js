//Codigo para el manejo de la tienda

//Generación de tarjetas

const productsContainer = document.getElementById('store-container');


function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('store-card');
    card.innerHTML = `
    <div class="card-header">
    <img src="${product.image}" alt="${product.name}"
    class="card-img" loading="lazy">
    </div>
    <div class="card-body">
    <h3>${product.name}</h3>
    <span class="price">$${product.price.toFixed(2)}</span>
    </div>
    <div class="card-footer">
    <button class="btn buy-btn" data-action="buy" data-id="${product.id}">Comprar</button>
    <button class="btn add-to-cart-btn" data-action="add" data-id="${product.id}"><i class="bi bi-cart-plus-fill"></i></button>
    </div>
    `;
    return card;
}

if (productsContainer) {
    productsContainer.appendChild(createProductCard({
        id: 1,
        name: 'Skin de ejemplo',
        price: 9.99,
        image: '/assets/img/skins/cs2/AK-47-The Oligarch.webp'
    }));
}

// ACA FALTA HACER QUE LEA EL JSON Y CREE TODAS LAS TARJETAS DINAMICAMENTE. 