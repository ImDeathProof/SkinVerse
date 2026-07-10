// Codigo para gestionar la pagina de pago

import { getCart, clearCart } from '../managers/cartManager.js';
import { getPaymentSummary } from '../managers/paymentManager.js';
import { formatPrice } from '../utils/utils.js';
const totalItemsElement = document.getElementById('payment-total-items');
const totalPriceElement = document.getElementById('payment-total-price');
const paymentForm = document.querySelector('.payment-form');

function initPaymentPage() {
    console.log('Payment page initialized');
    const paymentSummary = getPaymentSummary();
    displayPaymentSummary(paymentSummary);
    setupPaymentForm();
}

initPaymentPage();

// Funciones ================================

function setupPaymentForm() {
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const dni = document.getElementById('dni').value;
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const cvv = document.getElementById('cvv').value;
    })
}

function displayPaymentSummary(summary) {
    totalItemsElement.textContent = summary.totalItems;
    totalPriceElement.textContent = formatPrice(summary.totalPrice);
}