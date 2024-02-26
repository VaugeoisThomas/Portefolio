import { toggleTheme } from './module.toggle.js';

export function changeTheme () {
    const button = document.querySelector('#theme-button');
    const logo = document.querySelector('#theme-logo');
    let theme = "light";

    button.addEventListener('click', () => {
        if(theme === "light") { 
            theme = "dark"
            logo.src = "./img/sun.svg"
        }
        else if(theme === "dark") { 
            theme = "light" 
            logo.src = "./img/moon.svg"
        }
        else return;
        toggleTheme(theme)
    });
}