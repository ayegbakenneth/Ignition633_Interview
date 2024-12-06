function validateForm() {
    let valid = true;

    //  Retrieving of form field elements
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const rememberMeField = document.getElementById('rememberMe');

    // Ensuring that error message elements are retrieved
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.innerHTML = '';
    passwordError.innerHTML = '';

    // Trim input values to prevent whitespace-only inputs
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    // Validate username (required, non-empty)
    if (username === '') {
        usernameError.innerHTML = 'Error! Username is required.';
        valid = false;
    }

    // Validate password (required, non-empty)
    if (password === '') {
        passwordError.innerHTML = 'Error! Password is required.';
        valid = false;
    }

    // Optional: Check Remember Me checkbox (if required for specific logic)
    if (rememberMeField.checked) {
        console.log("Remember Me is checked.");
    } else {
        console.log("Remember Me is not checked.");
    }

    // If validation fails, prevent form submission
    return valid;
}
