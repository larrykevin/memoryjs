document.querySelectorAll('.card').forEach(function(elemento) {
    elemento.addEventListener('click', revealCard);
});

function revealCard() {
    this.classList.add('reveal');
    const cardReveal = document.querySelectorAll('.card.reveal .card__content');
    const pairCards = [...cardReveal];
    console.log(pairCards[0]);
    console.log(pairCards[1]);
}
