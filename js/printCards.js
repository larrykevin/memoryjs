const contentsCards = document.querySelectorAll('.card__content');
const arrContentsCards = [...contentsCards];

function printCards(contentsCards, cards) {
    for (let i = 0; i < contentsCards.length; i++) {
        contentsCards[i].textContent = cards[i];
    }
}

printCards(arrContentsCards, easyLevelCards());