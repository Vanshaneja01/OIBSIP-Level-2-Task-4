function register() {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    // Store user data
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert("Registration successful! You can now sign in.");
    window.location.href = 'signin.html';
}