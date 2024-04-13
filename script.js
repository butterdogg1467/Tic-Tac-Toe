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

    let gridItem1Clicked = false
    let gridItem2Clicked = false
    let gridItem3Clicked = false
    let gridItem4Clicked = false
    let gridItem5Clicked = false
    let gridItem6Clicked = false
    let gridItem7Clicked = false
    let gridItem8Clicked = false
    let gridItem9Clicked = false

    let playerTurn;
    playerTurn = 'playerTwo'
    
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

    let player1Stats = document.querySelector('.player1stats')
    let player2Stats = document.querySelector('.player2stats')

    let player1StatName = document.querySelector('.player1name')
    let player1StatWins = document.querySelector('.player1wins')

    let player2StatName = document.querySelector('.player2name')
    let player2StatWins = document.querySelector('.player2wins')

    let startGameButton = document.querySelector('#startgame')
    let startButtonClicked = false

    startGameButton.addEventListener('click', function() {
        startButtonClicked = true
        startGameButton.disabled = true
    })

    if (username1.value === '') {
        usernamebutton1.disabled = true
        usernamebutton1.textContent = 'Enter Player Name'
    }
    username1.addEventListener('input', function(){
        if (username1.value != '') {
            usernamebutton1.disabled = false
            usernamebutton1.textContent = 'Save Player Name'
        } else if (username1.value === '') {
            usernamebutton1.disabled = true
            usernamebutton1.textContent = 'Enter Player Names'
        }
    })

    usernamebutton1.addEventListener('click', function(){
        usernamebutton1.textContent = 'Player Name Saved'
        usernamebutton1.disabled = true
        username1.disabled = true
        usernamebutton1Clicked = true
        if (usernamebutton2Clicked === true) {
            startGameButton.disabled = false
        }
    })

    usernamebutton2.addEventListener('click', function(){
        usernamebutton2.textContent = 'Player Name Saved'
        usernamebutton2.disabled = true
        username2.disabled = true
        usernamebutton2Clicked = true
        if (usernamebutton1Clicked === true) {
            startGameButton.disabled = false
        }
        if (usernamebutton1Clicked !== true) {
            startGameButton.disabled = true
        } 
    })

    if (username2.value === '') {
        usernamebutton2.disabled = true
        usernamebutton2.textContent = 'Enter Player Names'
    }
    username2.addEventListener('input', function(){
        if (username2.value != '') {
            usernamebutton2.disabled = false
            usernamebutton2.textContent = 'Save Player Name'
        } else if (username2.value === '') {
            usernamebutton2.disabled = true
            usernamebutton2.textContent = 'Enter Player Names'
        }
    })

    if (usernamebutton1Clicked !== true && usernamebutton2Clicked !== true) {
        startGameButton.disabled = true
    } 

    let playerOneCreated = false
    let playerTwoCreated = false

    let gameStatus = document.querySelector('.gamestatus')
    let playerTurnDisplay = document.querySelector('.playerturn')

    gridItem1.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        } 
    })   

    gridItem2.addEventListener('click', function(){
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })   

    gridItem3.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })  

    gridItem4.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })   

    gridItem5.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })   

    gridItem6.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })  
    gridItem7.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })   

    gridItem8.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })   

    gridItem9.addEventListener('click', function(){
        
        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
        }
    })  

function createPlayer(name, playerNumber) {
    let player = {
        name: name,
        wins: 0,
        player2wins: 0,
        playerSelections: [],
        player2Selections: [],
        playerNumber: playerNumber,
    }
        resetGameButton.addEventListener('click', function () {
        player.playerSelections.length = 0
        player.player2Selections.length = 0
        gridItem1.textContent = ' '
        gridItem2.textContent = ' '
        gridItem3.textContent = ' '
        gridItem4.textContent = ' '
        gridItem5.textContent = ' '
        gridItem6.textContent = ' '
        gridItem7.textContent = ' '
        gridItem8.textContent = ' '
        gridItem9.textContent = ' '
        gridItem1Clicked = false
        gridItem2Clicked = false
        gridItem3Clicked = false
        gridItem4Clicked = false
        gridItem5Clicked = false
        gridItem6Clicked = false
        gridItem7Clicked = false
        gridItem8Clicked = false
        gridItem9Clicked = false
        playerTurn = 'playerTwo'
        gameboardSpace = 9
        playerTurnDisplay.textContent = ''
        gameStatus.textContent = ''
    })

    let playerArray = []

    playerArray.push(player.playerNumber)

    if (playerOneCreated === false && playerTwoCreated === false) {
        playerOneCreated = true
    }

    else if (playerTwoCreated === false && playerOneCreated === true) {
    }

    let playerSelections = player.playerSelections
    let player2Selections = player.player2Selections


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

        if (playerTurn === 'playerOne') {
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
        } else if (playerTurn === 'playerTwo') {
            if (player2Selections.length >= 3) {
                let player2SelectionsJoined = []
                for(let i = 0; i < playerSelections.length; i += 3) {
                    player2SelectionsJoined.push(player2Selections.slice(i, i + 3).join(''))
                }
                if (player2SelectionsJoined.includes('012') || player2SelectionsJoined.includes('000') || player2SelectionsJoined.includes('111') || player2SelectionsJoined.includes('222') || player2SelectionsJoined.includes('210')) {
                    addPoints()
                    player2Selections = []
                }
            }
        }

        if (gameboardSpace <= 1 && player.wins === 0 && player.player2wins === 0) {
            gameStatus.textContent = 'Game Tied!'
        }
    }


    function addPoints() {
        if (playerTurn === 'playerOne') {
            player.wins++
            gameboardSpace = 9
        } else if (playerTurn === 'playerTwo') {
            player.player2wins++
            gameboardSpace = 9
        }
    }

    function game(input) {
        if (playerTurn === 'playerOne') {
            playerSelections.push(input)
            playerInput()
            gameboardSpace = gameboardSpace - 1
            player1StatWins.textContent = 'Wins: ' + player.wins
        } else if (playerTurn === 'playerTwo') {
            player2Selections.push(input)
            playerInput()
            gameboardSpace = gameboardSpace - 1
            player2StatWins.textContent = 'Wins: ' + player.player2wins
        }
        
            if (player.wins >= 1){
                gameStatus.textContent = username1.value + ' Wins!'
            } else if (player.player2wins >= 1) {
                gameStatus.textContent = username2.value + ' Wins!'
            } 
            


    }

    gridItem1.addEventListener('click', function(){
        if (gridItem1Clicked === true){
            return
        }
        gridItem1Clicked = true

         if (gridItem1.textContent !== 'X' || gridItem1.textContent !== '0') {
            if (playerTurn === 'playerOne') {
                game(0)
                gridItem1.textContent = 'X'
                player.playerNumber = '2'
                playerTurnDisplay.textContent = username2.value + '`s Turn'
            } else if (playerTurn === 'playerTwo') {
                game(0)
                gridItem1.textContent = '0'
                player.playerNumber = '1'
                playerTurnDisplay.textContent = username1.value + '`s Turn'
            }
        } 
    })
    
    
    gridItem2.addEventListener('click', function(){
        if (gridItem2Clicked === true){
            return
        }
        gridItem2Clicked = true

        if (playerTurn === 'playerOne') {
            game(1)
            gridItem2.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(1)
            gridItem2.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })   

    gridItem3.addEventListener('click', function(){
        if (gridItem3Clicked === true){
            return
        }
        gridItem3Clicked = true

        if (playerTurn === 'playerOne') {
            game(2)
            gridItem3.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(2)
            gridItem3.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })  

    gridItem4.addEventListener('click', function(){
        if (gridItem4Clicked === true){
            return
        }
        gridItem4Clicked = true

        if (playerTurn === 'playerOne') {
            game(0)
            gridItem4.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(0)
            gridItem4.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })   

    gridItem5.addEventListener('click', function(){
        if (gridItem5Clicked === true){
            return
        }
        gridItem5Clicked = true

        if (playerTurn === 'playerOne') {
            game(1)
            gridItem5.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(1)
            gridItem5.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })   

    gridItem6.addEventListener('click', function(){
        if (gridItem6Clicked === true){
            return
        }
        gridItem6Clicked = true

        if (playerTurn === 'playerOne') {
            game(2)
            gridItem6.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(2)
            gridItem6.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })  
    gridItem7.addEventListener('click', function(){
        if (gridItem7Clicked === true){
            return
        }
        gridItem7Clicked = true

        if (playerTurn === 'playerOne') {
            game(0)
            gridItem7.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(0)
            gridItem7.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })   

    gridItem8.addEventListener('click', function(){
        if (gridItem8Clicked === true){
            return
        }
        gridItem8Clicked = true

        if (playerTurn === 'playerOne') {
            game(1)
            gridItem8.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(1)
            gridItem8.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })   

    gridItem9.addEventListener('click', function(){
        if (gridItem9Clicked === true){
            return
        }
        gridItem9Clicked = true

        if (playerTurn === 'playerOne') {
            game(2)
            gridItem9.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game(2)
            gridItem9.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }
    })  

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