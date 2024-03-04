export function hamburger(){
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar a');

    
    menuHamburger.addEventListener('click', () => {
        menuHamburger.classList.toggle('is-opened');
        navbar.classList.toggle('is-opened');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuHamburger.classList.toggle('is-opened');
            navbar.classList.remove('is-opened');
        })
    });
} 
