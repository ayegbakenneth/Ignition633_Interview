function validateForm() {
    let valid = true;
    
    // Clear error messages
    document.getElementById('UsernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    
    // Validate email
    let username = document.getElementById('username').value;
    if (username === "") {
        document.getElementById('usernameError').innerHTML = 'Error! Email is required.';
        valid = false;
    } 

    // Validate password
    let password = document.getElementById('password').value;
    if (password === "") {
        document.getElementById('passwordError').innerHTML = 'Error! Password is required.';
        valid = false;
    }

    // If all validations pass, form will be submitted.
    return valid;
}
