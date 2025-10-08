// Hamburger Sidebar
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}

// Get the login button
const loginButton = document.getElementById("loginButton");

// Handle login button click
loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your login logic here
    if (username && password) {
        // Redirect to homepage.html
        window.location.href = "login1.html"; // Change to the correct path if necessary
    } else {
        alert("Please enter both username and password.");
    }
});

function loginWithGoogle() {
    // Simulate successful Google login
    // Redirect to a specific page (change link as needed)
    window.location.href ="#"; // <-- Replace with your actual destination
}

// Example: attach the function to a button
// Assuming your Google login button has id="googleLoginButton"
document.getElementById("googleLoginButton").addEventListener("click", loginWithGoogle);

// Get elements
const loginLink = document.getElementById("log_in");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeModal");

// Open modal
loginLink.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


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
