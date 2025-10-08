const cameraIcon = document.getElementById("cameraIcon");
const fileInput = document.getElementById("fileInput");
const profileCircle = document.getElementById("profileCircle");

// When clicking camera icon, trigger file input
cameraIcon.addEventListener("click", () => {
    fileInput.click();
});

// When a file is selected, display it inside the circle
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileCircle.style.backgroundImage = `url(${e.target.result})`;
            profileCircle.style.backgroundSize = "cover";
            profileCircle.style.backgroundPosition = "center";
            cameraIcon.style.display = "none"; // Hide camera icon after upload
        };
        reader.readAsDataURL(file);
    }
});
