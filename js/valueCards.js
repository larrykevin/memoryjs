const cards = [
    ['👾', '🤖', '👻', '😺'],
    ['🚀', '🐵', '🍕', '💎'],
    ['🎮', '🏈', '🎁', '🪐']
];

const cardsGroupOne = cards[0];
const cardsGroupTwo = cards[1].concat(cardsGroupOne);
const cardsGroupThree = cards[2].concat(cardsGroupTwo);

const easyLevelCards = () => {
    let totalCardThisLevel = cardsGroupOne.concat(cardsGroupOne);
    totalCardThisLevel.sort(randomValue);

    return totalCardThisLevel;
}

const mediumLevelCards = () => {
    let totalCardThisLevel = cardsGroupTwo.concat(cardsGroupTwo);
    totalCardThisLevel.sort(randomValue);

    return totalCardThisLevel;
}

const hardLevelCards = () => {
    let totalCardThisLevel = cardsGroupThree.concat(cardsGroupThree);
    totalCardThisLevel.sort(randomValue);

    return totalCardThisLevel;
}

function randomValue() {
    return 0.5 - Math.random();
}