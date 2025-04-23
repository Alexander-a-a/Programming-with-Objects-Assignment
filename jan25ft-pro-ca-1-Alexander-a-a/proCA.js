// Answer 1: Understanding the JSON schema

// Shirt JSON String object
const jsonShirt = "{\"name\": \"Shirt\", \"price\": 20, \"size\": \"M\", \"neckLine\": \"V-neck\"}";

// Pants JSON String object
const jsonPants = "{\"name\": \"Pants\", \"price\": 30, \"size\": \"L\", \"fitType\": \"Slim Fit\"}";

// // Shoe JSON String object
const jsonShoes = "{\"name\": \"Shoe\", \"price\": 50, \"size\": 9, \"brand\": \"Nike\"}";

// Answer 2: Convert the JSON objects

// Converting the JSON string Object to JavaScript Object
const shirtObj = JSON.parse(jsonShirt);

const pantsObj = JSON.parse(jsonPants);

const shoesObj = JSON.parse(jsonShoes);
// Answer 3: Parent class
class Item{
    constructor(item) {
        this.name = item.name;
        this.price = item.price;
        this.size = item.size;
    }

    getItemDescription() {
        return `Your items name is: ${this.name}, and the price is: ${this.price}, size: ${this.size}`;
    }

}
 
// Answer 4: Child Classes
// Child 1
class Shirt extends Item{
    constructor(item) {
        super(item);
        this.neckLine = item.neckLine; // Unique property for Shirt
    }
    // Create the method for neckline
    getShirtNeckLine() {
        return `Your shirts neckline is: ${this.neckLine}`
    }

   
} 

// Child 2
class Pants extends Item{
    constructor(item) {
        super(item);
        this.fitType = item.fitType;
    }
    // Create the method for fit type
    getFitType() {
        return `Your pants fit type is: ${this.fitType}`; // Unique property for Pants
    }
} 

// Child 3
class Shoes extends Item{
    constructor(item) {
        super(item);
        this.brand = item.brand;
    }
    // Create the method for brand
    getBrand() {
        return `The Shoe brand is: ${this.brand}`; // Unique property for Shoes
    }
} 

// Answer 5: Singleton Shopping Cart
// Shopping cart class
class ShoppingCart{
    constructor() {
        if (!ShoppingCart.instance) {
            this.items = [];
            ShoppingCart.instance = this;
        }
        return ShoppingCart.instance;
    }

    // Adding Items to cart
    addItem(item) {
        this.items.push(item);
    }

    // Remove Items from cart
    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName)
    }

    // Get Item Count
    getItemCount() {
        return `Total Items: ${this.items.length}`;
    }

    // Get Total
    getTotal() {
        const total = this.items.reduce((accumulator, item) => {
            return accumulator + item.price;
        }, 0)
        return `Total cost: $${total.toFixed(2)}`;
    }
}

// TESTING 
// const cart1 = new ShoppingCart(); // TESTING 
// const cart2 = new ShoppingCart(); // TESTING 
// console.log(cart1 === cart2) // TESTING 

// Answer 6: Creating Instances:


// First Shirt Instance
const myShirt = new Shirt(shirtObj);
console.log(myShirt.getItemDescription()); // Parents description


// Second Pants Instance
const myPants = new Pants(pantsObj);
console.log(myPants.getItemDescription()); // Parents description


// Third Shoes Instance
const myShoes = new Shoes(shoesObj);
console.log(myShoes.getItemDescription()); // Parents description

// Fourth ShoppingCart Instance
const cart = new ShoppingCart();
cart.addItem(myShirt);
cart.addItem(myPants);
cart.addItem(myShoes);


// Answer 7: Adding objects to the Cart/Displaying information in the console:
 

// Calling each of the childrens specific description
console.log(myShirt.getShirtNeckLine());
console.log(myPants.getFitType());
console.log(myShoes.getBrand());

// Calling ShoppingCart methods
console.log("Item count in cart:", cart.getItemCount());
console.log("Total price before removal:", cart.getTotal());

// Removing a item
cart.removeItem("Shoe");

// Logging after removal
console.log("Total price after removal:", cart.getTotal())