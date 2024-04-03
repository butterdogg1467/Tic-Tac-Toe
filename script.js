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
        wins: 0,
        ties: 0,
    }

    let gameboardSpace = 9

    let playerSelections = []

    function playerInput(input){

        if (typeof input === 'number'){
            let inputStr = input.toString()
            if (inputStr.length === 1) {
            gameboardSpace = gameboardSpace - 1
            playerSelections.push(input)
            } else if (inputStr.length === 2) {
                gameboardSpace = gameboardSpace - 2
                playerSelections.push(input)
            } else if (inputStr.length === 3) {
                gameboardSpace = gameboardSpace - 3
                playerSelections.push(input)
            } 
        }
        if (playerSelections.length >= 3) {
            let playerSelectionsJoined = playerSelections.join('')
            if (playerSelectionsJoined === '012' || playerSelectionsJoined === '000' || playerSelectionsJoined === '111' || playerSelectionsJoined === '222' || playerSelectionsJoined === '012') {
                alert('nigga')
            }
        }
    }


    function addPoints() {
        player.points++
        if (player.points >= 3) {
            player.wins++
            player.points = 0
        }
        if (gameboardSpace === 0 && player.wins === 0) {
            alert ('tie!')
        }
    }

    return {
        addPoints,  
        playerInput,
        name,
        player,
        playerSelections
    }
}



































})