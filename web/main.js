function botChoice(){
    return Math.floor(Math.random() * 3);
}


function playerChoice(id){
    if(id == 'rock'){
        return 0;
    }
    if(id == 'paper'){
        return 1;
    }
    if(id == 'scissor'){
        return 2;
    }
}

function display(player,bot, result){
    document.getElementById('playerResult').remove();
    document.getElementById('botResult').remove();
    document.getElementById('textResult').remove();
    var playerSide = document.createElement('img');
    var botSide = document.createElement('img');
    var textResult = document.createElement('h1');
    var textContent;

    var playerPanel = document.getElementById('playerC');
    var botPanel = document.getElementById('botC');
    var resultPanel = document.getElementById('result');


    //this is the player side
    if(player == 0){
        playerSide.src = "../assets/img/rock-pick.png";
        playerSide.id =  'playerResult';
        playerPanel.appendChild(playerSide);
    }
    if(player == 1){
        playerSide.src = "../assets/img/paper-pick.png";
        playerSide.id =  'playerResult';
        playerPanel.appendChild(playerSide);
    }
    if(player == 2){
        playerSide.src = "../assets/img/scissor-pick.png";
        playerSide.id =  'playerResult';
        playerPanel.appendChild(playerSide);
    }

    //this is the bot side
    if(bot == 0){
        botSide.src = "../assets/img/rock-pick.png";
        botSide.id =  'botResult';
        botPanel.appendChild(botSide);
    }
    if(bot == 1){
        botSide.src = "../assets/img/paper-pick.png";
        botSide.id =  'botResult';
        botPanel.appendChild(botSide);
    }
    if(bot == 2){
        botSide.src = "../assets/img/scissor-pick.png";
        botSide.id =  'botResult';
        botPanel.appendChild(botSide);
    }
    
    //this is the result part
    if(result == 0){
        textResult.textContent = "Player Win!";
        textResult.id = 'textResult';
        textResult.className = "win";
        resultPanel.appendChild(textResult);
    }
    if(result == 1){
        textResult.textContent = "Bot Win!";
        textResult.id = 'textResult';
        textResult.className = "lose";
        resultPanel.appendChild(textResult);
    }
    if(result == 2){
        textResult.textContent = "Both Tie!";
        textResult.id = 'textResult';
        textResult.className = "tie";
        resultPanel.appendChild(textResult);
    }

}



function play(rps){
    var bot = botChoice();
    var player = playerChoice(rps.id);
    var result;
    console.log("this is a bot", bot);
    console.log("this is a player", player);


    if(player == 0 && bot == 2 || player == 1 && bot == 0 || player == 2 && bot == 1){
        console.log("Player win");
        result = 0;
        display(player,bot, result);
    }
    if(player == 0 && bot == 1 || player == 1 && bot == 2 || player == 2 && bot == 0){
        console.log("Player lose");
        result = 1;
        display(player,bot, result);
    }
    if(player == 0 && bot == 0 || player == 1 && bot == 1 || player == 2 && bot == 2){
        console.log("tie");
        result = 2;
        display(player,bot, result);
    }
}