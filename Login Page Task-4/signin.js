function login() {
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || email !== user.email || password !== user.password) {
        alert("Invalid email or password.");
        return;
    }

    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', user.name);
    window.location.href = 'secured.html';
}