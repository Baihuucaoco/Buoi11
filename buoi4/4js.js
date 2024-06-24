function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    var valid = true;

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    if (username.length < 6) {
        usernameError.textContent = "Username phải có ít nhất 6 ký tự";
        valid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password phải có ít nhất 8 ký tự";
        valid = false;
    } else {
        var hasLowerCase = /[a-z]/.test(password);
        var hasUpperCase = /[A-Z]/.test(password);
        var hasNumberOrSpecialChar = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(password);

        if (!hasLowerCase) {
            passwordError.textContent = "Password phải có ít nhất 1 chữ thường";
            valid = false;
        }

        if (!hasUpperCase) {
            passwordError.textContent = "Password phải có ít nhất 1 chữ hoa";
            valid = false;
        }

        if (!hasNumberOrSpecialChar) {
            passwordError.textContent = "Password phải có ít nhất 1 số hoặc ký tự đặc biệt";
            valid = false;
        }
    }

    if (valid) {
        alert("Đăng ký / Đăng nhập thành công!");
        // Xử lý tiếp theo (gửi dữ liệu lên server, ...)
    }
}
