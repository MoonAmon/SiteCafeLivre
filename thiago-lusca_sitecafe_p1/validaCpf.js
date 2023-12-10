function validaCpf() {
    cpf = document.getElementById('cpf').value
    erro = document.getElementById('error')

    function calculaDV(num) {
        var resto = 0, soma = 0;
        for (let i = 2; i < 11; i++) {
            soma += (num % 10) * i;
            num = parseInt(num / 10);
        }
        resto = soma % 11;
        return (resto > 1) ? (11 - resto) : 0;
    }

    if (cpf.length === 0) {
        erro.innerHTML = "Nenhum caractere preenchido";
    } else if (cpf.length !== 11) {
        erro.innerHTML = "Digite os 11 caracteres";
    } else if (!cpf.match(/^\d+$/) && cpf.length == 11) {
        erro.innerHTML = 'Digite apenas os dígitos';
    } else {
        let primeiro_digito = calculaDV(parseInt(cpf.substring(0, 9)));
        let segundo_digito = calculaDV(parseInt(cpf.substring(0, 9) + primeiro_digito));

        if (parseInt(cpf[9]) !== primeiro_digito || parseInt(cpf[10]) !== segundo_digito) {
            erro.innerHTML = 'Dígitos verificadores inválidos';
        } else if (/^(\d)\1+$/.test(cpf)) {
            erro.innerHTML = 'CPF inválido (todos os dígitos são iguais)';
        } else {
            erro.innerHTML = '';
        }
    }
}
