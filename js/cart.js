//JS for navbar movement
window.addEventListener('scroll', function () {
    var div = document.querySelector('div');
    div.classList.toggle('sticky', window.scrollY > 0);
});

var cartItems = JSON.parse(localStorage.getItem('items'));
var table = document.getElementById('cart-table');
var tableRows = [];


for (let index = 0; index < cartItems.length; index++) {
    var tableRow = document.createElement('tr');
    var img = document.createElement('img');
    img.setAttribute('src', cartItems[index].img);
    for (let j = 0; j < 4; j++) {
        var qty = 0;
        if (j === 0) {
            var par = document.createElement('p');
            par.textContent = cartItems[index].name;
            var tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            tableData.appendChild(img);
            tableData.appendChild(par);
            table.appendChild(tableRow);
        } else if (j === 1) {
            var tableData = document.createElement('td');
            var par = document.createElement('p');
            par.textContent = `${cartItems[index].price} JD`;
            tableData.appendChild(par);
            tableRow.appendChild(tableData);
        } else if (j === 2) {
            var inputQuantity = document.createElement('input');
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Delete';
            removeButton.addEventListener('click', deleteItem);
            // tableRows.push(removeButton.parentElement.parentElement);
            inputQuantity.setAttribute('type', 'number');
            inputQuantity.setAttribute('min', '0');
            inputQuantity.setAttribute('value', '1');
            inputQuantity.setAttribute('class', cartItems[index].name);
            var tableData = document.createElement('td');
            tableData.appendChild(inputQuantity);
            tableData.appendChild(removeButton);
            tableRow.appendChild(tableData);
        }
    }
    // console.log(removeButton.parentElement.parentElement);
    // tableRows.push(removeButton.parentElement.parentElement);

}
// console.log(tableRows);
function deleteItem(event) {
    var removeClicked = event.target;
    console.log('', 'removeClicked =========>', removeClicked);
    for (let index = 0; index < quantityItemsArray.length; index++) {
        // if (inputQuantity.classList.value === cartItems[index].name) {
        //     console.log(cartItems[index].name, inputQuantity.classList.value);
        //     cartItems = cartItems.remove(cartItems[index]);
        //     quantityItemsArray.remove(quantityItemsArray[index]);
        //     console.log(inputQuantity.classList.value);
        //     console.log(cartItems);
    }
    localStorage.setItem('items', JSON.stringify(cartItems));
    updateTotal();
    removeClicked.parentElement.parentElement.remove();
    // console.log(localStorage);
    // console.log(cartItems);


}




var quantityItemsArray = [];
for (let index = 0; index < cartItems.length; index++) {
    quantityItemsArray.push(document.getElementsByClassName(cartItems[index].name)[0])
}
for (let index = 0; index < quantityItemsArray.length; index++) {
    var input = quantityItemsArray[index]
    input.addEventListener('change', updateQuantity)
}
function updateTotal() {
    var total = 0;
    // var quantityItemsArray = [];
    // for (let index = 0; index < cartItems.length; index++) {
    //     quantityItemsArray.push(document.getElementsByClassName(cartItems[index].name)[0])
    // }
    // console.log(quantityItemsArray);
    for (let index = 0; index < quantityItemsArray.length; index++) {
        var price = cartItems[index].price;
        var quantity = parseInt(quantityItemsArray[index].value)
        // console.log(price, quantity);
        total += (price * quantity);
    }
    console.log(total);
    return total;
}
function updateQuantity(event) {
    var quantity = event.target;
    if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1;
    } else {
        updateTotal();
    }
}

var purchase = document.getElementById('total-price');
var par = document.createElement('span');
purchase.addEventListener('click', function () {
    // var tableRow = document.createElement('tr');
    // var tableData = document.createElement('td');
    // var par = document.createElement('p');
    // var totalPrice = updateTotal();
    // par.textContent = 'Total';
    // tableData.appendChild(par);

    // var tableData2 = document.createElement('td');
    // var par2 = document.createElement('p');
    // par.textContent = `${totalPrice} JD`
    // tableData.appendChild(par2);
    // tableRow.appendChild(tableData2);
    // tableRow.appendChild(tableData);
    // table.appendChild(tableRow);
    var totalPrice = updateTotal();
    var tableSection = document.getElementById('table');
    par.textContent = `Total: ${totalPrice} JD`
    tableSection.appendChild(par);

});


Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        console.log(what);
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
            // console.log(a, 'hello', L, 'hellor', ax, 'Hi', arguments);
        }
    }
    return this;
};