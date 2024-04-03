document.addEventListener('DOMContentLoaded', function () {

(function gameboard() {
    let rows = 3;
    let columns = 3;
    let board = [];

    for (let i = 0; i < rows; i++) {
        board [i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push(j)
        }
    }

    console.log(board)


} ())

function createPlayer(name) {
    let player = {
        name: name,
        points: 0,
        wins: 0
    }

    function playerInput(input){
        if (input === 111){
            addPoints()
        }
        alert(input)
    }

    function addPoints() {
        player.points++
        if (player.points >= 3) {
            player.wins++
            player.points = 0
        }
    }

    return {
        addPoints,  
        playerInput,
        name,
        player
    }
}



































})