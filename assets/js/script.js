var taskCardList = [];

function addRow() {
    var cardName = document.getElementById('card-name').value;
    var errorText1 = document.getElementById('error-text1');

    var taskCardDetails = {
        'name': cardName,
        'type': 'todo'
    }
    for (var i = 0; i < taskCardList.length; i++) {
        // if (taskCardList[i].name == taskCardDetails.name) {
        //     errorText1.innerHTML = 'red';
        // } else {
        //     taskCardList.push(taskCardDetails);
        // }
        if (taskCardList[i].name != taskCardDetails.name)
        taskCardList.push(taskCardDetails);
    }
    taskCardList.push(taskCardDetails);
    console.log(taskCardList);

    var cardHeaderName = document.createElement('strong');
    cardHeaderName.innerHTML = taskCardList[i].name;

    var removeBtn = document.createElement('a');
    removeBtn.setAttribute('href', 'javascript:void(0)');
    removeBtn.classList.add('btn-remove');
    removeBtn.innerHTML = svgJson.svg;
    removeBtn.addEventListener('click', function() {});

    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.appendChild(cardHeaderName);
    cardHeader.appendChild(removeBtn);

    var addCardBtn = document.createElement('input');
    addCardBtn.setAttribute('placeholder', 'Add a Card');
    addCardBtn.classList.add('task-card-input');
    addCardBtn.classList.add('mr-05');
    addCardBtn.setAttribute('id', 'task-name');

    var errorText = document.createElement('span');
    errorText.classList.add('error-text');

    var addBtn = document.createElement('button');
    addBtn.classList.add('btn-primary');
    addBtn.innerHTML = 'Add';
    addBtn.addEventListener('click', function () {
        var taskName = addCardBtn.value;
        var cardList = document.createElement('div');
        cardList.classList.add('card');
        cardList.classList.add('p-1');
        cardList.innerHTML = taskName;
        if (taskName == '') {
            errorText.innerHTML = 'Enter task name first';
            errorText.style.display = 'block';
        } else {
            errorText.style.display = 'none';
            cardBody.appendChild(cardList);
        }
    });

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.classList.add('p-1');

    var cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.classList.add('p-1');
    cardFooter.appendChild(addCardBtn);
    cardFooter.appendChild(addBtn);
    cardFooter.appendChild(errorText);

    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', 'card');
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    var cardColumn = document.createElement('div');
    cardColumn.classList.add('task-card');
    cardColumn.classList.add('p-04');
    cardColumn.appendChild(card);

    var cardBox = document.getElementById('todo-box');
    var bodyDiv = document.getElementById('body-div');

    if (cardName == '') {
        bodyDiv.style.padding = '141px 4px 4px 4px';
        errorText1.innerHTML = 'Enter task name first';
        errorText1.style.display = 'block';
    } else if (taskCardList[i] == taskCardDetails.name) {
        errorText1.innerHTML = 'Task already exist.';
    } else {
        bodyDiv.style.padding = '124px 4px 4px 4px';
        errorText1.style.display = 'none';
        cardBox.appendChild(cardColumn);
    }
}