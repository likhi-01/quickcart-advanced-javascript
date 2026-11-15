const cart = [
  {
    id: 101,
    name: "Laptop",
    price: 50000,
    quantity: 1,
    category: "Electronics",
  },
  {
    id: 102,
    name: "Mouse",
    price: 800,
    quantity: 2,
    category: "Accessories",
  },
  {
    id: 103,
    name: "Keyboard",
    price: 1500,
    quantity: 1,
    category: "Accessories",
  },
  {
    id: 104,
    name: "Monitor",
    price: 12000,
    quantity: 1,
    category: "Electronics",
  },
  {
    id: 105,
    name: "Headphones",
    price: 2500,
    quantity: 2,
    category: "Accessories",
  },
];
const selectedProduct = cart.find((product) => {
  return product.id === 102;
});

console.log("Selected Product:", selectedProduct);
// TASK 2: FINDINDEX METHOD

const productIndex = cart.findIndex((product) => {
  return product.id === 102;
});

console.log("Product Index:", productIndex);
// TASK 3: SOME METHOD

const hasExpensiveProduct = cart.some((product) => {
  return product.price > 40000;
});

console.log("Has Expensive Product:", hasExpensiveProduct);

// TASK 4: EVERY METHOD

const allProductsAbove500 = cart.every((product) => {
  return product.price > 1000;
});

console.log("All Products Above 500:", allProductsAbove500);

const sortedProducts = [...cart].sort((a, b) => {
  return b.price - a.price;
});

console.log("Highest to Lowest:", sortedProducts);

cart.forEach((product) => {
  console.log(product.name);
});

cart.forEach((product) => {
  const total = product.price * product.quantity;

  console.log(`${product.name} Total: ₹${total}`);
});
const productNames = cart.map((product) => product.name);

console.log("Has Laptop:", productNames.includes("Laptop"));

console.log("Has Mobile:", productNames.includes("Mobile"));

const categories = cart.flatMap((product) => {
    return [product.category];
});

console.log("Product Categories:", categories);
// 1. Filter Accessories products
const accessories = cart.filter((product) => {
    return product.category === "Accessories";
});
console.log("Accessories Products:", accessories);

// 2. Calculate total cart value
const totalAmount = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
console.log("Total Cart Value:", totalAmount);

// 3. Check whether a product exists
const hasMouse = cart.some((product) => {
    return product.name === "Mouse";
});
console.log("Mouse Available:", hasMouse);

// 4. Get product names
const names = cart.map((product) => product.name);
console.log("Product Names:", names);