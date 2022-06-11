

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(playSelection, computerSelection) {
    let result = '';

    if (playSelection === computerSelection) {
        result = 'Drew!'
    } else if (playSelection === 'rock' && computerSelection === 'paper' ||
        playSelection === 'paper' && computerSelection === 'scissors' ||
        playSelection === 'scissors' && computerSelection === 'rock') {
        result = 'Lose'
    } else {
        result = 'Win'
    }

    playSelection = capitalizeFirstLetter(playSelection)
    computerSelection = capitalizeFirstLetter(computerSelection);

    alert(`Your Selection: ${playSelection}\nComputer Selection: ${computerSelection}`)

    return result;
}

function getPlayerChoose() { 
    let gesture = '';

// 未輸入正確的值之前持續循環
    while (gesture !== 'rock' && gesture !== 'paper' && gesture !== 'scissors') {
        
        gesture = prompt('請輸入 Rock, Paper, Scissors 開始猜拳')

        if (gesture === null) {
            alert('你已取消遊戲')
            break;
        } else {
            gesture = gesture.toLowerCase()
        }
    }

    return gesture;
}

function getComputerChoose() { 

    let gesture = { 1: 'rock', 2: 'paper', 3: 'scissors' };

    let randNum = 1 + Math.random() * (3 + 1 - 1);
    randNum = Math.floor(randNum)

    return gesture[randNum];
}

function playGames() {
    let round = 0;
    let score = { win: 0, lose: 0 }

    while (round !== 5) {  
        let playerSelection = getPlayerChoose();

        // 玩家取消選擇就終止
        if (!playerSelection) {
            break;
        }

        let computerSelection = getComputerChoose();
        let result = playRound(playerSelection, computerSelection)

        if (result === "Win") {
            score.win++
        } else if (result === 'Lose') {
            score.lose++
        }

        round++
    }

    if (round !== 5) {
        return
    }
    alert(`Scoreboard\nWin: ${score.win}, Lose: ${score.lose}`)

    if (score.win > score.lose) {
        alert(`You Win!`)
    } else if (score.win < score.lose) {
        alert(`You Lose!`)
    } else {
        alert(`Drew!`)
    }
}

alert('Start the 5 rounds game');
playGames();