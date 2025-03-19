// script.js

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartCounter = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCounter.textContent = cartCount;
            showNotification("Item added to cart!");
        });
    });
});

function showAlert() {
    alert("Welcome to Fashion Hub! Start Shopping Now.");
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Scroll Animation for Products
const productGrid = document.querySelector(".product-grid");
if (productGrid) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            productGrid.classList.add("fade-in");
        }
    });
}

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.classList.add("dark-mode-btn");
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartCounter = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCounter.textContent = cartCount;
            showNotification("Item added to cart!");
        });
    });
});

function showAlert() {
    alert("Welcome to Fashion Hub! Start Shopping Now.");
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}


