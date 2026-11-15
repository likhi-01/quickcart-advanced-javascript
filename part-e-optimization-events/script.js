

// =====================================
// 1. DEBOUNCING - PRODUCT SEARCH
// =====================================

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const productList = document.getElementById("productList");

function searchProducts(event) {
    const searchValue = event.target.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    let visibleCount = 0;

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    searchResult.textContent = visibleCount + " product(s) found";
}

searchInput.addEventListener(
    "input",
    debounce(searchProducts, 500)
);


// =====================================
// 2. THROTTLING - SCROLL EVENT
// =====================================

function throttle(callback, delay) {
    let lastCall = 0;

    return function () {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            callback();
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Scroll event executed");
}, 1000));


// =====================================
// 3. MEMOIZATION - DISCOUNT CALCULATION
// =====================================

function calculateDiscount(price, percentage) {
    console.log("Calculating discount...");

    return price - (price * percentage / 100);
}

function memoize(callback) {
    const cache = {};

    return function (price, percentage) {
        const key = `${price}-${percentage}`;

        if (cache[key] !== undefined) {
            console.log("Result from cache");
            return cache[key];
        }

        const result = callback(price, percentage);
        cache[key] = result;

        return result;
    };
}

const memoizedDiscount = memoize(calculateDiscount);


// =====================================
// 4. EVENT BUBBLING
// =====================================

productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        return;
    }

    if (event.target.closest(".product-card")) {
        console.log("Product card clicked!");
    }

    console.log("Product list received the click!");
});


// =====================================
// 5. EVENT DELEGATION - REMOVE PRODUCT
// =====================================

productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        const product = event.target.closest(".product-card");

        product.remove();

        updateCart();

        console.log("Product removed successfully!");
    }
});


// =====================================
// 6. UPDATE SHOPPING CART
// =====================================

function updateCart() {
    const products = document.querySelectorAll(".product-card");

    let totalAmount = 0;
    let totalProducts = 0;

    products.forEach(product => {
        const priceText = product.querySelector("p").textContent;
        const price = Number(priceText.replace(/[^\d.]/g, ""));

        totalAmount += price;
        totalProducts++;
    });

    document.getElementById("totalProducts").textContent = totalProducts;
    document.getElementById("totalAmount").textContent = totalAmount;
}

updateCart();


// =====================================
// 7. CHECKOUT
// =====================================

const checkoutButton = document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", () => {
    const totalAmount = Number(
        document.getElementById("totalAmount").textContent
    );

    const checkoutMessage = document.getElementById("checkoutMessage");

    if (totalAmount === 0) {
        checkoutMessage.textContent = "Your cart is empty!";
        return;
    }

    const finalAmount = memoizedDiscount(totalAmount, 10);

    checkoutMessage.textContent =
        `Order placed successfully! Your total after 10% discount is ₹${finalAmount}.`;

    console.log("Checkout completed!");
});
