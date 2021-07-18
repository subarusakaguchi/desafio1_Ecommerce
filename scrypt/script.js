var counter = 0
var email = document.getElementById('email')

onload = function () {
    let counterTemp = localStorage.getItem('counter')
    if (counterTemp == undefined) {
        clear()
    } else {
        counter = parseInt(counterTemp)
    }
    //Teste para saber se algum email novo foi cadastrado
    console.log(`Quantidade de emails cadastrados: ${counter}`)
}

email.addEventListener('keyup', function (event) {
    let tecla = event.key
    if (tecla === "Enter") {
        event.preventDefault()
        document.getElementById('ctaBtn').click()
    }
})

function register() {
    let record = new createRecord(email.value)
    counter++
    localStorage.setItem(`email_${counter}`, JSON.stringify(record))
    let counterTxt = counter.toString()
    localStorage.setItem('counter', counterTxt)
}

function createRecord(email) {
    this.email = email
}

//Função para limpar os emails caso necessário
function clear() {
    localStorage.clear()
    counter = 0
}

// Countdown
// Usando como referência a Black friday deste ano de 2021
var countDownLimit = new Date('Nov 26, 2021 12:00:00').getTime()

var countDown = setInterval(function () {
    let now = new Date().getTime()
    let timeLeft = countDownLimit - now
    let days = Math.floor(timeLeft / (1000 * 24 * 3600))
    let hours = Math.floor((timeLeft % (1000 * 24 * 3600)) / (1000 * 3600));
    let minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let counterD = document.getElementById('counterD')
    let counterH = document.getElementById('counterH')
    let counterM = document.getElementById('counterM')
    let counterS = document.getElementById('counterS')

    counterD.innerText = days + 'd'
    counterH.innerText = hours + 'h'
    counterM.innerText = minutes + 'm'
    counterS.innerText = seconds + 's'


    if (timeLeft <= 0) {
        clearInterval(countDown)
        let timerContainer = document.getElementById('timerContainer')
        timerContainer.innerHTML = 'TERMINOU!'
    }
}, 1000)