// Part B: Shopping Cart

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

console.log(cart);

// TASK 1: MAP METHOD

const productNames = cart.map((product) => {
    return product.name;
});

console.log("Product Names:", productNames);

// TASK 2: FILTER METHOD

const expensiveProducts = cart.filter((product) => {
    return product.price > 1000;
});

console.log("Expensive Products:", expensiveProducts);

// TASK 3: REDUCE METHOD

const totalAmount = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("Total Cart Amount:", totalAmount);

const accessoriesTotal = cart
    .filter((product) => product.category === "Accessories")
    .reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

console.log("Accessories Total:", accessoriesTotal);