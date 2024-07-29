const choices = new Map([
    [0, "rock"],
    [1, "paper"],
    [2, "scissors"]
]);
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
humanScore = 0, computerScore = 0;
for (let i = 0; i < 5; i++){
    let getComputerchoice = () => choices.get(Math.floor(Math.random() * 3))
    let getHumanChoice = () => ((prompt("Rock, Paper, or Scissors?")).toLowerCase())
    let playRound = (computerChoice, humanChoice) => humanChoice == computerChoice ? "Tie" : rules[humanChoice] == computerChoice ? "Win" : "Loss"
    let display = (s) => s[0].toUpperCase() + s.slice(1)
    let humanChoice = getHumanChoice(), computerChoice = getComputerchoice();
    result = playRound(computerChoice, humanChoice)
    result == 'Win' ? humanScore++ : result == 'Loss' ? computerScore++ : void 0
    console.log(`Round: ${result}\nHuman - ${display(humanChoice)}\nComputer - ${display(computerChoice)}\nScore: ${humanScore} - ${computerScore}`);
}