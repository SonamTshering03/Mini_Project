let generatedOTP;

function sendOTP() {
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    if (email && fullname && password && confirmPassword && phone) {
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

            // Simulate sending OTP (in real application, send it via email/SMS)
        generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        console.log(`OTP sent to ${email}: ${generatedOTP}`); // Debugging line
        alert(`OTP sent to ${email}: ${generatedOTP}`); // Simulating sending OTP
        document.querySelector('.registration-form').style.display = 'none';
        document.querySelector('.otp-section').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}

function verifyOTP() {
    const otpInput = document.getElementById('otp').value;
    if (otpInput == generatedOTP) {
        alert('OTP Verified! Registration Successful.');
        // Proceed with registration logic (e.g., store user data)
    } else {
        alert('Invalid OTP. Please try again.');
    }
}