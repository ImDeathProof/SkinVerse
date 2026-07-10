export function createCartCard(product, quantity) {
    const card = document.createElement('div');
    card.classList.add('cart-card');
    card.innerHTML = `
    <div class="cart-card-img-container">
        <img src="${product.image}" alt="${product.name}" class="cart-card-img">
    </div>
    <div class="cart-card-info">
        <h3>${product.name}</h3>
        <p class="cart-card-price">Precio: $${product.price}</p>
        <div class="cart-card-actions">
            <label for="quantity">Cantidad:</label>
            <input type="number" data-action="quantity" data-id="${product.id}" name="quantity" min="1" value="${quantity}">
            <button class="btn btn-remove-cart" data-action="remove" data-id="${product.id}"> <i class="bi bi-trash"></i>
                Eliminar</button>
        </div>
    </div>
    `;
    return card;
}
