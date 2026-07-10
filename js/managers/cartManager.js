const CART_KEY = 'skinverse_cart';

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ id: product.id, quantity: 1, game: product.game });
    }
    saveCart(cart);
    updateCartCount();
}

export function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    updateCartCount();
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
}

export function updateCartItemQuantity(productId, quantity) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity = quantity;
        saveCart(cart);
        updateCartCount();
    }
}

export function updateCartCount() {
    const cart = getCart();
    const cartCountElement = document.querySelector('[data-cart-count]');
    if (cartCountElement) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalCount;
    }
}

