// const buttonClick = document.getElementById('btn-click');
// buttonClick.addEventListener('click', (e) => {
//     e.preventDefault();

//     document.getElementById('hasilCLick').innerText++;
// })

// const buttonReset = document.getElementById('btn-reset');
// buttonReset.addEventListener('click', (e) => {
//     e.preventDefault();

//     document.getElementById('hasilCLick').innerText = 0;
//     alert('Hasil klik telah direset!');
// })

const buttonLogout = document.getElementById('btn-logout');
buttonLogout.addEventListener('click', (e) => {

    e.preventDefault();

    localStorage.removeItem('usernameSignedIn');
    alert('Berhasil Logout!');
    window.location.href = 'index.html';
});

// Logic Redirect ke Page Tebak Angka
// const buttonTebak = document.getElementById('tebakAngka');
// buttonTebak.addEventListener('click', (e) => {
//     e.preventDefault();

//     window.location.href = 'guessNumber.html';
// })


