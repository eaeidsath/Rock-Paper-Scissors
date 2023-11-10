
var wins = 0
var losses = 0
var ties = 0
var answer = ["R", "S", "P"];

function getRandomChoice() {
    var computerChoices = ["R", "S", "P"];
    var randomChoice = computerChoices[Math.floor(Math.random()*3)];
    return randomChoice;
}

function playGame() {
    var userChoice = prompt("Choose rock (R), paper (P), or scissors (S)");
    var computerChoice = getRandomChoice();
    alert(`Computer choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        ties++;
        window.alert("You tied " + ties + " times."); 
    } else if ((userChoice === "S" && computerChoice === "R") || (userChoice === "R" && computerChoice === "P") || (userChoice === "P" && computerChoice === "S")) {
        losses++;
        window.alert("You lost " + losses + " times."); 
    } else if ((userChoice === "S" && computerChoice === "P") || (userChoice === "R" && computerChoice === "S") || (userChoice === "P" && computerChoice === "R")) {
        wins++
        window.alert("You won " + wins + " times.");
    };
    window.alert(`Wins: ${wins}, Ties: ${ties}, Losses: ${losses}`)
    var playAgain = window.confirm("Play Again?");
    if (playAgain) {
        playGame();
    }
}

playGame();