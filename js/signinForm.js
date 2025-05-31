const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const usernameByInput = document.getElementById('username').value;
    console.log(usernameByInput);

    if (usernameByInput) {
        localStorage.setItem('usernameSignedIn', usernameByInput);
        alert(`Berhasil Sign In, ${usernameByInput}!`);
        window.location.href = 'login.html';
    } else {
        alert('Username tidak ditemukan');
    }
});