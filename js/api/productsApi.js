
export async function loadProductsByGame(game) {
    try {
        const gameName = "skins" + game;
        const response = await fetch(`/assets/data/${gameName}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error loading products for ${game}:`, error);
        return []; // retorna vacio para que no se rompa
    }
}

export async function loadAllProducts() {
    const games = ['CS2', 'Dota2', 'Rust'];
    let allProducts = [];
    for (const game of games) {
        const products = await loadProductsByGame(game);
        allProducts = allProducts.concat(products);
    }
    return allProducts;
}
