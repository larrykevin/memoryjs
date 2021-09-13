export const messageNextLevel = level => {
    const messageNextLevel = document.createElement('section');
    const table = document.querySelector('#table');

    messageNextLevel.className = 'message-success';
    table.style.backgroundColor = '#ebdbff';

    messageNextLevel.innerHTML = `
        <span class="next"></span>
        <p>Nivel<br/>completado</p>
        <button class=${level}>Siguiente Nivel -></button>
    `;

    return messageNextLevel;
}