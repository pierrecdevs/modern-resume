const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    if (sections === null) {
        return;
    }

    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        // This will automatically set the link in the navbar to active
        // when you're at the right section.
        if (top >= offset && top < offset + height) {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
                const activeLink = document.querySelector(`header > nav > a[href*=${id}]`);
                if (activeLink !== null) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-x');
        console.log('navbar', navbar);
        navbar.classList.toggle('active');
    });
}