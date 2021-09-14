export const messageNextLevel = (level, iconLevel) => {
    const messageNextLevel = document.createElement('section');
    const table = document.querySelector('#table');

    messageNextLevel.className = 'message-success';
    table.style.padding = '48px 20px 0';

    messageNextLevel.innerHTML = `
        <span class="next"></span>
        <p>Nivel ${iconLevel}<br/>completado</p>
        <button class=${level}>Siguiente Nivel -></button>
    `;

    return messageNextLevel;
}