let body = document.getElementById('body');
body.className = 'container';

function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = htmlContent;
    return element;
}

let state = 0;
function playGame() {
    if (this.innerText == '') {
        if (state % 2 == 0) {
            this.innerText = 'X';
        } else {
            this.innerText = 'O';
        }
        state++;
    }
}

function restartGame() {
    state = 0;
    body.innerHTML = '';
    buildGame();
}

let winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function buildGame() {
    let title = buildElement('h1', 'text-center my-5', '', 'Tic-Tac-Toe');
    body.appendChild(title);
    let gameBoard = buildElement('div', 'container', 'board', '');
    let tiles = 0;
    for (let i = 0; i < 3; i++) {
        let mainRow = buildElement('div', 'row border-top border-bottom mx-auto', 'gamerow', '');
        for (let j = 0; j < 3; j++) {
            let mainCol = buildElement('div', 'col-4 text-center border-right border-left p-5', tiles, '');
            tiles++;
            mainCol.addEventListener('click', playGame);
            mainRow.appendChild(mainCol);
        }
        gameBoard.appendChild(mainRow);
    }

    let buttonRow = buildElement('div', 'row', '', '');
    let buttonCol = buildElement('div', 'col-6 text-center mx-auto', '', '');
    let resetButton = buildElement('button', 'btn-primary my-5 mx-auto', 'reset', 'Reset Game');
    buttonCol.appendChild(resetButton);
    buttonRow.appendChild(buttonCol);
    gameBoard.appendChild(buttonRow);
    body.appendChild(gameBoard);
    resetButton.addEventListener('click', restartGame);
}

buildGame();