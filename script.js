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

function getPlayerChoose() { 
    let gesture = '';

    // 未輸入手勢則持續循環
    while (gesture !== 'rock' && gesture !== 'paper' && gesture !== 'scissors') {
        
        gesture = prompt('請輸入 Rock, Paper, Scissors 開始猜拳')

        if (gesture === null) {
            break;
        } else {
            // 將輸入的值保持一致小寫
            gesture = gesture.toLowerCase()
        }
    }

    return gesture;
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
    let score = { win: 0, lose: 0 }

    while (round <= 5) {
        let playerSelection = getPlayerChoose();

        if (!playerSelection) {
            alert('你已取消遊戲')
            break;
        }

        let computerSelection = getComputerChoose();
        let result = playRound(playerSelection, computerSelection, round)

        // 計分
        switch (result) {
            case 1: {
                score.win++
                break;
            }
            case -1: {
                score.lose++
                break;
            }
        }

        alert(`Round ${round}\nCurrent Score\nWin: ${score.win}, Lose: ${score.lose}`)
        
        round++
    }

    // 遊戲未滿 5 場提前終止
    if (round !== 6) {
        return
    }

    if (score.win > score.lose) {
        alert(`You win the game!`)
    } else if (score.win < score.lose) {
        alert(`You lose the game!`)
    } else {
        alert(`The game was Drew!`)
    }
}

// 提示執行 5 輪遊戲
alert('Start the 5 rounds game');
playGames();