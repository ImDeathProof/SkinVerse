//Codigo y funciones para el carrito de compras

const cart = {
    products: [],
    add: function(product) {
        this.products.push(product);
    },
    remove: function(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    },
    getTotal: function() {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
    clear: function() {
        this.products = [];
    }
}