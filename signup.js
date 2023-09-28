document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function () {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
        } else {
           
            errorMessage.textContent = "Registration successful!";
        }
    });
});
