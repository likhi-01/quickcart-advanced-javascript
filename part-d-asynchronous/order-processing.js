
console.log("Order Started");

setTimeout(() => {
    console.log("Payment Processing");
}, 0);

Promise.resolve().then(() => {
    console.log("Payment Successful");
});

console.log("Order Completed");


// Task 2: Callbacks

function validateOrder(callback) {
    setTimeout(() => {
        console.log("Order Validated");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment Completed");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation Sent");
        callback();
    }, 1000);
}

// Execute the functions one after another
validateOrder(() => {
    processPayment(() => {
        sendConfirmation(() => {
            console.log("Order Process Completed!");
        });
    });
});


// Task 3: Promises

function validateOrderPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Validated");
            resolve();
        }, 1000);
    });
}

function processPaymentPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment Completed");
            resolve();
        }, 1000);
    });
}

function sendConfirmationPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Confirmation Sent");
            resolve();
        }, 1000);
    });
}

// Execute using Promise chaining
validateOrderPromise()
    .then(() => {
        return processPaymentPromise();
    })
    .then(() => {
        return sendConfirmationPromise();
    })
    .then(() => {
        console.log("Order Process Completed Successfully!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// Task 4: Async/Await

function validateOrderAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order Validated");
            resolve();
        }, 1000);
    });
}

function processPaymentAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment Completed");
            resolve();
        }, 1000);
    });
}

function sendConfirmationAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Confirmation Sent");
            resolve();
        }, 1000);
    });
}

async function placeOrder() {
    try {
        await validateOrderAsync();
        await processPaymentAsync();
        await sendConfirmationAsync();

        console.log("Order Confirmed Successfully!");
    } catch (error) {
        console.log("Order Failed:", error);
    }
}

placeOrder();


 // Task 5: Promise Combinators

function productsAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 1000);
    });
}

function paymentAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Payment Service Failed");
        }, 1500);
    });
}

function deliveryAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delivery Loaded");
        }, 2000);
    });
}
