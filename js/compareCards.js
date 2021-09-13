import { launchError } from "./launchMessages.js";
import { launchNextLevel } from './launchMessages.js';

export const compare = cardContent => {

    launchNextLevel()

    if (cardContent[0].textContent === cardContent[1].textContent) {
        success(cardContent);
    } else {
        error(cardContent);
    }
}

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

    launchError();
}