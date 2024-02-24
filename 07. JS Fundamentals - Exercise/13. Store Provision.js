function updateStock(currentStock, delivery) {
    const stock = {};

    // Update quantities from current stock
    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = parseInt(currentStock[i + 1]);

        stock[product] = quantity;
    }

    // Update quantities from delivery
    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = parseInt(delivery[i + 1]);

        if (stock.hasOwnProperty(product)) {
            stock[product] += quantity;
        } else {
            stock[product] = quantity;
        }
    }

    // Print stock
    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}