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
let gridItem1 = document.querySelector('#griditem1')
    let gridItem2 = document.querySelector('#griditem2')
    let gridItem3 = document.querySelector('#griditem3')
    let gridItem4 = document.querySelector('#griditem4')
    let gridItem5 = document.querySelector('#griditem5')
    let gridItem6 = document.querySelector('#griditem6')
    let gridItem7 = document.querySelector('#griditem7')
    let gridItem8 = document.querySelector('#griditem8')
    let gridItem9 = document.querySelector('#griditem9')
    
    let gridItem1Clicked = false;
    let gridItem2Clicked = false;
    let gridItem3Clicked = false;
    let gridItem4Clicked = false;
    let gridItem5Clicked = false;
    let gridItem6Clicked = false;
    let gridItem7Clicked = false;
    let gridItem8Clicked = false;
    let gridItem9Clicked = false;
    

    let username1 = document.querySelector('#username1')
    let username2 = document.querySelector('#username2')
    let usernamebutton1 = document.querySelector('#username1button')
    let usernamebutton2 = document.querySelector('#username2button')

    let usernamebutton1Clicked = false
    let usernamebutton2Clicked = false

    usernamebutton1.addEventListener('click', function() {
        usernamebutton1Clicked = true
        createPlayer(username1.value)
    })

    usernamebutton2.addEventListener('click', function() {
        usernamebutton2Clicked = true
        createPlayer(username2.value)
    })

    let player1StatName = document.querySelector('.player1name')
    let player1StatPoints = document.querySelector('.player1points')
    let player1StatWins = document.querySelector('.player1wins')

    let player2StatName = document.querySelector('.player2name')
    let player2StatPoints = document.querySelector('.player2points')
    let player2StatWins = document.querySelector('.player2wins')

    let startGameButton = document.querySelector('#startgame')

    startGameButton.addEventListener('click', function() {
        usernamebutton1.disabled = true
        usernamebutton2.disabled = true
        username1.disabled = true
        username2.disabled = true
        game()
    })

    let playerOneCreated = false
    let playerTwoCreated = false

function createPlayer(name) {
    let player = {
        name: name,
        points: 0,
        wins: 0,
        ties: 0,
        playerSelections: []
    }

    let playerSelections = player.playerSelections


    if (usernamebutton1Clicked === true && playerOneCreated === false) {
        player1StatName.textContent = 'Player One Name: ' + username1.value
        player1StatPoints.textContent = 'Points: ' + player.points
        player1StatWins.textContent = 'Wins: ' + player.wins
        playerOneCreated = true
    } 
    
    if (usernamebutton2Clicked === true && playerTwoCreated === false){
        player2StatName.textContent = 'Player Two Name: ' + username2.value
        player2StatPoints.textContent = 'Points: ' + player.points
        player2StatWins.textContent = 'Wins: ' + player.wins
    }
    
    if (gridItem1Clicked === true) {
        playerSelections.push('1')
        alert(playerSelections)
    }

    let gameboardSpace = 9


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
    
    createPlayer.prototype.getPlayer = function() {
        return {
            player: player
        }
    };
    

    return {
        addPoints,  
        playerInput,
        name,
        player,
        playerSelections,
        getPlayer: createPlayer.prototype.getPlayer
    }

}

function game() {

}


































})