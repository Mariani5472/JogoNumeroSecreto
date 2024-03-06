function VerificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div><p>Valor inválido</p></div>'
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div><p>O número secreto precisa estar entre ${menorValor} e ${maiorValor}</p></div>`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <main>
            <h1>Você acertou!!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
        </main>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
        <p>O número secreto é menor <i class="fa-solid fa-angles-down"></i></p>
        </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>
        <p>O número secreto é maior <i class="fa-solid fa-angles-up"></i></p>
        </div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})