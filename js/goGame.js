export const goGame = () => {
    const welcome = document.querySelector('.welcome');
    const table = document.querySelector('.table');
    const headerScore = document.querySelector('.header__score');
    const headerInitial = document.querySelector('.header__initial');

    welcome.style.display = 'none';
    headerInitial.style.display = 'none';

    headerScore.style.display = 'flex';
    table.style.display = 'grid';
}