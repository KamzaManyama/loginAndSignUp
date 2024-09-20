// Get modal, links, buttons, and form elements
const modal = document.getElementById('forgot-password-modal');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const closeBtn = document.querySelector('.close-btn');
const sendEmailBtn = document.getElementById('send-email');
const loginButton = document.getElementById('login-submit');
const registerButton = document.getElementById('register-submit');

// Show the modal when the "Forgot Password" link is clicked
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

// Close the modal when the close button or outside the modal is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Clear existing error messages
function clearErrors(formId) {
    const form = document.querySelector(formId);
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.innerText = '');
    
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.style.borderColor = '#ccc');
}

// Show error message below input field
function showError(input, message) {
    const errorField = document.getElementById(`${input.id}-error`);
    errorField.innerText = message;
    input.style.borderColor = 'red';
}

// Validate email format with regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
}

// Password validation regex
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
}

// Validate login form fields
loginButton.addEventListener('click', function(e) {
    e.preventDefault();

    clearErrors('#login-form');

    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    const usernameInput = usernameField.value;
    const passwordInput = passwordField.value;

    let valid = true;

    // Validate username
    if (!validateEmail(usernameInput)) {
        showError(usernameField, 'Please enter a valid email address.');
        valid = false;
    }

    // Validate password
    if (!validatePassword(passwordInput)) {
        showError(passwordField, 'Password must be at least 8 characters, include one uppercase letter, one number, and one special character.');
        valid = false;
    }

    // If validation passes
    if (valid) {
        alert('Login successful!');
        // Optionally submit the form here, e.g., loginForm.submit();
    }
});

// Validate registration form fields
// Validate registration form fields
registerButton.addEventListener('click', function(e) {
    e.preventDefault();

    clearErrors('#register-form');

    const firstNameField = document.getElementById('first-name');
    const lastNameField = document.getElementById('last-name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password-register');
    const confirmPasswordField = document.getElementById('confirm-password');

    const firstNameInput = firstNameField.value;
    const lastNameInput = lastNameField.value;
    const emailInput = emailField.value;
    const passwordInput = passwordField.value;
    const confirmPasswordInput = confirmPasswordField.value;

    let valid = true;

    // Validate first name
    if (firstNameInput === '') {
        showError(firstNameField, 'First name is required.');
        valid = false;
    }

    // Validate last name
    if (lastNameInput === '') {
        showError(lastNameField, 'Last name is required.');
        valid = false;
    }

    // Validate email
    if (!validateEmail(emailInput)) {
        showError(emailField, 'Please enter a valid email address.');
        valid = false;
    }

    // Validate password
    if (!validatePassword(passwordInput)) {
        showError(passwordField, 'Password must be at least 8 characters, include one uppercase letter, one number, and one special character.');
        valid = false;
    }

    // Validate confirm password
    if (passwordInput !== confirmPasswordInput) {
        showError(confirmPasswordField, 'Passwords do not match.');
        valid = false;
    }

    // If validation passes
    if (valid) {
        alert('Registration successful!');
        // Optionally submit the form here
        // document.getElementById('register-form').submit();
    }
});
