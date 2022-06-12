// 此功能將首字母大寫
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// 此功能獲取手勢比較結果
function playRound(playSelection, computerSelection, round) {
    // 接收此輪結果
    let result = 0;

    // 進行比較
    if (playSelection === 'rock' && computerSelection === 'paper' ||
        playSelection === 'paper' && computerSelection === 'scissors' ||
        playSelection === 'scissors' && computerSelection === 'rock') {
        result = -1
    } else if (playSelection !== computerSelection) {
        result = 1
    }

    // 更改手勢文字大寫小
    playSelection = capitalizeFirstLetter(playSelection)
    computerSelection = capitalizeFirstLetter(computerSelection);

    // 輸出每輪結果
    alert(`Round ${round}\nYour Selection: ${playSelection}\nComputer Selection: ${computerSelection}`)

    return result;
}

// 此功能獲取使用者出的拳
function getPlayerChoose() { 
    let gesture = '';

    // 未輸入正確的值會持續循環
    while (gesture !== 'rock' && gesture !== 'paper' && gesture !== 'scissors') {
        
        gesture = prompt('請輸入 Rock, Paper, Scissors 開始猜拳')

        // 使用者取消輸入會終止循環
        if (gesture === null) {
            break;
        } else {
            // 將輸入的值保持一致小寫
            gesture = gesture.toLowerCase()
        }
    }

    return gesture;
}

// 此功能獲取電腦出的拳
function getComputerChoose() { 

    // 建立三種手勢資料
    let gesture = { 1: 'rock', 2: 'paper', 3: 'scissors' };

    // 取 1 - 3 隨機數且機率相同
    let randNum = 1 + Math.random() * (3 + 1 - 1);
    randNum = Math.floor(randNum)

    return gesture[randNum];
}

// 此功能為執行遊戲
function playGames() {
    // 計算遊戲的輪數
    let round = 1;

    // 計算分數
    let score = { win: 0, lose: 0 }

    // 執行 5 輪遊戲
    while (round <= 5) {
        // 接收使用者的拳
        let playerSelection = getPlayerChoose();

        // 玩家取消輸入會顯示提示並終止遊戲
        if (!playerSelection) {
            alert('你已取消遊戲')
            break;
        }

        // 接收電腦出的拳
        let computerSelection = getComputerChoose();
        
        // 獲取比較結果
        let result = playRound(playerSelection, computerSelection, round)

        
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

        // 輸出分數
        alert(`Round ${round}\nCurrent Score\nWin: ${score.win}, Lose: ${score.lose}`)
        round++
    }

    // 玩家在任何輪數取消輸入後終止遊戲
    if (round !== 6) {
        return
    }

    // 輸出結果
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