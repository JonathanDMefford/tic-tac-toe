let body = document.getElementById('body');
body.className = 'container';

function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = htmlContent;
    return element;
}

let winCombo = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];


let state = 0;
function playGame() {
    let turnText = document.getElementById('turn');
    if (this.innerText == '') {
        if (state % 2 == 0) {
            this.innerText = 'X';
            turnText.innerHTML = "Player O's Turn";
        } else {
            this.innerText = 'O';
            turnText.innerHTML = "Player X's Turn";
        }
        state++;
    }

    for (let i = 0; i < winCombo.length; i++) {
        let win1 = winCombo[i][0];
        let win2 = winCombo[i][1];
        let win3 = winCombo[i][2];
        console.log(win1, win2, win3);
    }

    if (state >= 9) {
        turnText.innerHTML = 'The game is a tie!';
    }
}


function restartGame() {
    state = 0;
    body.innerHTML = '';
    buildGame();
}


function buildGame() {
    state = 0;
    let title = buildElement('h1', 'text-center my-4', 'title', 'Tic-Tac-Toe');
    let turn = buildElement('h6', 'text-center mt-3', 'turn', "Player X's Turn");
    title.appendChild(turn);
    body.appendChild(title);
    let gameBoard = buildElement('div', 'container', 'board', '');
    let tiles = 0;

    for (let i = 0; i < 3; i++) {
        let mainRow = buildElement('div', 'row border-top border-bottom mx-auto', 'gamerow', '');
        for (let j = 0; j < 3; j++) {
            let mainCol = buildElement('div', 'col-4 text-center border-right display-3 border-left pt-4', tiles, '');
            tiles++;
            mainCol.addEventListener('click', playGame);
            mainRow.appendChild(mainCol);
        }
        gameBoard.appendChild(mainRow);
    }

    let buttonRow = buildElement('div', 'row', '', '');
    let buttonCol = buildElement('div', 'col-6 text-center mx-auto', '', '');
    let resetButton = buildElement('button', 'btn-dark my-5 mx-auto', 'reset', 'Reset Game');
    resetButton.addEventListener('click', restartGame);
    buttonCol.appendChild(resetButton);
    buttonRow.appendChild(buttonCol);
    gameBoard.appendChild(buttonRow);
    body.appendChild(gameBoard);
}

buildGame();