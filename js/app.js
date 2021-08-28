const cards = ['👾', '🤖', '👻', '😺', '💣', '🍔'];
const buttonLetsGo = document.querySelector('.lets-go');

buttonLetsGo.addEventListener('click', function() {
    const welcome = document.querySelector('.welcome');
    const table = document.querySelector('.table');

    welcome.style.display = 'none';
    table.style.display = 'block';
})