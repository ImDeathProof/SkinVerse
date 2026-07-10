export function createProductCard(product) {
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
    <button class="btn buy-btn" data-action="buy" data-id="${product.id}" data-game="${product.game}">Comprar</button>
    <button class="btn add-to-cart-btn" data-action="add" data-id="${product.id}" data-game="${product.game}"><i class="bi bi-cart-plus-fill"></i></button>
    </div>
    `;
    return card;
}
