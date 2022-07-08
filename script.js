"use strict";
// 此功能為更改字母大寫
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(playSelection, computerSelection, round) {
    let result = 0;

    // 進行比較
    if (playSelection === 'rock' && computerSelection === 'paper' ||
        playSelection === 'paper' && computerSelection === 'scissors' ||
        playSelection === 'scissors' && computerSelection === 'rock') {
        result = -1
    } else if (playSelection !== computerSelection) {
        result = 1
    }

    playSelection = capitalizeFirstLetter(playSelection)
    computerSelection = capitalizeFirstLetter(computerSelection);

    alert(`Round ${round}\nYour Selection: ${playSelection}\nComputer Selection: ${computerSelection}`)

    return result;
}

function getComputerChoose() { 
    let gesture = { 1: 'rock', 2: 'paper', 3: 'scissors' };

    // 取 1 - 3 隨機數且機率相同
    let randNum = 1 + Math.random() * (3 + 1 - 1);
    randNum = Math.floor(randNum)

    return gesture[randNum];
}

function playGames() {
    let round = 1;
    let score = 0; 

    const win_score = document.querySelector('.win');

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', function () {
        let playerSelection = this.textContent.toLowerCase();
        let computerSelection = getComputerChoose();
        let result = playRound(playerSelection, computerSelection, round)

        switch (result) {
            case 1: {
                score++
                break;
            }
        }

        win_score.textContent = score;
        round++
        
        if (score === 5) {
            setTimeout(() => {
                alert(`You win the game!`)
                alert(`Reset the game!`)
                score = 0;
                round = 1;
                win_score.textContent = score;
            }, 0);
        }
        
    }));
    
}

alert(`Let's play Rock, Paper, Scissors! get 5 points to win`)
playGames();