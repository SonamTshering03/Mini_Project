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
