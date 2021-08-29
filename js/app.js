const cards = ['👾', '🤖', '👻', '😺', '💣', '🍔'];
const buttonLetsGo = document.querySelector('.lets-go');

buttonLetsGo.addEventListener('click', function() {
    const welcome = document.querySelector('.welcome');
    const table = document.querySelector('.table');
    const headerScore = document.querySelector('.header__score');
    const headerInitial = document.querySelector('.header__initial');

    welcome.style.display = 'none';
    table.style.display = 'grid';
    headerInitial.style.display = 'none';
    headerScore.style.display = 'flex';
})

document.querySelectorAll('.card').forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        this.classList.add('reveal');
    });
});