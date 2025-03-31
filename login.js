document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const setupAccountBtn = document.getElementById("setupAccountBtn");
    const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

    const setupAccountModal = document.getElementById("setupAccountModal");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");

    const createAccountBtn = document.getElementById("createAccountBtn");
    const resetPasswordBtn = document.getElementById("resetPasswordBtn");

    const errorMessage = document.getElementById("error-message");

    // Open setup account modal
    setupAccountBtn.addEventListener("click", function () {
        setupAccountModal.style.display = "flex";
    });

    // Open forgot password modal
    forgotPasswordBtn.addEventListener("click", function () {
        forgotPasswordModal.style.display = "flex";
    });

    // Close modals when clicking on close button
    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", function () {
            setupAccountModal.style.display = "none";
            forgotPasswordModal.style.display = "none";
        });
    });

    // Handle account creation
    createAccountBtn.addEventListener("click", function () {
        const newUsername = document.getElementById("newUsername").value.trim();
        const newPassword = document.getElementById("newPassword").value.trim();

        // Validate username and password
        if (newUsername.length === 0 || newPassword.length < 6) {
            alert("Username cannot be empty and password must be at least 6 characters.");
            return;
        }

        // Retrieve existing users
        let users = JSON.parse(localStorage.getItem("users")) || {};

        // Check if username already exists
        if (users[newUsername]) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        // Store new user
        users[newUsername] = newPassword;
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        setupAccountModal.style.display = "none";
    });

    // Handle password reset
    resetPasswordBtn.addEventListener("click", function () {
        const resetUsername = document.getElementById("resetUsername").value.trim();
        const resetPassword = document.getElementById("resetPassword").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (!users[resetUsername]) {
            alert("Username does not exist.");
            return;
        }

        if (resetPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        users[resetUsername] = resetPassword;
        localStorage.setItem("users", JSON.stringify(users));

        alert("Password reset successfully!");
        forgotPasswordModal.style.display = "none";
    });

    // Handle login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[username] && users[username] === password) {
            errorMessage.innerText = "";
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to the dashboard or main page
        } else {
            errorMessage.innerText = "Invalid username or password.";
        }
    });
});
