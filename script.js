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
            } 
        }
        if (playerSelections.length >= 3) {
            let playerSelectionsJoined = []
            for(let i = 0; i < playerSelections.length; i += 3) {
                playerSelectionsJoined.push(playerSelections.slice(i, i + 3).join(''))
            }
            if (playerSelectionsJoined.includes('012') || playerSelectionsJoined.includes('000') || playerSelectionsJoined.includes('111') || playerSelectionsJoined.includes('222') || playerSelectionsJoined.includes('210')) {
                addPoints()
                playerSelections = []
            }
        }

        if (gameboardSpace <= 1 && player.wins === 0) {
            player.ties++
            console.log('tied')
        }
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
        player,
        playerSelections
    }
}



































})