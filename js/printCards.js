export const printCards = level => {
    const table = document.querySelector('#table');
    let cardsForLevel = level;
    table.innerHTML = '';

    cardsForLevel.forEach(function(contentCard) {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <span class="card__content">${contentCard}</span>
        `
        table.appendChild(card);
    })
}