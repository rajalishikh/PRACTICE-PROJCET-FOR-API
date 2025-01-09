var purchases = [
    { item: "Widget", price: 10 },
    { item: "Gadget", price: 25 },
    { item: "Doodad", price: 15 }
];

var totalPrice = purchases.reduce(function(accumulator, currentPurchase) {
    return accumulator + currentPurchase.price;
}, 0);

console.log("Total Price:", totalPrice);