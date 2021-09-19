//userChoice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
     if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
       return userInput;
     }else {
       return 'error';
     }
  }
  
  //computer random choice
  function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number === 0){
      return 'rock';
    }else if(number === 1){
      return 'paper';
    }else {
      return 'scissors';
    }
  }
  
  //set when user and cumputer chocie a answer then who will won
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      return 'tie';
    }
    if(userChoice === 'rock' && computerChoice === 'papper' || 
    userChoice === 'paper' && computerChoice === 'scissor' || 
    userChoice === 'scissor' && computerChoice === 'rock') {
      return 'computer won';
    }
    if(userChoice === 'rock' && computerChoice === 'scissor' || 
    userChoice === 'paper' && computerChoice === 'rock' || 
    userChoice === 'scissor' && computerChoice === 'papper' ||
    userChoice === 'bomb'){
    return 'user won';
    }
  }
  
  //start play game
  function playGame() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`userChoice ${userChoice}`);
    console.log(`computerChoice ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()