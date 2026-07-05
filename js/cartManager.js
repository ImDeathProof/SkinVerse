//Codigo para manejar el carrito globalmente

// Obtener el carrito del localStorage o inicializarlo como un array vacío

const cartContent = JSON.parse(localStorage.getItem('cart')) || [];
const cartCountElement = document.getElementById('cart-count');
// Actualizar el contador del carrito al cargar la página
function updateCartCount() {
    cartCountElement.textContent = cartContent.length;
}
// Llamar a la función para actualizar el contador al cargar la página
updateCartCount();

// Función para agregar un producto al carrito global

