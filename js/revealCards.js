import { compare } from './compareCards.js';

export const cardReveals = () => {
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
        });
    });
}