// Function to handle "Send OTP" button
function sendOTP() {
    const email = document.getElementById('email').value; // Get email input value
    if (email) {
        alert(`OTP sent to ${email}`); // Show alert with entered email

        // Hide email section and show OTP section
        document.getElementById('emailSection').classList.add('hidden');
        document.getElementById('otpSection').classList.remove('hidden');
    } else {
        alert('Please enter a valid email.'); // If email is empty
    }
}

// Function to handle "Verify OTP" button
function verifyOTP() {
    const otp = document.getElementById('otp').value; // Get OTP input value
    if (otp) {
        alert('OTP verified successfully!'); // Success message

        // 👉 Here you can add further actions:
        // Example: redirect to password reset page
        // window.location.href = "reset-password.html";

    } else {
        alert('Please enter the OTP.'); // If OTP is empty
    }
}
