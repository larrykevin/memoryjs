const cards = [
    ['👾', '🤖', '👻', '😺'],
    ['🚀', '🐵', '🍕', '💎'],
    ['🎮', '🏈', '🎁', '🪐']
];

const easyLevelCards = () => {
    const cardsGroupOne = cards[0];
    const totalCardThisLevel = cardsGroupOne.concat(cardsGroupOne);
    totalCardThisLevel.sort(randomValue);

    const totalPoints = document.querySelector('.total-points');
    totalPoints.textContent = `0${totalCardThisLevel.length}`;

    return totalCardThisLevel;
}

const mediumLevelCards = () => {
    const cardsGroupTwo = cards[1].concat(cards[0]);
    const totalCardThisLevel = cardsGroupTwo.concat(cardsGroupTwo);
    totalCardThisLevel.sort(randomValue);

    const totalPoints = document.querySelector('.total-points');
    totalPoints.textContent = `${totalCardThisLevel.length}`;

    return totalCardThisLevel;
}

const hardLevelCards = () => {
    const cardsGroupTwo = cards[1].concat(cards[0]);
    const cardsGroupThree = cards[2].concat(cardsGroupTwo);
    const totalCardThisLevel = cardsGroupThree.concat(cardsGroupThree);
    totalCardThisLevel.sort(randomValue);

    const totalPoints = document.querySelector('.total-points');
    totalPoints.textContent = `${totalCardThisLevel.length}`;

    return totalCardThisLevel;
}

function randomValue() {
    return 0.5 - Math.random();
}

export { easyLevelCards, mediumLevelCards, hardLevelCards };