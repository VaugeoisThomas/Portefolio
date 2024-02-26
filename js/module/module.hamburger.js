export function hamburger(){
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const main = document.querySelector('.main');
    
    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('is-opened');
        menuHamburger.classList.toggle('is-opened');
        main.classList.toggle('is-opened');
    });
} 
