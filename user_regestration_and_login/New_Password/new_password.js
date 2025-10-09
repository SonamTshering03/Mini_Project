// Function to toggle password visibility
function togglePassword(id, el) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    el.textContent = ""; // Change icon
  } else {
    input.type = "password";
    el.textContent = ""; // Change icon back
  }
}

// Example action for Update Password button
// document.querySelector('.update-btn').addEventListener('click', () => {
//   const newPass = document.getElementById('newPassword').value;
//   const confirmPass = document.getElementById('confirmPassword').value;

//   if (newPass === "" || confirmPass === "") {
//     alert("Please fill out both fields.");
//   } else if (newPass !== confirmPass) {
//     alert("Passwords do not match!");
//   } else {
//     alert("Password updated successfully!");
//   }
// });

// Example action for Update Password button
document.querySelector('.update-btn').addEventListener('click', () => {
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;

  if (newPass === "" || confirmPass === "") {
    alert("Please fill out both fields.");
  } else if (newPass !== confirmPass) {
    alert("Passwords do not match!");
  } else {
    // Password updated successfully, redirect to another page
    window.location.href = "successful.html"; // replace "success.html" with your desired URL
  }
});