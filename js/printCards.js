export const printCards = level => {
    const table = document.querySelector('#table');
    table.innerHTML = '';

    level.forEach(function(contentCard) {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <span class="card__content">${contentCard}</span>
        `
        table.appendChild(card);
    })
}