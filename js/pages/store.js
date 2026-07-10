//Codigo para el manejo de la tienda




// importa la gestion de productos, manager de carrito y funciones para productos
import { loadAllProducts, loadProductsByGame } from '../api/productsApi.js';
import { productManager } from '../managers/productManager.js';
import { addToCart } from '../managers/cartManager.js';
import { createProductCard } from '../components/storeCard.js';

// Contenedor de la tienda
const productsContainer = document.getElementById('store-container');

// Inicializa la tienda cargando todos los productos y renderizándolos
async function initStore() {
    const products = await loadAllProducts();
    productManager.load(products);
    renderProducts(productManager.getAll());

    setupGameFilter();
    setupCartEvents();
}
initStore();


//Funciones ===================================================

// Renderizado
function renderProducts(products) {
    if (productsContainer) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    }
}
// Filtrado de productos por juego
const gameLogo = document.querySelector('.img-logo-container img');
const filterLinks = document.querySelectorAll('.nav-link[data-action^="filter-"]');

function setupGameFilter() {
    filterLinks.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            const game = link.getAttribute('data-action').replace('filter-', '');
            changeGameLogo(game);
            const filteredProducts = productManager.filterByGame(game);

            renderProducts(filteredProducts);
        });
    });
}

function changeGameLogo(game) {
    if (game === 'all') {
        gameLogo.src = '/assets/img/main/logos/skinverse-logo.png';
        return;
    }
    const logoSrc = `/assets/img/main/logos/${game.toLowerCase()}_logo.svg`;
    gameLogo.src = logoSrc;
}

function setupCartEvents() {
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
