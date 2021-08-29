const buttonLetsGo = document.querySelector('.lets-go');

const contentsCards = document.querySelectorAll('.card__content');
const arrContentsCards = [...contentsCards];

buttonLetsGo.addEventListener('click', stylesChange);

document.querySelectorAll('.card').forEach(function(elemento) {
    elemento.addEventListener('click', revealCard);
});


function printCards(contentsCards, cards) {
    for (let i = 0; i < contentsCards.length; i++) {
        contentsCards[i].textContent = cards[i];
    }
}

function stylesChange() {
    const welcome = document.querySelector('.welcome');
    const table = document.querySelector('.table');
    const headerScore = document.querySelector('.header__score');
    const headerInitial = document.querySelector('.header__initial');

    welcome.style.display = 'none';
    headerInitial.style.display = 'none';

    headerScore.style.display = 'flex';
    table.style.display = 'grid';
}

function revealCard() {
    this.classList.add('reveal');
}

printCards(arrContentsCards, easyLevelCards());