export default function validaCpf(campo) {
    const cpf = campo.value

    function calculaDV(num) {
        var resto = 0, soma = 0;
        for (let i = 2; i < 11; i++) {
          soma += (num % 10) * i;
          num = parseInt(num / 10);
        }
        resto = soma % 11;
        return (resto > 1) ? (11 - resto) : 0;
      }
            
      let primeiro_digito = calculaDV(cpf);
      let segundo_digito = calculaDV(cpf * 10 + primeiro_digito)

    if (!cpf.match(/^\d+$/)) {
        campo.setCustomValidity('CPF só pode ter digitos, caracter')
    } else if(cpf[0] != primeiro_digito && cpf[1] != segundo_digito) {
        campo.setCustomValidity('Digitos verificados inválidos')
    }
}