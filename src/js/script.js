function calcularTabuada() {
    const input = document.getElementById('numero')
    const resultado = document.getElementById('resultado')
    const numero = parseInt(input.value)
    let tabuada = ''

    if (input.value.trim() === '') {
        resultado.innerHTML = "<p class='alerta'>Por favor, digite um número válido.</p>"
        return
    }

    for (let i = 0; i <= 10; i++) {
        tabuada += `<p>${numero} x ${i} = ${numero * i}</p>`
    }

    resultado.innerHTML = tabuada
}

document.getElementById('numero').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calcularTabuada()
    }
})

