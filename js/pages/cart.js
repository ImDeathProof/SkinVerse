// Codigo para la página del carrito

import { getCart, removeFromCart } from '../managers/cartManager.js';
import { createCartCard } from '../components/cartCard.js';
import { productManager } from '../managers/productManager.js';
import { loadAllProducts } from '../api/productsApi.js';
import { savePaymentSummary, clearPaymentSummary, updatePaymentSummary } from '../managers/paymentManager.js';
import { formatPrice } from '../utils/utils.js';

const cartItemsContainer = document.getElementById('cart-items-container');
const cartSummaryContainer = document.getElementById('cart-summary');
let cartTotal = 0;
let totalItems = 0;
const cartTotalPriceElement = document.getElementById('total-price');
const cartTotalItemsElement = document.getElementById('total-items');

async function initCartPage() {
    console.log('Cart page initialized');
    const products = await loadAllProducts();
    productManager.load(products);
    renderCartItems();

    setupCartEvents();
}

initCartPage();
// Funciones ================================
function renderCartItems() {
    const cartList = getCart();
    cartTotal = 0;
    totalItems = 0;
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        cartList.forEach(item => {
            const product = productManager.getProductById(item.id);
            if (product) {
                cartTotal += product.price * item.quantity;
                totalItems += item.quantity;
                const cartCard = createCartCard(product, item.quantity);
                cartItemsContainer.appendChild(cartCard);
            }
        });
    }
    cartTotalPriceElement.textContent = formatPrice(cartTotal);
    cartTotalItemsElement.textContent = totalItems;
}

function setupCartEvents() {
    cartItemsContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-action="remove"]');
        if (!button) return;
        const productId = Number(button.dataset.id);
        removeFromCart(productId);
        renderCartItems();
    })

    cartSummaryContainer.addEventListener('click', (e) => {
        const button = e.target.closest('a[data-action="checkout"]');
        if (!button) return;
        if (totalItems === 0) {
            e.preventDefault();
            alert('El carrito está vacío. Agrega productos antes de proceder al pago.');
        }
        updatePaymentSummary(totalItems, cartTotal);
        console.log('Payment summary saved:', {totalItems, cartTotal});
        window.location.href = '/pages/payment/payment.html';
    });
}