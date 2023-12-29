class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20};
    static SIZE_LARGE = { price: 100, calories: 40};
    static STUFFING_CHEESE = { price: 10, calories: 20};
    static STUFFING_SALAD = { price: 20, calories: 5};
    static STUFFING_POTATO = { price: 15, calories: 10};
    static TOPPING_SAUCE = { price: 15, calories: 0};
    static TOPPING_MAYO = { price: 20, calories: 5};

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => price += topping.price);
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping => calories += topping.calories);
        return calories;
    }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories:" + hamburger.calculateCalories());
console.log("Price:" + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());