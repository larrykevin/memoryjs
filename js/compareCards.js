import { printCards } from './printCards.js';
import { easyLevelCards } from './valueCards.js';
import { revealCards } from './revealCards.js';

export const compare = cardContent => {
    if (cardContent[0].textContent === cardContent[1].textContent) {
        success(cardContent);
    } else {
        error(cardContent);
    }
}

let count = 1;

function success(cards) {
    cards.forEach(element => {
        element.classList.add('success');
    });
}

function error(cards) {
    cards.forEach(element => {
        element.classList.add('error');
    });
    setTimeout(function() {
        cards.forEach(element => {
            element.classList.remove('reveal');
            element.classList.remove('error');
        });
    }, 500);

    const movePoints = document.querySelector('.move-points');
    movePoints.textContent = `0${count++}`;

    if (count > 8) {
        const table = document.querySelector('#table');
        count = 1;
        movePoints.textContent = `00`;

        table.innerHTML = '';
        table.appendChild(messageGameOver());

        const reinit = document.querySelector('.reinit');

        reinit.addEventListener('click', () => {
            printCards(easyLevelCards());
            revealCards();
        })
    }
}

function messageGameOver() {
    const messageGameOver = document.createElement('section');
    messageGameOver.className = 'message-over';

    messageGameOver.innerHTML = `
        <span class="dead"></span>
        <p>Game Over</p>
        <button class="reinit">¿Volver a intentar? -></button>
    `;

    return messageGameOver;
}

