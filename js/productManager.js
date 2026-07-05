// Codigo que controla los productos y su visualización en la página

const productManager = {
    list: [],
    add: function(product) {
        this.list.push(product);
    },
    remove: function(productId) {
        this.list = this.list.filter(product => product.id !== productId);
    },
    loadFromJson: function(jsonData) {
        this.list = jsonData.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity ?? 1
        }));
    },
    getAll: function() {
        return this.list;
    }
}
