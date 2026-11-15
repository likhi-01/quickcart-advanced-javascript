// STEP 1: Constructor function

function Product(productName, price, category) {
  this.productName = productName;
  this.price = price;
  this.category = category;
}

// STEP 2: Add method to prototype

Product.prototype.displayProduct = function () {
  return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
};

// STEP 3: Create product objects

const product1 = new Product("Laptop", 50000, "Electronics");

const product2 = new Product("Mouse", 800, "Accessories");

const product3 = new Product("Keyboard", 1500, "Accessories");

// STEP 4: Display product details

console.log(product1.displayProduct());

console.log(product2.displayProduct());

console.log(product3.displayProduct());

// TASK 2: ES6 CLASSES

// Parent class
class ProductClass {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getProductDetails() {
    return `Product: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

// Child class 1
class ElectronicProduct extends ProductClass {
  constructor(name, price, category, warranty) {
    super(name, price, category);
    this.warranty = warranty;
  }

  warrantyDetails() {
    return `Warranty: ${this.warranty}`;
  }
}

// Child class 2
class ClothingProduct extends ProductClass {
  constructor(name, price, category, size) {
    super(name, price, category);
    this.size = size;
  }

  sizeDetails() {
    return `Clothing Size: ${this.size}`;
  }
}

// Create objects
const laptop1 = new ElectronicProduct(
  "Dell Laptop",
  60000,
  "Electronics",
  "2 Years",
);

const shirt = new ClothingProduct("T-Shirt", 1000, "Clothing", "M");

// Display details
console.log(laptop1.getProductDetails());
console.log(laptop1.warrantyDetails());

console.log(shirt.getProductDetails());
console.log(shirt.sizeDetails());

// Task 3: Arrow Function

const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log("Final Price:", calculateDiscount(1000, 10));

// Task 4: Template Literals

const customerName = "Rahul";
const orderId = 501;

const message = `Hello ${customerName}, your order ID is ${orderId}.`;

console.log(message);

// Task 5: Object Destructuring

const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
  age: 25,
};

const { name, email } = customer;

console.log("Customer Name:", name);
console.log("Customer Email:", email);

// Task 6: Rest Parameters

function calculateTotal(...prices) {
  let total = 0;

  for (let price of prices) {
    total = total + price;
  }

  return total;
}

console.log("Total Price:", calculateTotal(100, 200, 300, 400));

// Task 7: Spread Operator

const originalProduct = {
  name: "Laptop",
  price: 50000,
  category: "Electronics",
};

const updatedProduct = {
  ...originalProduct,
  price: 45000,
};

console.log("Original Product:", originalProduct);
console.log("Updated Product:", updatedProduct);
