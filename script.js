
// 首字母大寫
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// 開始猜拳
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

    playSelection = ucFirst(playSelection)
    computerSelection = ucFirst(computerSelection);

    alert(`Your Selection: ${playSelection}\nComputer Selection: ${computerSelection}`)

    return result;
}

// 玩家選擇
function playerChoose() { 
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

// 電腦選擇
function computerPlay() { 
    // 3 種手勢
    let gesture = { 1: 'rock', 2: 'paper', 3: 'scissors' };

    // 隨機數 1 - 3
    let rand = 1 + Math.random() * (3 + 1 - 1);
    rand = Math.floor(rand)

    // 輸出手勢
    return gesture[rand];
}

function game() {
    let round = 0;
    let score = { win: 0, lose: 0 }

    while (round !== 5) {  
        let PlayerSelection = playerChoose();

        // 玩家取消選擇就終止
        if (!PlayerSelection) {
            break;
        }

        let computerSelection = computerPlay();
        let result = playRound(PlayerSelection, computerSelection)

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
game();