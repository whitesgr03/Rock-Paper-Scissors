"use strict";

playGame = setGame(playGame);

alert(`Let's play Rock, Paper, Scissors! get 5 points to win`)

getButtons();

function getButtons() {
    // 宣告一個變數來儲存猜拳按鈕
    const buttons = document.querySelectorAll('button');
    // 每一個按鈕監聽點擊事件執行 playGames
    buttons.forEach(button => button.addEventListener('click', playGame));
}

function playGame(...arg) {
    // 建立三個變數來儲存參數
    let [player, com, round] = arg;
    // 建立一個變數來儲存比較結果
    let result = 0;

    // 進行比較
    if (
        player === 'rock' && com === 'paper' ||
        player === 'paper' && com === 'scissors' ||
        player === 'scissors' && com === 'rock' ||
        player === com
    ) {
        result = 0
    } else {
        result = 1
    }
    // 將玩家選擇的字串首字母轉成大寫
    player = capitalizeFirstLetter(player)
    // 將電腦選擇的字串首字母轉成大寫
    com = capitalizeFirstLetter(com);

    alert(`Round ${round}\nYour Selection: ${player}\nComputer Selection: ${com}`)
    // 回傳結果
    return result;
}

function setGame(playRound) {
    // 建立一個變數來儲存目前的分數
    let currentScore = 0; 
    // 建立一個變數來儲存目前的回合數
    let currentRound = 1;
    // 建立一個常數來儲存元素
    const show_score = document.querySelector('.score');

    return function () {
        // 建立一個變數來儲存玩家的選擇
        const playerSelection = this.textContent.toLowerCase();
        // 建立一個變數來儲存電腦的選擇
        const computerSelection = getComputerChoose();
        // 建立一個變數來儲存比賽的結果
        const result = playRound(playerSelection, computerSelection, currentRound)
        // 目前的回合數 + 1
        currentRound++;
        // 如果分數不是 1 的話, 停止後續
        if (!result) return
        // 目前的分數 + 1
        currentScore++;
        // 將元素的文字改目前的分數
        show_score.textContent = currentScore;
        // 如果分數小於 5 的話, 停止後續
        if (currentScore < 5) return
        setTimeout(() => {
            // 發出獲勝訊息並重置遊戲
            alert(`You win the game!`)
            alert(`Reset the game!`)
            // 現在的分數等於 0
            currentScore = 0;
            // 現在的回合數等於 1
            currentRound = 1;
            // 將元素的文字改目前的分數
            show_score.textContent = currentScore;
        })
    }
}

function getComputerChoose() { 
    // 建立一個陣列儲存 3 種猜拳手勢
    const GESTURE = ['rock', 'paper', 'scissors']
    // 建立一個變數來儲存隨機數
    const randNum = randomInteger(0, 2)
    // 回傳手勢
    return GESTURE[randNum];
}

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}