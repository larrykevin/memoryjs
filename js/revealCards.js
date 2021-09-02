export const cardReveals = () => {
    const cardsInTable = document.querySelectorAll('.card');

    cardsInTable.forEach(function(element) {
        element.addEventListener('click', function() {
            let reveals
            const totalReveals = document.querySelectorAll('.reveal');

            if (totalReveals.length > 1) {
                return
            }

            this.classList.add('reveal');

            reveals = document.querySelectorAll('.reveal');

            if (reveals.length < 2) {
                return
            }

            if (reveals[0].textContent === reveals[1].textContent) {
                console.log('success')
            } else {
                console.log('error')
            }
        });
    });
}