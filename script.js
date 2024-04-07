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
    
    let gameForm = document.querySelector('.gameform')
    let resetGameButton = document.querySelector('.resetbutton')
    
    resetGameButton.addEventListener('click', function () {
        gridItem1.textContent = ' '
        gridItem2.textContent = ' '
        gridItem3.textContent = ' '
        gridItem4.textContent = ' '
        gridItem5.textContent = ' '
        gridItem6.textContent = ' '
        gridItem7.textContent = ' '
        gridItem8.textContent = ' '
        gridItem9.textContent = ' '
    })

    let username1 = document.querySelector('#username1')
    let username2 = document.querySelector('#username2')
    let usernamebutton1 = document.querySelector('#username1button')
    let usernamebutton2 = document.querySelector('#username2button')

    let usernamebutton1Clicked = false
    let usernamebutton2Clicked = false

    usernamebutton1.addEventListener('click', function() {
        usernamebutton1Clicked = true
        createPlayer(username1.value, '1')
    })

    usernamebutton2.addEventListener('click', function() {
        usernamebutton2Clicked = true
        createPlayer(username2.value, '2')
    })

    let player1StatName = document.querySelector('.player1name')
    let player1StatWins = document.querySelector('.player1wins')

    let player2StatName = document.querySelector('.player2name')
    let player2StatWins = document.querySelector('.player2wins')

    let startGameButton = document.querySelector('#startgame')

    startGameButton.addEventListener('click', function() {
        usernamebutton1.disabled = true
        usernamebutton2.disabled = true
        username1.disabled = true
        username2.disabled = true
    })

    if (username1.value === '') {
        startGameButton.disabled = true
        startGameButton.textContent = 'Please Enter a Name'
    }
    
    username1.addEventListener('input', function(){
        if (username1.value != '') {
            startGameButton.disabled = false
            startGameButton.textContent = 'Start Game'
        } else if (username1.value === '') {
            startGameButton.disabled = true
            startGameButton.textContent = 'Please Enter a Name'
        }
    })

    if (username2.value === '') {
        startGameButton.disabled = true
        startGameButton.textContent = 'Please Enter a Name'
    }
    
    username2.addEventListener('input', function(){
        if (username2.value != '') {
            startGameButton.disabled = false
            startGameButton.textContent = 'Start Game'
        } else if (username2.value === '') {
            startGameButton.disabled = true
            startGameButton.textContent = 'Please Enter a Name'
        }
    })

    let playerOneCreated = false
    let playerTwoCreated = false

    let gameStatus = document.querySelector('.gamestatus')

    let playerTurn;
    playerTurn = 'playerOne'

function createPlayer(name, playerNumber) {
    let player = {
        name: name,
        wins: 0,
        ties: 0,
        playerSelections: [],
        playerNumber: playerNumber
    }

    if (playerOneCreated === false && playerTwoCreated === false) {
        playerOneCreated = true
    }

    else if (playerTwoCreated === false && playerOneCreated === true) {
    }

    let playerSelections = player.playerSelections


    if (usernamebutton1Clicked === true && playerOneCreated === true) {
        player1StatName.textContent = 'Player One Name: ' + username1.value
        player1StatWins.textContent = 'Wins: ' + player.wins
    } 
    
    if (usernamebutton2Clicked === true && playerTwoCreated === false){
        player2StatName.textContent = 'Player Two Name: ' + username2.value
        player2StatWins.textContent = 'Wins: ' + player.wins
    }

    let gameboardSpace = 9

    function playerInput(input){

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
            gameStatus.textContent = 'Game Tied!'
        }
    }


    function addPoints() {
        player.wins++
        gameboardSpace = 9
    }

    function playerTurnSwitch() {
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    }


    function game(input) {
            playerSelections.push(input)
            playerInput()
            gameboardSpace = gameboardSpace - 1
            player1StatWins.textContent = 'Wins: ' + player.wins

            if (player.wins >= 1){
                gameStatus.textContent = `${player.name} Wins!`
            }
    }

    if (playerTurn === 'playerOne') {
    gridItem1.addEventListener('click', function(){
    game(0)
        gridItem1.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

    gridItem2.addEventListener('click', function(){
        game(1)
        gridItem2.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()      
        alert(playerTurn)
    })

    gridItem3.addEventListener('click', function(){
        game(2)
        gridItem3.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

    gridItem4.addEventListener('click', function(){
        game(0)
        gridItem4.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem5.addEventListener('click', function(){
        game(1)
        gridItem5.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem6.addEventListener('click', function(){
        game(2)
        gridItem6.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem7.addEventListener('click', function(){
        game(0)
        gridItem7.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem8.addEventListener('click', function(){
        game(1)
        gridItem8.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem9.addEventListener('click', function(){
        game(2)
        gridItem9.textContent = 'X'
        player.playerNumber = '2'
        playerTurnSwitch()
        alert(playerTurn)
    })

} 


else if (playerTurn === 'playerTwo') {
    gridItem1.addEventListener('click', function(){
        game(0)
        gridItem1.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

    gridItem2.addEventListener('click', function(){
        game(1)
        gridItem2.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

    gridItem3.addEventListener('click', function(){
        game(2)
        gridItem3.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

    gridItem4.addEventListener('click', function(){
        game(0)
        gridItem4.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
    })

gridItem5.addEventListener('click', function(){
        game(1)
        gridItem5.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem6.addEventListener('click', function(){
        game(2)
        gridItem6.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem7.addEventListener('click', function(){
        game(0)
        gridItem7.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem8.addEventListener('click', function(){
        game(1)
        gridItem8.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })

gridItem9.addEventListener('click', function(){
        game(2)
        gridItem9.textContent = 'O'
        player.playerNumber = '1'
        playerTurnSwitch()
        alert(playerTurn)
    })
}


    return {
        addPoints,  
        playerInput,
        name,
        player,
        playerSelections,
        game,
    }

}

































})