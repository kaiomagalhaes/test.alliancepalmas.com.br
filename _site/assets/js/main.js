// Menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('nav a');
    navLinksItems.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    // Check if we're on the homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    } else {
        // If we're on another page, navigate to homepage with section
        window.location.href = '/' + '#' + sectionId;
    }
}