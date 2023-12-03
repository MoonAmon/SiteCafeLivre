export default function validaCpf(campo) {
    const cpf = campo.value

    if (!cpf.match(/^\d+$/)) {
        campo.setCustomValidity('Digite apenas digitos númericos')
    }
}