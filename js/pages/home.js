// Codigo js para la pagina de inicio
import { loadAllProducts, loadProductsByGame } from '../api/productsApi.js';
import { productManager } from '../managers/productManager.js';
import { createProductCard } from '../components/homeCard.js';
import { addToCart } from '../managers/cartManager.js';

// Generar tarjetas de productos en la página de inicio
const cs2ProductsContainer = document.querySelector('.cs2-products');
const rustProductsContainer = document.querySelector('.rust-products');
const dota2ProductsContainer = document.querySelector('.dota2-products');

async function initHomePage() {
    console.log('Home page initialized');
    const data = await loadAllProducts();
    productManager.load(data);
    renderProductsByGame('CS2', cs2ProductsContainer);
    renderProductsByGame('Rust', rustProductsContainer);
    renderProductsByGame('Dota2', dota2ProductsContainer);
    setupCartEvents();
}

initHomePage();

// Funciones ================================

function renderProductsByGame(game, container) {
    const products = productManager.filterByGame(game);
    container.innerHTML = '';
    products.slice(0, 3).forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function setupCartEvents() {
    const productsContainer = document.querySelector('.products-container');
    // Boton agregar al carrito
    productsContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-action="add"]');
        if (!button) return;

        console.log('Botón de añadir al carrito clickeado');
        const productId = Number(button.dataset.id);

        const product = productManager.getProductById(productId);
        if (product) {
            addToCart(product);
        }
    });
}
