window.onload = function() {
    const form = document.getElementById('registrationForm');

    // Regex for validation
    const onlyLettersRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    const mobileRegex = /^\d{10}$/;

    form.addEventListener('submit', function(event) {
        const firstName = document.getElementById('fName').value;
        const lastName = document.getElementById('lName').value;
        const birthDate = document.getElementById('birthDate').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const mobile = document.getElementById('mobile').value;

        // Check if names contain only letters
        if (!onlyLettersRegex.test(firstName) || !onlyLettersRegex.test(lastName)) {
            alert("First and last names can only contain letters.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if birth date is a valid past date
        const birthDateObj = new Date(birthDate);
        const today = new Date();
        if (birthDateObj >= today || !birthDate) {
            alert("Please enter a valid birth date.");
            event.preventDefault();
            return;
        }

        // Validate email structure
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Check if emails match
        if (email !== confirmEmail) {
            alert("Emails do not match.");
            event.preventDefault();
            return;
        }

        // Validate password:
        // a. starts with a capital letter
        // b. has at least two numbers
        // c. has at least one special character
        // d. length is between 8 and 32
        if (!passwordRegex.test(password)) {
            alert("Password must start with a capital letter, contain at least two numbers, one special character, and be between 8 and 32 characters long.");
            event.preventDefault();
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            event.preventDefault();
            return;
        }

        // Validate mobile number (must be exactly 10 digits)
        if (!mobileRegex.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            event.preventDefault();
        }
    });
}
