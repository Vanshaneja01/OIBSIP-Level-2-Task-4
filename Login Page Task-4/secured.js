if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'signin.html';
} else {
    document.getElementById('userName').innerText = sessionStorage.getItem('username');
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'signin.html';
}