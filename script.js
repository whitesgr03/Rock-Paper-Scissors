// 開始猜拳
function PlayRound(playSelection, computerSelection) {

}

// 玩家選擇
function PlayerChoose() { 
    let result = '';

    // 沒有輸入正確的值或按取消就不會結束
    // do { 
    //     result = prompt('請輸入 Rock, Paper, Scissors 開始猜拳');
    // }
    // while (result !== 'rock' || result !== 'paper' || result !== 'scissors' || result !== null)

    // if (result) {
    //     return result.toLowerCase();
    // }

    // return false;
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

let PlayerSelection = PlayerChoose();

// 玩家未選擇就終止
if (PlayerSelection) {
    let computerSelection = computerPlay();
    PlayRound(PlayerSelection, computerSelection)
}


//  PROGRAM PlayRound
//      選擇 = {1: 剪刀, 2: 石頭, 3: 布};
//      玩家選擇 = "";
//      電腦選擇 = "";
//      PROGRAM PlayerSelection
//          玩家選擇 = prompt().toLowerCase();
//      END;
//      PROGRAM ComputerPlay
//          隨機數 = Math.random();
//          IF (隨機數是 1);
//              THEN 電腦選擇 = 剪刀;
//              THEN    IF ( 隨機數是 2 );
//                      THEN 電腦選擇 = 石頭;
//                      ELSE 電腦選擇 = 布;
//          ENDIF;
//      END;
//      IF (玩家選擇石頭 && 電腦選擇剪刀 ||
//         玩家選擇剪刀 && 電腦選擇布 ||
//         玩家選擇布 && 電腦選擇石頭);
//             THEN 印出 You win! 玩家選擇 beats 電腦選擇;
//             ELSE    IF (玩家選擇石頭 && 電腦選擇布 ||
//                         玩家選擇剪刀 && 電腦選擇石頭 ||
//                         玩家選擇布 && 電腦選擇剪刀);
//                         THEN 印出 You lose! 電腦選擇 beats 玩家選擇;
//                         ELSE 印出 Draw! 電腦選擇 玩家選擇;
//                     ENDIF;
//      ENDIF;
//  END;



//  PROGRAM RockPaperScissors
//      比賽 = {win: 0, lose: 0};
//      WHILE( 對戰未滿 5 場 )
//          玩家選擇 = prompt();
//          電腦選擇 = Math.random();
//          PROGRAM ComputerPlay
//              IF (玩家選擇石頭 && 電腦選擇剪刀 ||
//                  玩家選擇剪刀 && 電腦選擇布 ||
//                  玩家選擇布 && 電腦選擇石頭);
//                      THEN 比賽的 win + 1;
//                      ELSE    IF (玩家選擇石頭 && 電腦選擇布 ||
//                                  玩家選擇剪刀 && 電腦選擇石頭 ||
//                                  玩家選擇布 && 電腦選擇剪刀);
//                                  THEN 比賽的 lose + 1;
//                                  ELSE 印出平手;
//                              ENDIF;
//              ENDIF;
//           END;
//      ENDWHILE;
//      印出比賽;
//  END;