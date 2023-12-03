function getNumberCpf() {

    var card_number_regex = /^\d{16}$/;
    if (!cardNumberRegex.test(user_card_number)) {
        document.getElementById('errorCardNumber')
        return false;
    }
   var user_card_name = document.getElementById('cardName').value;
   var user_card_number = document.getElementById('cardNumber').value;
   var user_cpf = document.getElementById('userCpf').value;

   console.log(user_card_name, user_card_number)
}


document.getElementById('btn_credit').addEventListener('click', function() {
    getNumberCpf();
})
 
document.getElementById('payment').addEventListener('change', function(){
        if (this.value === 'Cartão de Crédito'){
            $('#creditCardModal').modal('show');
        }
    });