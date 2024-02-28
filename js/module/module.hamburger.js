export function hamburger(){
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navbar = document.querySelector('.navbar');
    
    menuHamburger.addEventListener('click', () => {
        menuHamburger.classList.toggle('is-opened');
        navbar.classList.toggle('is-opened');
    });
} 
