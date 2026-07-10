// Codigo que controla los productos y su visualización en la página

export const productManager = {
    list: [],
    add: function (product) {
        this.list.push(product);
    },
    remove: function (productId) {
        this.list = this.list.filter(product => product.id !== productId);
    },
    load: function (jsonData) {
        const newProductList = jsonData.map(item => ({
            id: item.id,
            name: item.name,
            type: item.type,
            price: item.price,
            image: item.image,
            game: item.game
        }));
        this.list.push(...newProductList);
        return newProductList;
    },
    getAll: function () {
        return this.list;
    },
    getProductById: function (productId) {
        return this.list.find(product => Number(product.id) === Number(productId));
    },
    filterByGame: function (game) {
        if (game === 'all') {
            return this.list;
        }
        return this.list.filter(product => product.game.toLowerCase() === game.toLowerCase());
    },
    searchProducts: function (searchTerm) {
        if (!searchTerm) return this.list;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return this.list.filter(product =>
            product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.type.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.game.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }


}