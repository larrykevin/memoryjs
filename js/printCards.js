const contentsCards = document.querySelectorAll('.card__content');
const arrContentsCards = [...contentsCards];

document.querySelectorAll('.card').forEach(function(elemento) {
    elemento.addEventListener('click', revealCard);
});

function printCards(contentsCards, cards) {
    for (let i = 0; i < contentsCards.length; i++) {
        contentsCards[i].textContent = cards[i];
    }
}

function revealCard() {
    this.classList.add('reveal');
}

printCards(arrContentsCards, easyLevelCards());