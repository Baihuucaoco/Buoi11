class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    signUp() {
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const user = new User(name, email, password);
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));

        alert('Sign up successful!');
        window.location.href = 'login.html';
        toggleForms();
    }

    logIn() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = this.users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            window.location.href = 'welcome.html'
        } else {
            alert('Invalid email or password!');
        }
    }
}

const auth = new Auth();

function toggleForms() {
    document.getElementById('signup-form').classList.toggle('hidden');
    document.getElementById('login-form').classList.toggle('hidden');
}
