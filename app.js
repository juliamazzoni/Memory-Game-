//global variables
const bluey = {
    class: 'bluey',
    checkClass: 'checkBluey'
}

const bingo = {
    class: 'bingo',
    checkClass: 'checkBingo'
}

const mum = {
    class: 'mum',
    checkClass: 'checkMum'
}

const dad = {
    class: 'dad',
    checkClass: 'checkDad'
}

const muffin = {
    class: 'muffin',
    checkClass: 'checkMuffin'
}

const socks = {
    class: 'socks',
    checkClass: 'checkSocks'
}

let choicesArr = [bluey, bingo, mum, dad, muffin, socks];

let matchingBluey = 0;
let matchingBingo = 0;
let matchingMum = 0;
let matchingDad = 0;
let matchingMuffin = 0;
let matchingSocks = 0;

let playerTurn = 0;
let currentChar

let currentPlayer 

let player1 = prompt("Type the name of player 1 here");
let player2 = prompt("Type the name of player 2 here");

let scorePlayer1 = 0;
let scorePlayer2 = 0;

//dom elements 
const cardsElem = document.querySelectorAll('.cards');
const resetBtnElem = document.querySelector('.reset-btn');
const scorePlayer1Elem = document.querySelector('.score-player1');
const scorePlayer2Elem = document.querySelector('.score-player2');
const messageElem = document.querySelector('.message');
const giphyPlayer1Elem = document.querySelector('.giphy-player1');
const giphyPlayer2Elem = document.querySelector('.giphy-player2');
const player1Elem = document.querySelector('.player1');
const player2Elem = document.querySelector('.player2');
const headerPlayer1Elem = document.querySelector('.header-player1');
const headerPlayer2Elem = document.querySelector('.header-player2');

settingPlayersNames();
playerTurnColor();

//handle functions 
for (let card of cardsElem) {
    card.addEventListener('click', handleClick);
}

resetBtnElem.addEventListener('click', handleResetBtn);


function handleClick(event){
    const card = event.target;
    setCurrentChar();
    //alternate between players 
    if (!card.classList.contains('openedCard')){
        if(playerTurn < 2){
            card.classList.add('openedCard');
            if(card.classList.contains(bluey.class)||
            card.classList.contains(bingo.class)||
            card.classList.contains(mum.class)||
            card.classList.contains(dad.class)||
            card.classList.contains(muffin.class)||
            card.classList.contains(socks.class)){
                card.classList.remove('cardCover');
            }else{
                card.classList.remove('cardCover');
                card.classList.add(currentChar.class);
                card.classList.add(currentChar.checkClass);
            }
        
            if(card.classList.contains(bluey.class) &&
            card.classList.contains('openedCard')){
                matchingBluey++;
            }else if(card.classList.contains(bingo.class) &&
            card.classList.contains('openedCard')){
                matchingBingo++;
            }else if(card.classList.contains(mum.class) &&
            card.classList.contains('openedCard')){
                matchingMum++;
            }else if(card.classList.contains(dad.class) &&
            card.classList.contains('openedCard')){
                matchingDad++;
            }else if(card.classList.contains(muffin.class) &&
            card.classList.contains('openedCard')){
                matchingMuffin++;
            }else if(card.classList.contains(socks.class) &&
            card.classList.contains('openedCard')){
                matchingSocks++;
            }
    
            checkNumOfEqualCards();
            playerTurn++;
            setTimeout(checkingPairs, 1800);
            setTimeout(playerTurnColor, 1800);
        }else if(playerTurn >= 2){
            card.classList.add('openedCard');
            if(card.classList.contains(bluey.class)||
            card.classList.contains(bingo.class)||
            card.classList.contains(mum.class)||
            card.classList.contains(dad.class)||
            card.classList.contains(muffin.class)||
            card.classList.contains(socks.class)){
                card.classList.remove('cardCover');
            }else{
                card.classList.remove('cardCover');
                card.classList.add(currentChar.class);
                card.classList.add(currentChar.checkClass);
            }
        
            if(card.classList.contains(bluey.class) &&
            card.classList.contains('openedCard')){
                matchingBluey++;
            }else if(card.classList.contains(bingo.class) &&
            card.classList.contains('openedCard')){
                matchingBingo++;
            }else if(card.classList.contains(mum.class) &&
            card.classList.contains('openedCard')){
                matchingMum++;
            }else if(card.classList.contains(dad.class) &&
            card.classList.contains('openedCard')){
                matchingDad++;
            }else if(card.classList.contains(muffin.class) &&
            card.classList.contains('openedCard')){
                matchingMuffin++;
            }else if(card.classList.contains(socks.class) &&
            card.classList.contains('openedCard')){
                matchingSocks++;
            }
    
            checkNumOfEqualCards();
            playerTurn++;
            setTimeout(checkingPairs, 1800);
            setTimeout(resetPlayerTurn, 1800);
            setTimeout(playerTurnColor, 1800);
        }
    }     
     
}
 

function handleResetBtn(){
choicesArr = [bluey, bingo, mum, dad, muffin, socks];
playerTurn = 0;
playerTurnColor();
matchingBluey = 0;
matchingBingo = 0;
matchingMum = 0;
matchingDad = 0;
currentChar = 0;
scorePlayer1 = 0;
scorePlayer2 = 0;
messageElem.textContent = "";
player1 = prompt("Type the name of player 1 here");
player2 = prompt("Type the name of player 2 here");
settingPlayersNames();
scorePlayer1Elem.textContent = scorePlayer1;
scorePlayer2Elem.textContent = scorePlayer2;
for (let card of cardsElem){
    card.classList.remove('invisible');
    card.classList.add('cardCover');
}
}

//other functions 

function settingPlayersNames(){
    player1Elem.textContent = player1;
    player2Elem.textContent = player2;
}

function setCurrentChar(){
    currentChar = choicesArr[Math.floor(Math.random()*choicesArr.length)];
}

function resetPlayerTurn(){
    if(playerTurn === 4){
        playerTurn = 0;
    }
}

function checkNumOfEqualCards(){
    let checkBlueyCards = document.querySelectorAll('.checkBluey');
    let checkBingoCards = document.querySelectorAll('.checkBingo');
    let checkMumCards = document.querySelectorAll('.checkMum');
    let checkDadCards = document.querySelectorAll('.checkDad');
    let checkMuffinCards = document.querySelectorAll('.checkMuffin');
    let checkSocksCards = document.querySelectorAll('.checkSocks');

    removeCharFromArr(checkBlueyCards, bluey);
    removeCharFromArr(checkBingoCards, bingo);
    removeCharFromArr(checkMumCards, mum);
    removeCharFromArr(checkDadCards, dad);
    removeCharFromArr(checkMuffinCards, muffin);
    removeCharFromArr(checkSocksCards, socks);
}

function removeCharFromArr(checkCards, character){
    if(checkCards.length === 2){
        choicesArr.splice(choicesArr.indexOf(character),1);
        for(let checkCard of checkCards){
            checkCard.classList.remove(character.checkClass);
        }
    }
}

function checkingPairs() {
    let openedCards = document.querySelectorAll('.openedCard');
    settingCurrentPlayer();
    const invisibleCards = document.querySelectorAll('.invisible');

    if (playerTurn === 2 && matchingBluey === 1||
        playerTurn === 2 && matchingBingo === 1 ||
        playerTurn === 2 && matchingMum === 1 ||
        playerTurn === 2 && matchingDad === 1 ||
        playerTurn === 2 && matchingMuffin === 1 ||
        playerTurn === 2 && matchingSocks === 1 ||
        playerTurn === 4 && matchingBluey === 1||
        playerTurn === 4 && matchingBingo === 1 ||
        playerTurn === 4 && matchingMum === 1 ||
        playerTurn === 4 && matchingDad === 1 ||
        playerTurn === 4 && matchingMuffin === 1 ||
        playerTurn === 4 && matchingSocks === 1){
            matchingBluey = 0;
            matchingBingo = 0;
            matchingMum = 0;
            matchingDad = 0;
            matchingMuffin = 0;
            matchingSocks = 0;
            for (let card of cardsElem){
                if(card.classList.contains('openedCard')){
                    card.classList.remove('openedCard');
                    card.classList.add('cardCover');
                }
            }
    }else if(matchingBluey === 2 &&
        playerTurn === 2 ||
        matchingBluey === 2 &&
        playerTurn === 4){
            matchingBluey = 0;
            addingPoints();
            for (let openedCard of openedCards){    
                openedCard.classList.remove(bluey.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
            }else{
                messageElem.textContent = `Pawsome match, ${currentPlayer}! Bluey would be proud!`;
                setTimeout(emptyWinnerMessage, 4000);
            }
            
    }else if(matchingBingo === 2 &&
        playerTurn === 2 ||
        matchingBingo === 2 &&
        playerTurn === 4){
            matchingBingo = 0;
            addingPoints();
            for (let openedCard of openedCards){
                openedCard.classList.remove(bingo.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
            }else{
                messageElem.textContent = `Woof-tastic, ${currentPlayer}! You're a memory star, just like Bingo!`;
                setTimeout(emptyWinnerMessage, 4000);
            }

    }else if(matchingMum === 2 &&
        playerTurn === 2 ||
        matchingMum === 2 &&
        playerTurn === 4){
            matchingMum = 0;
            addingPoints();
            for (let openedCard of openedCards){
                openedCard.classList.remove(mum.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
            }else {
                messageElem.textContent = `Super sniffing skills, ${currentPlayer}! Just like the Heelers!`;
                setTimeout(emptyWinnerMessage, 4000);
            }
    }else if(matchingDad === 2 &&
        playerTurn === 2 ||
        matchingDad === 2 &&
        playerTurn === 4){
            matchingDad = 0;
            addingPoints();
            for (let openedCard of openedCards){
                openedCard.classList.remove(dad.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
            }else{
                messageElem.textContent = `Amazing match, ${currentPlayer}! You're playing just like Bandit!`;
                setTimeout(emptyWinnerMessage, 4000);
            }
        }else if(matchingMuffin === 2 &&
        playerTurn === 2 ||
        matchingMuffin === 2 &&
        playerTurn === 4){
            matchingMuffin = 0;
            addingPoints();
            for (let openedCard of openedCards){
                openedCard.classList.remove(muffin.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
        
            }else{
                messageElem.textContent = `High five, ${currentPlayer}! You've got the memory of a Heeler!`;
                setTimeout(emptyWinnerMessage, 4000);
            }
        }else if(matchingSocks === 2 &&
        playerTurn === 2 ||
        matchingSocks === 2 &&
        playerTurn === 4){
            matchingSocks = 0;
            addingPoints();
            for (let openedCard of openedCards){
                openedCard.classList.remove(socks.class);
                openedCard.classList.remove('openedCard');
                openedCard.classList.add('invisible');
            }if(cardsElem.length === invisibleCards.length){
                setTimeout(gameWinnerMessage, 1800);
            }else{
                messageElem.textContent = `You've got the memory of a champion, ${currentPlayer}! Bluey would agree!`;
                setTimeout(emptyWinnerMessage, 4000);
            }
    }
}

// function findingMatchingCards(matchingChar, character){
//     matchingChar = 0;
//         addingPoints();
//         for (let openedCard of openedCards){
//             openedCard.classList.remove(character.class);
//             openedCard.classList.remove('openedCard');
//             openedCard.classList.add('invisible');
//             }if(cardsElem.length === invisibleCards.length){
//                 setTimeout(gameWinnerMessage, 1800);
//             }else{
//                 messageElem.textContent = `You've got the memory of a champion, ${currentPlayer}! Bluey would agree!`;
//                 setTimeout(emptyWinnerMessage, 6000);
//             }
// }

function settingCurrentPlayer(){
    if(playerTurn === 2){
        currentPlayer = player1;
    }else if(playerTurn === 4){
        currentPlayer = player2;
    }
}

function addingPoints(){
    if(currentPlayer === player1){
        scorePlayer1++;
        scorePlayer1Elem.textContent = scorePlayer1;
        giphyPlayer1Elem.classList.add('winner-giphy');
    }else{
        scorePlayer2++;
        scorePlayer2Elem.textContent = scorePlayer2;
        giphyPlayer2Elem.classList.add('winner-giphy');
    }
}

function emptyWinnerMessage(){
    messageElem.textContent = "";
    giphyPlayer1Elem.classList.remove('winner-giphy');
    giphyPlayer2Elem.classList.remove('winner-giphy');
}

function gameWinnerMessage(){
    let winner 
    headerPlayer1Elem.classList.remove('playerTurn');
    headerPlayer2Elem.classList.remove('playerTurn');

    if(scorePlayer1 === scorePlayer2){
        messageElem.textContent = `No winner this time... play again!`;
    }else{
        
        if(scorePlayer1>scorePlayer2){
        winner = player1;
        }
        else if(scorePlayer2>scorePlayer1){
        winner = player2;
        }

    messageElem.textContent = `Hip, hip, hooray, ${winner}! You've earned the title of Memory Master with the Heelers!`;
    }
}

function playerTurnColor(){
    if(playerTurn<2){
        headerPlayer2Elem.classList.remove('playerTurn');
        headerPlayer1Elem.classList.add('playerTurn');
    }else if(playerTurn>=2){
        headerPlayer1Elem.classList.remove('playerTurn');
        headerPlayer2Elem.classList.add('playerTurn');
    }
}