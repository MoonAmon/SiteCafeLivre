import validaCpf from "./validaCpf.js"

const tiposDeErro = [
    'valueMissing',
    'tooShort',
    'customError'
]

const mensagens = {
    cpf: {
        valueMissing: "O campo não pode estar vazio",
        tooShort: "CPF deve ter 11 digitos",
        customError: "Por favor, preencha um cpf válido"
    }
}

const cpfCampo = document.getElementById('cpf')

cpfCampo.addEventListener('blur', () => {
    cpfCampo.setCustomValidity('')
    let mensagem = ''

    if(cpfCampo.value != "") {
        validaCpf(cpfCampo)
    }

    tiposDeErro.forEach( (erro) => {
        if(cpfCampo.validity[erro]) {
            mensagem = mensagens[cpfCampo.name][erro]
        }
    } )

    const spanErro = document.querySelector('.mensagem-erro')
    const campoValido = cpfCampo.checkValidity()

    if(!campoValido) {
        spanErro.innerHTML = mensagem
    } else {
        spanErro.innerHTML = ""
    }
})




