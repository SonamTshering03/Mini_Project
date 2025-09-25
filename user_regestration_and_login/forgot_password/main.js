function goBack() {
    // Function to go back to the previous page
    window.history.back();
}

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    // Simulate sending verification code
    if (email) {
        messageDiv.textContent = 'Verification code sent to ' + email;
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
    }
});