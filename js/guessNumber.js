document.addEventListener('DOMContentLoaded', () => {

    const tebakAngkaForm = document.getElementById('tebakForm');

    tebakAngkaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userGuess = parseInt(document.getElementById('tebakInput').value);
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const resultDisplay = document.getElementById('resultDisplay');
        const sisaTebakan = document.getElementById('sisaTebakan').innerText--;

        document.getElementById('resetButton').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('tebakInput').value = '';
            resultDisplay.innerText = '';
            resultDisplay.style.color = 'black';
            document.getElementById('sisaTebakan').innerText = 3; // Reset sisa tebakan
            document.getElementById('tebakInput').disabled = false;
            document.getElementById('buttonTebak').disabled = false;
            // const buttonTebak = document.getElementById('buttonTebak');
            // if (!buttonTebak) {
            //     const newButton = document.createElement('button');
            //     newButton.id = 'buttonTebak';
            //     newButton.innerText = 'Tebak Angka';
            //     newButton.type = 'submit';
            //     tebakAngkaForm.appendChild(newButton);
            // }
        });

        if (sisaTebakan === 0) {
            alert('Kesempatan Anda sudah habis! Silakan coba lagi.');
            resultDisplay.style.color = 'grey';
            document.getElementById('buttonTebak').disabled = true;
            document.getElementById('tebakInput').disabled = true;
            document.getElementById('sisaTebakan').innerText = 0;
            return;
        }

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            resultDisplay.innerText = 'Masukkan angka antara 1 dan 10!';
            resultDisplay.style.color = 'grey';
        } else if (userGuess === randomNumber) {
            resultDisplay.innerText = `Selamat! Tebakan Anda benar: ${randomNumber}`;
            resultDisplay.style.color = 'green';
        } else {
            resultDisplay.innerText = `Tebakan Anda salah. Angka yang benar adalah: ${randomNumber}`;
            resultDisplay.style.color = 'red';
        }
    })
})