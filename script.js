document.addEventListener("DOMContentLoaded", function () {

    console.log("Сайт успешно загружен");

    const title = document.querySelector("header h1");

    title.addEventListener("click", function () {
        alert("Привет! Это моё портфолио 🚀");
    });

});
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add('show');
        }

    });

});