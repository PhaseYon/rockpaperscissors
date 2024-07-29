const choices = ['scissors', 'rock', 'paper']
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
humanScore = 0, computerScore = 0;
for (let i = 0; i < 5; i++){
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    let humanChoice = ((prompt("Rock, Paper, or Scissors?")).toLowerCase())
    let result = humanChoice == computerChoice ? "Tie" : rules[humanChoice] == computerChoice ? "Win" : "Loss"
    let display = (s) => s[0].toUpperCase() + s.slice(1)
    result == 'Win' ? humanScore++ : result == 'Loss' ? computerScore++ : void 0
    console.log(`Round: ${result}\nHuman - ${display(humanChoice)}\nComputer - ${display(computerChoice)}\nScore: ${humanScore} - ${computerScore}`);
}