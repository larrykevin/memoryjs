const cardsOne = ['👾', '🤖', '👻', '😺', '💣', '🍔'];
const cardsSum = cardsOne.concat(cardsOne);

function cardsRandom() {
    let distribute;
    distribute = cardsSum.sort(function() {
        return 0.5 - Math.random();
    });

    return distribute;
}

function printCards() {
    const table = document.getElementById('table');
    const resultOfRandomCards = cardsRandom();
    table.innerHTML = '';

    resultOfRandomCards.forEach(function(element, index) {
        const card = document.createElement('div');

        card.className = 'card';
        card.innerHTML = `
            <span class='card__content'>${element}</span>
        `

        table.appendChild(card);
    })
}

function reveal() {
    this.classList.add('reveal');
}

printCards();

document.querySelectorAll('.card').forEach(function(element) {
    element.addEventListener('click', reveal);
})