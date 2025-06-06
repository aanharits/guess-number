document.addEventListener('DOMContentLoaded', () => {
    const buttonMode = document.getElementById('btn-mode');

    const setTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        buttonMode.innerText = theme === 'dark' ? '☀︎' : '🌙';
    };

    const toggleTheme = () => {
        const isDark = document.body.classList.contains('dark-mode');
        setTheme(isDark ? 'light' : 'dark');
    };

    // Inisialisasi tema saat halaman dimuat
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Event click tombol toggle
    buttonMode.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
});
