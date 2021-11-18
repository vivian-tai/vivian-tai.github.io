(function () {
    'use strict';
    console.log("reading js");

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const boopBtn = document.getElementById('startgame');
    const boopSound = new Audio ('media/bark.mp3');
    const beepSound = new Audio ('media/kitten3.mp3');

    boopBtn.addEventListener('mousedown', function() {
        beepSound.play();
    })

    boopBtn.addEventListener('mouseup', function() {
        boopSound.play();
    })

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['DOG', 'CAT'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function() {
        //randomly set game index here
        gameData.index = Math.round(Math.random());

        gameControl.innerHTML = '<h2>Who Will Win?<h2>';
        gameControl.innerHTML += '<button id="quit">QUIT</button>';

        //add event listener for the new button

        document.getElementById('quit').addEventListener("click", function() {
            location.reload();
        })
        setUpTurn();
    })

    function setUpTurn() {
        game.innerHTML = `<p>${gameData.players[gameData.index]}'S TURN</p>`;
        actionArea.innerHTML = '<button id="roll">ROLL</button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>${gameData.players[gameData.index]}'S TURN</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
        <img src="${gameData.dice[gameData.roll2-1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh no! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;

            //ternary operator
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show current score
            setTimeout(setUpTurn, 2000);
        }

        //if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p> You rolled a one! Switching to ${gameData.players[gameData.index]
            }</p>`;
            setTimeout(setUpTurn, 2000);
        }

        //if neither die is a 1
        else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">ROLL AGAIN</button> <button id="pass">PASS</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
           
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "NEW GAME";
        } else {
            //show current score
            score.innerHTML = `<p><strong>
            ${gameData.score[0]}</strong></p> <p><strong>
            ${gameData.score[1]}</strong></p>`;
        }

    }

    function showCurrentScore() {
        score.innerHTML = `<p><strong>
            ${gameData.score[0]}</strong></p> <p><strong>
            ${gameData.score[1]}</strong></p>`;
    }


})();