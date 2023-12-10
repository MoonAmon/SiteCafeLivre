// Array de produtos
var saches = [
    {id: 'sache1', name: 'Expresso', price: 10.00},
    {id: 'sache2', name: 'Descafeinado', price: 20.00},
    {id: 'sache3', name: 'Livanto', price: 30.00},
    {id: 'sache4', name: 'Ristretto', price: 40.00},
    {id: 'sache5', name: 'Vanilio', price: 50.00},
    {id: 'sache6', name: 'Classico', price: 60.00},
    {id: 'sache7', name: 'Intenso', price: 70.00},
];

var maquinas = [    
    {id: 'maquina1', name: 'Piccolo', price: 80.00},
    {id: 'maquina2', name: 'Inissia C40', price: 90.00},
    {id: 'maquina3', name: 'U C50', price: 100.00},
    {id: 'maquina4', name: 'HD7811/96', price: 110.00},
];

function getSache(id) {
    for (var i = 0; i < saches.length; i++) {
        if (saches[i].id === id) {
            return saches[i];
        }
    }
    return null;
}

function getMaquina(id) {
    for (var i = 0; i < maquinas.length; i++) {
        if (maquinas[i].id === id) {
            return maquinas[i];
        }
    }
    return null;
}

var total = 0;  
var cart = [];

function addToCart() {
    var selectedSacheId = document.querySelector('#sache').value;
    var selectedSache = getSache(selectedSacheId);

    var selectedMaquinaId = document.querySelector('#maquina').value;
    var selectedMaquina = getMaquina(selectedMaquinaId);

    if (selectedSache) {
        cart.push(selectedSache);
    }

    var machineInCart = cart.find(function(item) {
        return item.type === 'maquina';
    });

    if (!machineInCart && selectedMaquina) {
        cart.push(selectedMaquina);
    }

    document.querySelector('#total').textContent =  total;
    updateCartInterface();

}

function removeItemFromCart(button) {
    var row = button.parentElement.parentElement;

    var totalForRow = parseFloat(row.children[1].textContent.substring(2));

    var totalElement = document.querySelector('#total');
    totalElement.textContent = parseFloat(totalElement.textContent) - totalForRow;

    row.parentElement.removeChild(row);
}

function updateCartInterface() {
    var cartTableBody = document.querySelector('#cart tbody'); 
    cartTableBody.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        
        var priceCell = document.createElement('td');
        priceCell.textContent = 'R$ ' + item.price.toFixed(2);
        row.appendChild(priceCell);

        var actionsCell = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'remove');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            removeItemFromCart(i);
        });
        actionsCell.appendChild(removeButton);
        row.appendChild(actionsCell);

        cartTableBody.appendChild(row);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartInterface();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#cart').addEventListener('click', function(e) {
        if (e.target.classList.contains('remove')) {
            removeItemFromCart(e.target);
        }
    });
});

document.getElementById('payment').addEventListener('change', function () {
    if (this.value === 'Cartão de Crédito') {
        $('#creditCardModal').modal('show');
    }
});
