const button = document.querySelector('button')

// button.addEventListener('click', function () {
//     // Note: document.body does the same as document.querySelector('body').
//     const body = document.body

//     body.classList.toggle('button-is-clicked')
//     button.classList.toggle('is-clicked')
// })

// button.addEventListener('click', function () {
//     console.log('Something')
// })

button.addEventListener('click', function () {
    button.classList.toggle('is-clicked')
})