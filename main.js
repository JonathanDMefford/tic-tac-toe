let body = document.getElementById('body');
body.className = 'container';

function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = htmlContent;
    return element;
}

let title = buildElement('h1', 'text-center my-5', '', 'Tic-Tac-Toe');
body.appendChild(title);

let gameBoard = buildElement('div', 'container', 'board', '');

for (let i = 0; i < 3; i++) { 
    let mainRow = buildElement('div', 'row border-top border-bottom', 'gamerow', '');
    for (let j = 0; j < 3; j++) {
        let mainCol = buildElement('div', 'col-4 text-center border-right border-left p-5', 'tile', 'x');
        mainRow.appendChild(mainCol);
    }
    gameBoard.appendChild(mainRow);
}

let resetButton = buildElement('button', 'btn-primary my-5', '', 'Reset Game');
gameBoard.appendChild(resetButton);


body.appendChild(gameBoard);