export function hamburger(){
    const menuHamburger = document.querySelector('.menu-hamburger');
    const links = document.querySelectorAll('.navbar a');
    
    menuHamburger.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.toggle('is-opened');
        });
        console.log(links)
        menuHamburger.classList.toggle('is-opened');
    });
} 
