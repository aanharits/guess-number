const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const usernameLoginInput = document.getElementById('usernameLogin').value;
    const savedUsername = localStorage.getItem('usernameSignedIn');

    if (usernameLoginInput === savedUsername) {
        localStorage.setItem('LoggedInUser', usernameLoginInput);
        alert(`Berhasil Login, ${usernameLoginInput}!`);
        window.location.href = 'guessNumber.html';
    } else {
        alert('Username tidak ditemukan, silakan sign in terlebih dahulu.');
    }
})