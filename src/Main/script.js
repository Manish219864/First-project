document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    // Toggle menu for smaller screens
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dropdown interactions
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
