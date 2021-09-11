export const compare = cardContent => {
    if (cardContent[0].textContent === cardContent[1].textContent) {
        success(cardContent);
    } else {
        error(cardContent);
    }
}

function success(cards) {
    cards.forEach(element => {
        element.classList.add('success');
    })
}

function error(cards) {
    cards.forEach(element => {
        element.classList.remove('reveal');
    })
}