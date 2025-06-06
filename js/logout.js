const buttonLogout = document.getElementById('btn-logout');
buttonLogout.addEventListener('click', (e) => {

    e.preventDefault();

    localStorage.removeItem('usernameSignedIn');
    alert('Berhasil Logout!');
    window.location.href = 'index.html';
});



