import './style.css';
import './assets/cocktail-stock-image.jpg';
import './assets/bar-stock-image.jpg';

document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('about-button');
    const menuButton = document.getElementById('menu-button');

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'menu.html';
    });

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});