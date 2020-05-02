let playerSelection = 'rock';
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
let tieScore = 0; 
const playerScoreBoard = document.querySelector('#playerScore');
const computerScoreBoard = document.querySelector('#computerScore');
const tieScoreBoard = document.querySelector('#tieGames');

const playerChoices = document.querySelectorAll('.choice');
const newGame = document.querySelector('#newGame');

let finalCount = document.querySelector('#finalScore');

playerChoices.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = computerPlay(); 

        if (playRound(playerSelection,computerSelection).includes('win')) {
            playerScore++;
        } else if (playRound(playerSelection,computerSelection).includes('lose')) {
            computerScore++;
        } else if (playRound(playerSelection,computerSelection).includes('tie')) {
            tieScore++;
        } else {
            console.log(playRound(playerSelection,computerSelection));
        }

        if (playerScore === 5) {
            finalCount.textContent = 'You Win! Final score: ' + playerScore + 'wins, ' + computerScore + 'losses, ' + 'and ' + tieScore + 'tie games.';
        } else if (computerScore === 5) {
            finalCount.textContent = 'You lose! Final score: ' + playerScore + 'wins, ' + computerScore + 'losses, ' + 'and ' + tieScore + 'tie games.';
        } else {
            finalCount.textContent = playRound(playerSelection,computerSelection);
        }

        playerScoreBoard.textContent = playerScore;
        computerScoreBoard.textContent = computerScore;
        tieScoreBoard.textContent = tieScore;
    });
});

newGame.addEventListener('click', (e) => {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    tieScoreBoard.textContent = tieScore;
})

function humanPlay() {
    playerChoices.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerSelection = button.id;
        });
    });
}

function computerPlay() {
    let choice;

    let rando = Math.round(Math.random()*100);
    if (rando <= 33){
        choice = 'Rock';
    } else if (rando >= 67) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case 'Rock':
            switch (playerSelection) {
                case 'rock':
                    return 'All Rocks! That\'s a tie!';
                    break;
                case 'paper':
                    return 'You win! Paper beats Rock';
                    break;
                case 'scissors':
                    return 'You lose! Rock beats Scissors';
                    break;
                default:
                    return 'That\'s not a valid choice! Choose again';
            }
            break;
        case 'Paper':
            switch (playerSelection) {
                case 'rock':
                    return 'You lose! Paper beats Rock';
                    break;
                case 'paper':
                    return 'All paper! That\'s a tie';
                    break;
                case 'scissors':
                    return 'You win! Scissors beats Paper';
                    break;
                default:
                    return 'That\'s not a valid choice! Choose again';
            }
            break;
        case 'Scissors':
            switch (playerSelection) {
                case 'rock':
                    return 'You win! Rock beats Scissors';
                    break;
                case 'paper':
                    return 'You lose! Scissors beats Paper';
                    break;
                case 'scissors':
                    return 'All scissors! That\'s a tie';
                    break;
                default:
                    return 'That\'s not a valid choice! Choose again';
            }
            break;
        default:
            return 'Hi! I\'m the computer. I\'m going to DESTROY you';
    }
}