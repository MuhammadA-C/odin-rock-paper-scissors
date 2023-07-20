let number = generateRandomNumber(3);
console.log(getComputerChoice(number));

//Generates a random number from 1 to x
function generateRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1;
}

function getComputerChoice(number) {
  switch (number) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "Error number is out of bounds. Numbers can only be 1 to 3";
  }
}
