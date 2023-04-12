export default function initSoundsButtons() {
    const buttonFloresta = document.querySelector(".button-florest")
    const buttonChuva = document.querySelector(".button-rain")
    const buttonRestaurante = document.querySelector(".button-restaurant")
    const buttonFogo = document.querySelector(".button-fire")

    const floresta = new Audio("audios/Floresta.wav")
    const chuva = new Audio("audios/Chuva.wav")
    const restaurante = new Audio("audios/Cafeteria.wav")
    const fogo = new Audio("audios/Lareira.wav")

    function reset() {
        floresta.pause()
        chuva.pause()
        restaurante.pause()
        fogo.pause()
    }

    buttonFloresta.addEventListener('click', function() {
        reset()
        floresta.play()
    })

    buttonChuva.addEventListener('click', function() {
        reset()
        chuva.play()
    })

        buttonRestaurante.addEventListener('click', function() {
        reset()
        restaurante.play()
    })

    buttonFogo.addEventListener('click', function() {
        reset()
        fogo.play()
    })
}