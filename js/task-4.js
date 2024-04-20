function getShippingCost(country) {
    let price;
    switch (country) {
        case China: price = 100;
            break;
        case Chile: price = 250;
            break;
        case Australia: price = 170;
            break;
        case Jamaica: price = 120;
            break;
        default: price = 0;
    }
    if (price > 0) {
        console.log(`Shipping to ${country} will cost ${price} credits`)
    } else {
        console.log(`Sorry, there is no delivery to your country`)
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"