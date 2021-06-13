function startGame() {
    for (var i = 1; i <= 9; i++) {
        resetGame(i);
    }
    var count = 1;
    var n = 1;
    document.winner = null;

    if (count % 2 == 0) {
        document.turn = "X";
        document.name = "You";
        count++;
    } else {
        document.turn = "O";
        document.name = "Computer";
        count++;
    }

}

function setMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function nextMove(box) {
    if (document.winner != null) {
        setMessage(document.winner + " Already wom the game! Play Agaim !!");
    } else if (box.textContent == "") {
        box.textContent = document.turn;
        switchTurn();
    } else {
        setMessage("Already occupied.");
    }
}

function switchTurn() {
    if (checkForWin(document.turn)) {
        if (document.turn == "X") {
            document.name = "You";
        } else {
            document.name = "Computer";
        }
        setMessage("Comgrats!! " + document.name + " - Winner.");
        document.winner = document.name;
    } else if (checkforTie()) {
        setMessage("It's a Tie...!! Play Agaim !!");
    } else if (document.turn == "X") {
        document.turn = "O";
        document.name = "Computer";
        setMessage("It's " + document.name + "'s turn!");
        document.getElementById("div" + n).textContent = "O";
        nextMove("div" + (n + 1));
        n = n + 2;
    } else {
        document.turn = "X";
        document.name = "You";
        setMessage("It's " + document.name + "r's turn!");
    }
}

function checkForWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("div" + number).textContent;
}

function resetGame(number) {
    document.getElementById("div" + number).textContent = "";
    count = 1;
    n = 1;
}

function checkforTie() {
    for (var i = 1; i < 10; i++) {
        if (getBox(i) == "")
            return false;
    }
    return true;
}