
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const fullName = document.querySelector("input[placeholder='Enter your name']");
        const username = document.querySelector("input[placeholder='Enter your username']");
        const email = document.querySelector("input[placeholder='Enter your email']");
        const phone = document.querySelector("input[placeholder='Enter your number']");
        const password = document.querySelector("input[placeholder='Enter your password']");
        const confirmPassword = document.querySelector("input[placeholder='Confirm your password']");
        const genderRadio = document.querySelector("input[type='radio']:checked");

        let isValid = true;
        let errors = [];

        // Validation
        if (fullName.value.trim() === "") {
            errors.push("Full Name is required.");
            isValid = false;
        }

        if (username.value.trim() === "") {
            errors.push("Username is required.");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            errors.push("Invalid email format.");
            isValid = false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            errors.push("Phone number must be 10 digits.");
            isValid = false;
        }

        if (password.value.length < 6) {
            errors.push("Password must be at least 6 characters.");
            isValid = false;
        }

        if (password.value !== confirmPassword.value) {
            errors.push("Passwords do not match.");
            isValid = false;
        }

        if (!genderRadio) {
            errors.push("Gender is required.");
            isValid = false;
        }

        if (!isValid) {
            alert(errors.join("\n"));
            return;
        }

        // Create JSON object
        const userData = {
            fullName: fullName.value.trim(),
            username: username.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            password: password.value, // Don't store plaintext passwords in real apps
            gender: genderRadio ? genderRadio.nextElementSibling.textContent.trim() : ""
        };

        // Save to localStorage (optional, for demonstration)
        localStorage.setItem("registeredUser", JSON.stringify(userData));

        alert("Registration successful!");

        // Optional redirect
        setTimeout(() => {
            window.location.href = 'nutrition (1).html'; // Redirect to next page
        }, 1000);
    });
});
