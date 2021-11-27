let numberInitial = document.querySelector("#txt-initial")
let numberEnd = document.querySelector("#txt-end")
let numberSteps = document.querySelector("#txt-steps")

const spaceCount = document.querySelector("#space-count")

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    response.style.display = 'block'
})

const btnSubmit = document.querySelector("#btn-submit")
btnSubmit.addEventListener("click", () => {
    if (numberInitial.value.length === 0 || numberEnd.value.length === 0) {
        response.innerHTML = "<font color='red'>Impossível contar!</font>"
        numberInitial.focus()
    }
    else if (numberSteps.value == 0) {
        response.innerHTML = "<font color='red'>Passo inválido! Considerando passo 1</font>"
        numberSteps.value = 1
        count()
    }
    else {
        count()
    }

    function count() {
        response.innerHTML = 'Contando: <br>'
        let formatNumInitial = Number(numberInitial.value)
        let formatNumEnd = Number(numberEnd.value)
        let formatNumSteps = Number(numberSteps.value)

        if (formatNumInitial <= formatNumEnd) {
            for (let count = formatNumInitial; count <= formatNumEnd; count += formatNumSteps) {
                response.innerHTML += `\u{1F449} ${count} `
            }
        } else {
            for (let count = formatNumInitial; count >= formatNumEnd; count -= formatNumSteps) {
                response.innerHTML += `\u{1F449} ${count} `
            }
        }
        response.innerHTML += `\u{1F3C1}`
    }
})

const response = document.querySelector("#resp")

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    numberInitial.value = ""
    numberEnd.value = ""
    numberSteps.value = ""
    response.innerHTML = 'Preparando para a contagem...'
    numberInitial.focus()
})