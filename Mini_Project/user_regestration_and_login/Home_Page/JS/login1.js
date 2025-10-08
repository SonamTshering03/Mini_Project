// Hamburger Sidebar
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}

const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

profileIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

// Menu
let cart = [];
let total = 0;

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        alert(`The item "${name}" is already selected.`);
        return;
    }

    cart.push({ name, price, image, quantity: 1 }); // Add new item
    total += price;
    updateCart();
    document.getElementById('cartContainer').style.display = 'block'; // Show cart
    document.getElementById('productContainer').style.gridTemplateColumns = 'repeat(3, 1fr)'; // Change to three columns
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    ${item.name} - Nu.${item.price.toFixed(2)} 
                    <div class="quantity">
                        <button onclick="updateQuantity('${item.name}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', 1)">+</button>
                    </div>
                `;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: Nu.${total.toFixed(2)}`;
}

function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            total -= item.price; // Remove item if quantity is 0
            cart = cart.filter(i => i.name !== name);
        } else {
            total += item.price * change;
        }
        updateCart();
    }
}

function order() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order success!");
    }
}

// filter
function filterProducts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filterValue = document.getElementById('filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category');

        const matchesSearch = productName.includes(searchValue);
        const matchesFilter = filterValue === '' || productCategory === filterValue;

        if (matchesSearch && matchesFilter) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}