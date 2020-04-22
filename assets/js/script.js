function addRow() {
    var cardName = document.getElementById('card-name').value;
    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.innerHTML = cardName;
    var card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('p-1');
    card.appendChild(cardHeader);

    var cardColumn = document.createElement('div');
    cardColumn.classList.add('width-25');
    cardColumn.classList.add('p-04');
    cardColumn.appendChild(card);

    var cardBox = document.getElementById('card-box');
    cardBox.appendChild(cardColumn);
}