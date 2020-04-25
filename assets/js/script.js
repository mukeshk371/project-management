function addRow() {
    var cardName = document.getElementById('card-name').value;
    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.classList.add('mb-1')
    cardHeader.innerHTML = cardName;

    var addCardBtn = document.createElement('input');
    addCardBtn.setAttribute('placeholder', 'Add a Card');
    addCardBtn.setAttribute('id', 'task-name')

    var addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add';
    addBtn.setAttribute('onclick', 'addCard();');

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    var card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('p-1');
    card.setAttribute('id', 'card');
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(addCardBtn);
    card.appendChild(addBtn);

    var cardColumn = document.createElement('div');
    cardColumn.classList.add('task-card');
    cardColumn.classList.add('p-04');
    cardColumn.appendChild(card);

    var cardBox = document.getElementById('card-box');
    cardBox.appendChild(cardColumn);
}

function addCard() {
    var cardName = document.getElementById('task-name').value;
    var cardList = document.createElement('div');
    cardList.classList.add('card');
    cardList.classList.add('p-1');
    cardList.classList.add('mb-1');
    cardList.innerHTML = cardName;
    var card = document.getElementById('card');
    // console.log(card.children);
    card.childNodes[1].appendChild(cardList);
}