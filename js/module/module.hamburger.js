export function hamburger(){
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('is-opened');
        menuHamburger.classList.toggle('is-opened');
    });
} 
