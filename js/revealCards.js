import { compare } from './compareCards.js';

export const revealCards = () => {
    const cardsInTable = document.querySelectorAll('.card');

    cardsInTable.forEach(function(element) {
        element.addEventListener('click', function() {
            let reveals
            const totalReveals = document.querySelectorAll('.reveal:not(.success)');

            if (totalReveals.length > 1) {
                return
            }

            this.classList.add('reveal');

            reveals = document.querySelectorAll('.reveal:not(.success)');
            if (reveals.length < 2) {
                return
            }

            compare(reveals);
            const successCards = document.querySelectorAll('.reveal.success');

            totalReveals.forEach(() => {
                if (successCards.length === cardsInTable.length) {
                    const table = document.querySelector('#table');
                    table.innerHTML = '';
                    table.appendChild(messageNextLevel());
                }
            })
        });
    });
}

function messageNextLevel() {
    const messageNextLevel = document.createElement('section');
    messageNextLevel.className = 'message-success';

    messageNextLevel.innerHTML = `
        <span class="dead"></span>
        <p>Game Over</p>
        <button class="reinit">¿Volver a intentar? -></button>
    `;

    return messageNextLevel;
}