let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let displayText = document.getElementById("displayText");
let gameWon = false;

// This adds event listener to all elements with the 'box' class
const boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.addEventListener("click", setBox);
}

function setBox() {
    // If someone already won it won't let players make any other changes to the board
    if (gameWon) {
        return;
    }
    // Retrieves the id and splits it into row and col
    let boxId = this.id.split("-");
    let row = parseInt(boxId[0]);
    let col = parseInt(boxId[1]);
    console.log(currentPlayer);
    // If someone already marked that box then end function
    if (board[row][col] != "") {
        return;
    } else {
        // First updates game board logically, the one beneath updates the visual game board
        board[row][col] = currentPlayer;
        this.innerHTML = currentPlayer.fontsize("100px");
        switchPlayers();
        checkWin();
    }
}

function switchPlayers() {
    if (currentPlayer == playerO) {
        currentPlayer = playerX;
        displayText.innerText = "X's turn";
    } else {
        currentPlayer = playerO;
        displayText.innerText = "O's turn";
    }
}

function checkWin() {
    // Checks for horizontal win
    for (let x = 0; x < 3; ++x) {
        if (board[x][0] == board[x][1] && board[x][1] == board[x][2] && board[x][2] != "") {
            gameWon = true;
            displayText.innerText = board[x][0] + " won!";
            return;
        }
    }
    // Checks for vertical win
    for (let y = 0; y < 3; ++y) {
        if (board[0][y] == board[1][y] && board[1][y] == board[2][y] && board[2][y] != "") {
            gameWon = true;
            displayText.innerText = board[0][y] + " won!";
            return;
        }
    }
    // Checks for diagonal win
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != "") {
        gameWon = true;
        displayText.innerText = board[0][0] + " won!";
        
    }
    // Counterdiagonal
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != "") {
        gameWon = true;
        displayText.innerText = board[0][2] + " won!";
        
    }
}
