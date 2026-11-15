// =====================================
// PART F: QUICKCART INTEGRATION
// STEP 1: CUSTOMER AND PRODUCTS
// =====================================

// Customer details
const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
};

// Product class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Create products
const products = [
  new Product(1, "Laptop", 50000, 1),
  new Product(2, "Mouse", 1000, 2),
  new Product(3, "Monitor", 15000, 1),
  new Product(4, "Keyboard", 2000, 1),
];

// Display customer details
console.log("Customer Details:");
console.log("Name:", customer.name);
console.log("Email:", customer.email);

// Display products
console.log("Product Details:");

products.forEach((product) => {
  console.log(
    product.name,
    "Price:",
    product.price,
    "Quantity:",
    product.quantity,
  );
});

console.log("\nProduct-wise Total:");

const productTotals = products.map((product) => {
  return {
    name: product.name,
    total: product.price * product.quantity,
  };
});

console.log(productTotals);

console.log("\nExpensive Products:");

const expensiveProducts = products.filter((product) => {
  return product.price > 5000;
});

console.log(expensiveProducts);

console.log("\nShopping Cart Total:");

const totalPrice = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log("Total Price: ₹" + totalPrice);

console.log("\nUnique Product IDs:");

const uniqueProductIds = new Set(products.map((product) => product.id));

console.log(uniqueProductIds);

console.log("Total Unique Products:", uniqueProductIds.size);

console.log("\nInventory Management:");

const inventory = new Map();

products.forEach((product) => {
  inventory.set(product.id, product.quantity);
});

console.log(inventory);

// Display inventory one by one
inventory.forEach((quantity, productId) => {
  console.log("Product ID:", productId, "Available Quantity:", quantity);
});

console.log("\nOrder Configuration:");

const orderConfig = Object.freeze({
  tax: 500,
  deliveryCharge: 100,
  currency: "INR",
});

console.log(orderConfig);

// Check whether the object is frozen
console.log("Is Object Frozen?", Object.isFrozen(orderConfig));

// =====================================
// STEP 8: JSON SERIALIZATION
// =====================================

console.log("\nOrder JSON:");

const order = {
  customer: customer,
  products: products,
  totalPrice: totalPrice,
  configuration: orderConfig,
};

const jsonOrder = JSON.stringify(order, null, 2);

console.log(jsonOrder);

// =====================================
// STEP 9: ASYNC/AWAIT ORDER PROCESSING
// =====================================

function confirmOrder() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Order Confirmed Successfully!");
        }, 2000);

    });
}

async function processOrder() {

    try {

        console.log("\nProcessing your order...");

        const confirmation = await confirmOrder();

        console.log(confirmation);

        console.log(
            `Dear ${customer.name}, your order total is ₹${totalPrice}.`
        );

    } catch (error) {

        console.log("Order Failed:", error);

    }
}

processOrder();
