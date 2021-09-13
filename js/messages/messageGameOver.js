export const messageGameOver = () => {
    const messageGameOver = document.createElement('section');
    messageGameOver.className = 'message-over';

    messageGameOver.innerHTML = `
        <span class="dead"></span>
        <p>Game Over</p>
        <button class="reinit">¿Volver a intentar? -></button>
    `;

    return messageGameOver;
}