import { goGame } from './goGame.js';
import { easyLevelCards, mediumLevelCards, hardLevelCards } from './valueCards.js';
import { printCards } from './printCards.js';
import { revealCards } from './revealCards.js';

const buttonReadyGame = document.querySelector('.ready');
buttonReadyGame.addEventListener('click', goGame);

printCards(easyLevelCards());

revealCards();