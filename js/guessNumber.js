document.addEventListener('DOMContentLoaded', () => {
    const tebakAngkaForm = document.getElementById('tebakForm');
    const resultDisplay = document.getElementById('resultDisplay');
    const sisaTebakanDisplay = document.getElementById('sisaTebakan');
    const buttonTebak = document.getElementById('buttonTebak');
    const resetButton = document.getElementById('resetButton');

    let sisaTebakan = 3;

    const disableGame = () => {
        tebakInput.disabled = true;
        buttonTebak.disabled = true;
    };
    
    const resetGame = () => {
        tebakInput.value = '';
        resultDisplay.innerText = '';
        resultDisplay.style.color = 'black';
        sisaTebakan = 3;
        sisaTebakanDisplay.innerText = sisaTebakan;
        tebakInput.disabled = false;
        buttonTebak.disabled = false;
    };

    const handleGuess = (e) => {
        e.preventDefault();

        const userGuess = document.getElementById('tebakInput').value;
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        if (sisaTebakan <= 0) {
            alert('Kesempatan Anda sudah habis! Silakan coba lagi.');
            disableGame();
            return;
        }

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            resultDisplay.innerText = 'Masukkan angka antara 1 dan 10!';
            resultDisplay.style.color = 'grey';
        } else if (userGuess === randomNumber) {
            resultDisplay.innerText = `Selamat! Tebakan Anda benar: ${randomNumber}`;
            resultDisplay.style.color = 'green';
            disableGame();
        } else {
            resultDisplay.innerText = `Tebakan salah! Angka yang benar adalah: ${randomNumber}`;
            resultDisplay.style.color = 'red';
            sisaTebakan--;
            sisaTebakanDisplay.innerText = sisaTebakan;

            if (sisaTebakan === 0) {
                alert('Kesempatan Anda sudah habis! Silakan coba lagi.');
                disableGame();
            }
        }
    };

    tebakAngkaForm.addEventListener('submit', handleGuess);

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        resetGame();
    });
});


