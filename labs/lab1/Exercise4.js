const applyCoupon = category => discount => item => {
    if (item.category == category)
        item.price = item.price - (item.price * discount);
        return item;
}

const item = {
    "name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 2.0
}
console.log(applyCoupon("food")(0.1)(item).price);