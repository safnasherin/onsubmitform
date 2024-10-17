function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("mobileError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("countryError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;
    const password = document.getElementById("password").value;

    // Validate name
    if (name.length < 2) {
        document.getElementById("nameError").innerText = "Name must be at least 2 characters long.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerText = "Please enter a valid mobile number (10 digits).";
        isValid = false;
    }

    // Validate date of birth
    if (!dob) {
        document.getElementById("dobError").innerText = "Please select your date of birth.";
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select your gender.";
        isValid = false;
    }

    // Validate country
    if (!country) {
        document.getElementById("countryError").innerText = "Please select your country.";
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

    return isValid;
}
