makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalPrice = quantity * pricePerDroid;
    if (totalPrice < customerCredits) {
        console.log("Insufficient funds!");
    } else {
        console.log("You ordered ${quantity} droids worth ${totalPrice} credits!");
    };
}
