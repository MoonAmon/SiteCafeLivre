function showInfo(model) {
    var imageUrl = model.dataset.imageUrl;
    var price = model.dataset.price;

    var imageCell = document.querySelector('.machine-image');
    var priceCell = document.querySelector('.machine-price');
    imageCell.src = imageUrl;
    priceCell.textContent = price;
}