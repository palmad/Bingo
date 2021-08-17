var NumbersUsed = new Array(50);
function init() {
    BingoCard();
}
function BingoCard() {
    clean();
    for (var i = 0; i < 50; i++) {
        if (i == 22)
            continue;
        createValue(i);
    }
}
function createValue(squareNum) {
    var currentSquare = "sq" + squareNum;
    var baseNumbers = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
    for (var i = 0; i < 50; i++) {
        newNumber = (baseNumbers[squareNum] * 10) + randomInt();
        if (NumbersUsed[newNumber] == false)
            break;
    }
    NumbersUsed[newNumber] = true;
    document.getElementById(currentSquare).value = newNumber;
}
function randomInt() {
    return Math.floor((Math.random() * 10) + 1);
}
function clean() {
    for (var i = 0; i < NumbersUsed.length; i++) {
        NumbersUsed[i] = false;
    }
}
function NewBingoCard() {
    BingoCard();
}
