document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    // Check localStorage or system preference
    const currentTheme = localStorage.getItem('theme') || 
                         (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            toggleBtn.innerHTML = '☀️'; // Show sun to switch to light
        } else {
            toggleBtn.innerHTML = '🌙'; // Show moon to switch to dark
        }
    }

    // Accordion Logic
    const headers = document.querySelectorAll('.module-header');
    
    // Optional: Open the first accordion by default
    if(headers.length > 0) {
        const firstCard = headers[0].parentElement;
        firstCard.classList.add('active');
        const firstContent = firstCard.querySelector('.module-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + 150 + 'px';
    }

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            const content = card.querySelector('.module-content');
            const isActive = card.classList.contains('active');

            // Close all others
            document.querySelectorAll('.module-card').forEach(c => {
                c.classList.remove('active');
                const cContent = c.querySelector('.module-content');
                if (cContent) {
                    cContent.style.maxHeight = null;
                }
            });

            // Toggle current
            if (!isActive) {
                card.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 150 + 'px';
            }
        });
    });
});
