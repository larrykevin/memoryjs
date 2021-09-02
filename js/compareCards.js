export const compare = cardContent => {
    if (cardContent[0].textContent === cardContent[1].textContent) {
        success()
    } else {
        error()
    }
}

function success() {
    console.log('success')
}

function error() {
    console.log('error')
}