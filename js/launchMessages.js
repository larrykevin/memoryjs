import { printCards } from './printCards.js';
import { easyLevelCards, mediumLevelCards, hardLevelCards } from './valueCards.js';
import { revealCards } from './revealCards.js';
import { messageGameOver } from './messages/messageGameOver.js';
import { messageNextLevel } from './messages/messageNextLevel.js';

let count = 1;

export const launchError = () => {
    const movePoints = document.querySelector('.move-points');

    if (count < 10) {
        movePoints.textContent = `0${count++}`;
    } else {
        movePoints.textContent = `${count++}`;
    }

    const totalPoints = document.querySelector('.total-points');
    let totalMovements = Number(totalPoints.textContent);

    if (count > totalMovements) {
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

export const launchNextLevel = () => {
    const movePoints = document.querySelector('.move-points');
    const cardsSuccess = document.querySelectorAll('.card:not(.success)');
    const cardsInTable = document.querySelectorAll('.card');

    if (cardsSuccess.length < 3) {
        const table = document.querySelector('#table');
        table.innerHTML = '';

        if (cardsInTable.length >= 16) {
            table.appendChild(messageNextLevel('next-level-hard', 'Coyote'));
            table.style.background = 'linear-gradient(90deg, rgba(219,255,239,1) 0%, rgba(235,219,255,1) 35%, rgba(97,99,240,1) 100%)';

            const level = document.querySelector('.level');
            level.textContent = '🐯';

            const nextLevelHard = document.querySelector('.next-level-hard');
            nextLevelHard.addEventListener('click', () => {
                printCards(hardLevelCards());
                revealCards();
            })
        }
        if (cardsInTable.length < 15) {
            table.appendChild(messageNextLevel('next-level-medium', 'Pollito'));
            table.style.background = '#ebdbff';

            const level = document.querySelector('.level');
            level.textContent = '🦊';

            const nextLevelMedium = document.querySelector('.next-level-medium');
            nextLevelMedium.addEventListener('click', () => {
                printCards(mediumLevelCards());
                revealCards();
            })
        }

        count = 1;
        movePoints.textContent = `00`;
    }
}