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