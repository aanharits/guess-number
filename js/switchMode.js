document.addEventListener('DOMContentLoaded', () => {
        const buttonMode = document.getElementById('btn-mode');
        buttonMode.addEventListener('click', (e) => {
        e.preventDefault();

        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            buttonMode.innerText = '☀︎';
        } else {
            buttonMode.innerText = '🌙';
        }
    })
});
