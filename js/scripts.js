// inject current year into the footer
const dateNow = new Date();
const yearElement = document.querySelector('#year');
if (yearElement) {
    yearElement.textContent = dateNow.getFullYear();
}

// Hamburger menu functionality with proper icon toggling
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#menuButton');
    const mainNav = document.querySelector('#mainNav');
    
    console.log('DOM loaded, menuButton:', menuButton, 'mainNav:', mainNav);
    
    if (menuButton && mainNav) {
        // Click event
        menuButton.addEventListener('click', function() {
            console.log('Menu button clicked!');
            toggleMenu();
        });
        
        // Keyboard accessibility (Enter and Space keys)
        menuButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('#mainNav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        function toggleMenu() {
            const isOpen = mainNav.classList.contains('open');
            console.log('Toggle menu called, isOpen:', isOpen);
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        function openMenu() {
            console.log('Opening menu');
            mainNav.classList.add('open');
            menuButton.setAttribute('aria-expanded', 'true');
            menuButton.textContent = '✕'; // Change icon to close
            console.log('Menu classes after opening:', mainNav.className);
        }
        
        function closeMenu() {
            console.log('Closing menu');
            mainNav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = '☰'; // Change icon to hamburger
            console.log('Menu classes after closing:', mainNav.className);
        }
    }
});