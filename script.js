document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.chocolate-checkbox');
    const selectedList = document.getElementById('selected-list');
    const totalPriceElement = document.getElementById('total-price');

    let selectedChocolates = [];

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updateSelectedChocolates();
            updateTotalPrice();
        });
    });

    function updateSelectedChocolates() {
        selectedChocolates = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => ({
                name: checkbox.dataset.name,
                price: parseFloat(checkbox.dataset.price),
            }));

        renderSelectedChocolates();
    }

    function renderSelectedChocolates() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach(chocolate => {
            const listItem = document.createElement('li');
            listItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            selectedList.appendChild(listItem);
        });
    }

    function updateTotalPrice() {
        const totalPrice = selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
