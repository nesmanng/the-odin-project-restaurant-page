import './style.css';
import './menu/menu.css';
import './promotions/promotions.css';
import './contact/contact.css';
import './assets/cocktail-stock-image.jpg';
import './assets/bar-stock-image.jpg';


document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('about-button');
    const menuButton = document.getElementById('menu-button');
    const promotionsButton = document.getElementById('promotions-button');
    const contactButton = document.getElementById('contact-button');

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'menu.html';
    });

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    promotionsButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'promotions.html';
    });

    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html';
    });
});