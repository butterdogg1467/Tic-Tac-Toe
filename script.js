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

    let grid1TurnSwitched = false
    let grid2TurnSwitched = false
    let grid3TurnSwitched = false
    let grid4TurnSwitched = false
    let grid5TurnSwitched = false
    let grid6TurnSwitched = false
    let grid7TurnSwitched = false
    let grid8TurnSwitched = false
    let grid9TurnSwitched = false

    gridItem1.addEventListener('click', function(){
        if (grid1TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid1TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid1TurnSwitched = true
        } 
    
    })   

    gridItem2.addEventListener('click', function(){
        if (grid2TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid2TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid2TurnSwitched = true
        } 
    })   

    gridItem3.addEventListener('click', function(){
        if (grid3TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid3TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid3TurnSwitched = true
        } 
    })  

    gridItem4.addEventListener('click', function(){
        if (grid4TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid4TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid4TurnSwitched = true
        } 
    })   

    gridItem5.addEventListener('click', function(){
        if (grid5TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid5TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid5TurnSwitched = true
        } 
    })   

    gridItem6.addEventListener('click', function(){
        if (grid6TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid6TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid6TurnSwitched = true
        } 
    })  
    gridItem7.addEventListener('click', function(){
        if (grid7TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid7TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid7TurnSwitched = true
        } 
    })   

    gridItem8.addEventListener('click', function(){
        if (grid8TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid8TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid8TurnSwitched = true
        } 
    })   

    gridItem9.addEventListener('click', function(){
        if (grid9TurnSwitched === true) {
            return
        }

        if (playerTurn === 'playerOne') {
            playerTurn = 'playerTwo'
            grid9TurnSwitched = true
        } else if (playerTurn === 'playerTwo') {
            playerTurn = 'playerOne'
            grid9TurnSwitched = true
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
        player.wins = 0
        player.player2wins = 0
        player1Stats.style.backgroundColor = 'white'
        player1Stats.style.padding = '0px'
        player2Stats.style.backgroundColor = 'white'
        player2Stats.style.padding = '0px'
        grid1TurnSwitched = false
        grid2TurnSwitched = false
        grid3TurnSwitched = false
        grid4TurnSwitched = false
        grid5TurnSwitched = false
        grid6TurnSwitched = false
        grid7TurnSwitched = false
        grid8TurnSwitched = false
        grid9TurnSwitched = false
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
                
                if (playerSelections.includes('a1') && playerSelections.includes('a2') && playerSelections.includes('a3') 
                || playerSelections.includes('b1') && playerSelections.includes('b2') && playerSelections.includes('b3')
                || playerSelections.includes('c1') && playerSelections.includes('c2') && playerSelections.includes('c3')
                || playerSelections.includes('a1') && playerSelections.includes('b2') && playerSelections.includes('c3')
                || playerSelections.includes('c1') && playerSelections.includes('b2') && playerSelections.includes('a3')
                || playerSelections.includes('a1') && playerSelections.includes('b1') && playerSelections.includes('c1')
                || playerSelections.includes('a2') && playerSelections.includes('b2') && playerSelections.includes('c2')
                || playerSelections.includes('a3') && playerSelections.includes('b3') && playerSelections.includes('c3')) {
                    addPoints()
                    playerSelections = []
                }
            
        } else if (playerTurn === 'playerTwo') {
            if (player2Selections.includes('a1') && player2Selections.includes('a2') && player2Selections.includes('a3') 
                || player2Selections.includes('b1') && player2Selections.includes('b2') && player2Selections.includes('b3')
                || player2Selections.includes('c1') && player2Selections.includes('c2') && player2Selections.includes('c3')
                || player2Selections.includes('a1') && player2Selections.includes('b2') && player2Selections.includes('c3')
                || player2Selections.includes('c1') && player2Selections.includes('b2') && player2Selections.includes('a3')
                || player2Selections.includes('a1') && player2Selections.includes('b1') && player2Selections.includes('c1')
                || player2Selections.includes('a2') && player2Selections.includes('b2') && player2Selections.includes('c2')
                || player2Selections.includes('a3') && player2Selections.includes('b3') && player2Selections.includes('c3')) {
                    addPoints()
                    player2Selections = []
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

        
            if (playerTurn === 'playerOne') {
                game('a1')
                gridItem1.textContent = 'X'
                player.playerNumber = '2'
                playerTurnDisplay.textContent = username2.value + '`s Turn'
            } else if (playerTurn === 'playerTwo') {
                game('a1')
                gridItem1.textContent = '0'
                player.playerNumber = '1'
                playerTurnDisplay.textContent = username1.value + '`s Turn'
            }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
            
    })
    
    
    gridItem2.addEventListener('click', function(){
        if (gridItem2Clicked === true){
            return
        } 
    
        gridItem2Clicked = true

        if (playerTurn === 'playerOne') {
            game('a2')
            gridItem2.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('a2')
            gridItem2.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })   

    gridItem3.addEventListener('click', function(){
        if (gridItem3Clicked === true){
            return
        } 
    
        gridItem3Clicked = true

        if (playerTurn === 'playerOne') {
            game('a3')
            gridItem3.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('a3')
            gridItem3.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })  

    gridItem4.addEventListener('click', function(){
        if (gridItem4Clicked === true){
            return
        } 
    
        gridItem4Clicked = true

        if (playerTurn === 'playerOne') {
            game('b1')
            gridItem4.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('b1')
            gridItem4.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })   

    gridItem5.addEventListener('click', function(){
        if (gridItem5Clicked === true){
            return
        } 
    
        gridItem5Clicked = true

        if (playerTurn === 'playerOne') {
            game('b2')
            gridItem5.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('b2')
            gridItem5.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })   

    gridItem6.addEventListener('click', function(){
        if (gridItem6Clicked === true){
            return
        } 
    
        gridItem6Clicked = true

        if (playerTurn === 'playerOne') {
            game('b3')
            gridItem6.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('b3')
            gridItem6.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })  
    gridItem7.addEventListener('click', function(){
        if (gridItem7Clicked === true){
            return
        }
        gridItem7Clicked = true

        if (playerTurn === 'playerOne') {
            game('c1')
            gridItem7.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('c1')
            gridItem7.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })   

    gridItem8.addEventListener('click', function(){
        if (gridItem8Clicked === true){
            return
        }
        gridItem8Clicked = true

        if (playerTurn === 'playerOne') {
            game('c2')
            gridItem8.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('c2')
            gridItem8.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        }
    })   

    gridItem9.addEventListener('click', function(){
        if (gridItem9Clicked === true){
            return
        }
        gridItem9Clicked = true

        if (playerTurn === 'playerOne') {
            game('c3')
            gridItem9.textContent = 'X'
            player.playerNumber = '2'
            playerTurnDisplay.textContent = username2.value + '`s Turn'
        } else if (playerTurn === 'playerTwo') {
            game('c3')
            gridItem9.textContent = '0'
            player.playerNumber = '1'
            playerTurnDisplay.textContent = username1.value + '`s Turn'
        }

        if (playerTurn === 'playerOne') {
            player1Stats.style.backgroundColor = 'white';
            player2Stats.style.backgroundColor = '#37A6AF';
            player1Stats.style.padding = '0px';
            player2Stats.style.padding = '15px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
        } else if (playerTurn === 'playerTwo') {
            player1Stats.style.backgroundColor = '#37A6AF';
            player2Stats.style.backgroundColor = 'white';
            player1Stats.style.padding = '15px';
            player2Stats.style.padding = '0px';
            player1Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
            player2Stats.style.transition = 'background-color 0.5s ease, padding 0.5s ease';
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