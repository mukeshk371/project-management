function addRow() {
    var cardName = document.getElementById('card-name').value;
    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.classList.add('mb-1')
    cardHeader.innerHTML = cardName;

    var addCardBtn = document.createElement('input');
    addCardBtn.setAttribute('placeholder', 'Add a Card');
    addCardBtn.classList.add('task-card-input');
    addCardBtn.classList.add('mr-05');
    addCardBtn.setAttribute('id', 'task-name')

    var addBtn = document.createElement('button');
    addBtn.classList.add('btn-primary');
    addBtn.innerHTML = 'Add';
    addBtn.addEventListener('click', function() {
        var taskName = addCardBtn.value;
        var cardList = document.createElement('div');
        cardList.classList.add('card');
        cardList.classList.add('p-1');
        cardList.classList.add('mb-1');
        cardList.innerHTML = taskName;
        if (taskName == '') {
            alert('Enter task name first');
        } else {
            cardBody.appendChild(cardList);
        }
    });

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

    if (cardName == '') {
        alert('Enter card name first');
    } else {
        cardBox.appendChild(cardColumn);
    }
}

