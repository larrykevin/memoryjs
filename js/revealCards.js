export const cardReveals = () => {
    const cardsInTable = document.querySelectorAll('.card');

    cardsInTable.forEach(function(element) {
        element.addEventListener('click', function() {
            this.classList.add('reveal');
        });
    });
}